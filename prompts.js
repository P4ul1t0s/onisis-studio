export const EXTERIOR_PROMPT = `
You will receive two input images:
1) a CAR EXTERIOR photo
2) a STUDIO BACKGROUND image

Task:
Place the exact car from the first image into the provided studio background as a realistic professional automotive studio photograph.

Hard preservation rules:
- Keep the car exactly the same.
- Preserve the original model, paint color, trim, proportions, shape, branding, body lines, wheel design, and all visible details.
- Do not redesign, retouch, repair, restyle, reshape, or enhance the car.
- Do not add or remove scratches, dents, dirt, badges, accessories, reflections, or imperfections.
- Do not alter the studio background in any way.
- The Onisis logo must remain clearly visible, sharp, and unchanged.

Photographic realism requirements:
- Match the studio lighting with physically plausible shadows and reflections.
- Use realistic glossy automotive paint reflections and controlled specular highlights.
- Ensure the car is naturally grounded on the studio floor with accurate contact shadows.
- Maintain realistic perspective, scale, and lens consistency with the background.
- Match color temperature, white balance, exposure, black levels, and contrast to the studio scene.
- The final image must look like a real high-end automotive studio photograph.

Quality requirements:
- Avoid any washed-out, hazy, faded, foggy, flat, or low-contrast appearance.
- Avoid soft milky contrast or desaturated lighting.
- Preserve clean blacks, realistic contrast, crisp edges, and clear reflections.
- Use strong studio contrast and defined shadows.

Composition:
- Keep the car centered on the studio floor axis.
- Maintain consistent scale across outputs.
- The car must occupy about 35% to 40% of the final image area.
- Preserve the viewing angle from the source photo. Do not invent a new angle.

Strict prohibitions:
- Do not change the car’s structure, shape, branding, or visual identity.
- Do not change the studio background.
- Do not modify or obscure the Onisis logo.
`.trim();

export const INTERIOR_PROMPT = `
You will receive a car interior image.

Task:
Enhance this image to look like a professional automotive interior studio photograph using clean white studio lighting.

Preservation:
- Keep the interior exactly the same.
- Preserve dashboard, steering wheel, seats, materials, textures, screens, buttons, stitching, and all visible details.
- Do not redesign, clean, repair, replace, or modify any part.
- Do not remove wear, dust, fingerprints, or imperfections.

Lighting:
- Apply soft, diffused white studio lighting.
- Use realistic reflections on glass, screens, piano black trim, and glossy surfaces.
- Maintain natural shadows inside the cabin.
- Keep lighting physically plausible and consistent.
- Simulate high-end automotive interior photography lighting.

Style:
- Professional automotive interior photography.
- Clean, neutral white balance.
- High clarity and sharpness.
- Balanced contrast with realistic blacks.
- Preserve material realism for leather, plastic, metal, suede, fabric, and glass.

Avoid:
- Do not insert any studio background.
- Do not create artificial environments around the cabin.
- Do not make seats, dashboard, doors, roof, or panels float or detach.
- Do not change perspective, framing, geometry, or zoom.
- Do not create exaggerated reflections.
- Do not overexpose the image.
- Do not create a washed-out, faded, foggy, or low-contrast look.

Output:
A realistic, premium car interior photo with professional studio lighting.
`.trim();

export const CLOSEUP_PROMPT = `
You will receive a close-up image of a car detail.

Task:
Enhance this image to look like a premium professional automotive studio detail photograph.

Preservation:
- Keep the subject exactly the same.
- Preserve the original shape, color, branding, material, texture, and all visible details.
- Do not redesign, repair, clean, or modify the part.
- Do not remove imperfections, dust, wear, scratches, or texture.

Lighting:
- Apply realistic professional studio lighting suitable for automotive detail photography.
- Use soft controlled highlights and realistic reflections.
- Improve clarity while maintaining natural contrast and material realism.
- Keep lighting physically plausible.

Style:
- Premium car catalog detail photography.
- Crisp, sharp, realistic, and clean.
- Neutral white balance.
- Rich but natural contrast.
- Preserve realism for chrome, paint, plastic, leather, rubber, glass, carbon fiber, and metal surfaces.

Avoid:
- Do not insert a fake environment.
- Do not add objects.
- Do not change framing or perspective.
- Do not create an overprocessed or CGI look.
- Do not create washed-out, hazy, faded, or low-contrast output.

Output:
A realistic professional studio-style automotive close-up image.
`.trim();