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
You will receive a close-up image of a car detail that is still attached to the vehicle.

Task:
Transform this image into a professional automotive studio close-up while preserving the exact original condition of the object.

CRITICAL CONDITION LOCK:
- The condition of the object must remain EXACTLY the same as the input.
- Do not add any new elements or details.
- Do not introduce dirt, mud, dust, stains, rust, scratches, or wear.
- Do not exaggerate any existing imperfections.
- Do not change surface cleanliness in any way.
- The output must match the original condition pixel-wise in terms of cleanliness.

Preservation:
- Keep shape, color, materials, reflections, and details identical.
- Keep the object attached to the vehicle.
- Do not redesign, enhance, or modify anything.

Composition:
- Preserve original framing, crop, angle, and perspective.
- Do not move, isolate, extract, or reposition any part.

Background:
- Replace the background with a clean white studio environment.
- Keep transitions subtle and natural.
- Do not create a floating object.
- Do not invent missing geometry.

Lighting:
- Apply soft white studio lighting.
- Improve reflections and highlights while preserving realism.
- Keep materials physically accurate.

Style:
- Clean automotive studio photography.
- Neutral white balance.
- Crisp, sharp, realistic.
- CLEAN presentation (no dirt, no grime, no environmental effects).

STRICTLY FORBIDDEN:
- Any new dirt, mud, dust, stains, or damage.
- Any environmental storytelling (off-road, road dust, etc).
- Any change in cleanliness level.
- Any added texture that was not present in the original.

Output:
A clean studio close-up with identical condition and no added imperfections.
`.trim();