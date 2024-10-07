import opentype from 'opentype.js';

export async function getDotMatrixForChar(
  ttfPath: string,
  char: string,
  pixelSize: number
) {
  // Load the TTF font
  const font = await opentype.load(ttfPath);

  // Get the glyph for the specific character
  const glyph = font.charToGlyph(char);

  // Create a canvas to render the glyph
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;

  // Set the canvas size to match the desired pixel size
  canvas.width = pixelSize;
  canvas.height = pixelSize;

  // Clear the canvas
  context.clearRect(0, 0, pixelSize, pixelSize);

  // Draw the glyph at a specific size
  const fontSize = pixelSize;
  const x = 0;
  const y = fontSize;

  glyph.draw(context, x, y, fontSize);

  // Get the pixel data from the canvas
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  // Convert the pixel data to a dot matrix
  const dotMatrix: number[][] = [];
  for (let i = 0; i < canvas.height; i++) {
    const row: number[] = [];
    for (let j = 0; j < canvas.width; j++) {
      // Get the alpha value of each pixel (ignore the other channels)
      const alpha = pixels[(i * canvas.width + j) * 4 + 3];
      row.push(alpha > 128 ? 1 : 0); // Threshold to decide if it's "on" or "off"
    }
    dotMatrix.push(row);
  }

  return dotMatrix;
}

export const generateDotMatrix = (
  text: string,
  fontSize = 16,
  weight = 400
) => {
  console.log({ text, fontSize, weight });
  const dotMatrix: number[][] = [];

  opentype.load('./Aaargh.ttf', (err, font) => {
    if (err) {
      console.error('Font could not be loaded: ', err);
      return;
    }

    console.log(font);
    // Create a path for the given text
    const path = font?.getPath(text, 0, 0, fontSize);

    // Extract the coordinates of the text outline from the path
    path?.commands.forEach((cmd) => {
      if (cmd.type === 'M' || cmd.type === 'L') {
        const x = Math.floor((cmd.x / fontSize) * 5); // Adjust grid scale
        const y = Math.floor((cmd.y / fontSize) * 7);
        // Push a "dot" into the matrix at the calculated (x, y) position
        dotMatrix.push([x, y]);
      }
    });
  });

  return dotMatrix;
};
