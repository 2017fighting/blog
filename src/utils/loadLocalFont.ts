import { readFileSync } from "fs";

function readFileAsArrayBufferSync(filePath: string): ArrayBuffer {
  const buffer = readFileSync(filePath);
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength
  ) as ArrayBuffer;
}

// Usage
function loadLocalFonts() {
  return [
    {
      path: "src/assets/fonts/Noto Sans Mono Regular.ttf",
      name: "Noto Sans Mono",
      weight: 400,
      style: "normal",
    },
    {
      path: "src/assets/fonts/Noto Sans SC Regular.ttf",
      name: "Noto Sans SC",
      weight: 400,
      style: "normal",
    },
  ].map(({ path, name, weight, style }) => {
    return {
      data: readFileAsArrayBufferSync(path),
      name,
      weight,
      style,
    };
  });
}
export default loadLocalFonts;
