import "dotenv/config";
import express from "express";
import multer from "multer";
import fs from "node:fs/promises";
import Replicate from "replicate";
import {
  EXTERIOR_PROMPT,
  INTERIOR_PROMPT,
  CLOSEUP_PROMPT,
} from "./prompts.js";

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const background = await fs.readFile("./input/fundo.jpeg");

const PROMPTS = {
  exterior: EXTERIOR_PROMPT,
  interior: INTERIOR_PROMPT,
  closeup: CLOSEUP_PROMPT,
};

app.use(express.static("."));

app.post(
  "/api/process-batch",
  upload.fields([
    { name: "exterior" },
    { name: "interior" },
    { name: "closeup" },
  ]),
  async (req, res) => {
    try {
      const allFiles = [
        ...(req.files?.exterior || []),
        ...(req.files?.interior || []),
        ...(req.files?.closeup || []),
      ];

      if (allFiles.length === 0) {
        return res.status(400).send("Nenhuma imagem enviada.");
      }

      if (allFiles.length > 10) {
        return res.status(400).send("Máximo de 10 imagens.");
      }

      const results = [];

      async function runModel(images, prompt) {
        const output = await replicate.run("black-forest-labs/flux-2-pro", {
          input: {
          prompt,
          input_images: images,
          output_format: "jpg",
          aspect_ratio: "4:3"
        },
        });

        const file = Array.isArray(output) ? output[0] : output;

        if (!file) {
          throw new Error("Nenhuma imagem retornada pelo modelo.");
        }

        if (typeof file === "string") {
          const response = await fetch(file);
          if (!response.ok) {
            throw new Error(`Falha ao baixar output: ${response.status}`);
          }
          return Buffer.from(await response.arrayBuffer());
        }

        if (typeof file.blob === "function") {
          const blob = await file.blob();
          return Buffer.from(await blob.arrayBuffer());
        }

        if (
          typeof ReadableStream !== "undefined" &&
          file instanceof ReadableStream
        ) {
          const response = new Response(file);
          return Buffer.from(await response.arrayBuffer());
        }

        if (typeof file.arrayBuffer === "function") {
          return Buffer.from(await file.arrayBuffer());
        }

        throw new Error("Formato de output não reconhecido.");
      }

      for (const file of req.files?.exterior || []) {
        const img = await runModel(
          [file.buffer, background],
          PROMPTS.exterior
        );
        results.push(img.toString("base64"));
      }

      for (const file of req.files?.interior || []) {
        const img = await runModel([file.buffer], PROMPTS.interior);
        results.push(img.toString("base64"));
      }

      for (const file of req.files?.closeup || []) {
        const img = await runModel([file.buffer], PROMPTS.closeup);
        results.push(img.toString("base64"));
      }

      res.json({ images: results });
    } catch (error) {
      console.error("Erro ao processar batch:", error);
      res.status(500).send(error.message || "Erro interno.");
    }
  }
);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});