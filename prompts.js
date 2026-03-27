export const EXTERIOR_PROMPT = `
You will receive two input images:
1) a CAR EXTERIOR photo
2) a STUDIO BACKGROUND image

Task:
Place the exact same car from the first image into the provided studio background and make the final result look like a real professional studio photograph.

IDENTITY LOCK:
- The car must remain exactly the same vehicle.
- Preserve the exact body shape, paint color, trim, badges, wheel design, tire design, glass, headlights, taillights, mirrors, handles, grille, and all visible details.
- Do not redesign, restyle, repair, clean, enhance, or modify any part of the vehicle.
- Do not change wheel model, wheel spoke pattern, rim size, tire profile, or tire sidewall details.
- Do not change paint tone, metallic finish, reflections, or body panel shape.
- Do not change license plate text, stickers, logos, decals, emblems, or any visible writing.
- Do not rewrite, replace, invent, or stylize any text.
- Any readable text, lettering, badge, plate, or marking must remain exactly as in the original image.

CONDITION LOCK:
- Preserve the exact condition of the vehicle.
- Do not add or remove scratches, dents, dirt, mud, dust, stains, wear, rust, or imperfections.
- Do not exaggerate existing imperfections.

BACKGROUND RULES:
- Keep the studio background unchanged.
- Keep the Onisis logo exactly as it appears in the background image.
- Do not copy the Onisis logo or name onto the car, plate, badges, or any other element.
- The Onisis logo must remain only in the studio background where it already exists.

LIGHTING AND REALISM:
- Match the studio lighting with realistic reflections, shadows, and floor contact.
- Use physically plausible reflections consistent with automotive studio photography.
- Keep perspective, scale, and geometry natural and realistic.
- Maintain neutral white balance, realistic contrast, and clean blacks.
- Avoid washed-out, faded, foggy, or low-contrast output.

COMPOSITION:
- Preserve the original viewing angle of the car.
- Do not invent a new angle.
- Keep the car centered naturally in the frame.
- The final output must be a horizontal 4:3 image.
- Extend or adapt only the background if needed to fit 4:3.
- Do not crop or distort the car.

STRICTLY FORBIDDEN:
- Any change to car identity
- Any change to wheels
- Any change to paint color
- Any rewritten text
- Any replaced license plate text
- Any copied Onisis branding onto the car
- Any geometry changes
- Any additional dirt or damage

Output:
A realistic automotive studio photograph of the exact same car, with identical identity, identical text, identical condition, and unchanged background branding.
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
Transform this image into a realistic professional automotive studio close-up while preserving the exact original detail, condition, and composition.

IDENTITY AND CONDITION LOCK:
- Keep the subject exactly as it appears in the original image.
- Preserve exact shape, color, material, texture, branding, reflections, lettering, and all visible details.
- Keep the part attached to the vehicle.
- Do not redesign, repair, replace, clean, enhance, or modify anything.
- Preserve the exact original condition.

CONTAMINATION RULES:
- Do not add any dirt, mud, dust, stains, grease, rust, grime, fingerprints, scratches, or wear.
- Do not exaggerate any existing imperfections.
- Do not create an off-road, dirty, used, weathered, dusty, or muddy appearance.
- Do not add environmental residue of any kind.
- The cleanliness level must remain identical to the original input.

TEXT AND DETAIL LOCK:
- Do not rewrite or alter any text, symbols, labels, buttons, screen content, logos, or markings.
- Do not invent missing letters or replace existing lettering.
- Any visible text must remain exactly unchanged.

COMPOSITION:
- Preserve original framing, crop, camera angle, zoom, and perspective.
- Do not move, isolate, extract, detach, rotate, or reposition the part.
- Do not turn this into a spare-part catalog image.

BACKGROUND AND STYLE:
- Replace or neutralize the original environment so the image feels like it was photographed in a clean white studio.
- Keep transitions subtle and natural.
- Do not create a floating object.
- Do not invent missing geometry or hidden surfaces.

LIGHTING:
- Apply soft white studio lighting.
- Use realistic highlights and reflections consistent with premium automotive detail photography.
- Maintain natural depth and realistic materials.
- Keep contrast clean and neutral without overprocessing.

STRICTLY FORBIDDEN:
- Any added dirt, mud, dust, grime, or contamination
- Any rewritten text
- Any detached or floating object
- Any geometry change
- Any fake replacement-part look
- Any off-road or dirty visual storytelling

Output:
A clean, realistic automotive studio close-up with identical condition, identical text, identical geometry, and no added contamination.
`.trim();