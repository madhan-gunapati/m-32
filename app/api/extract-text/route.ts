// import { writeFile, mkdir, unlink } from "fs/promises"; // Keep fs/promises for async methods
// import { existsSync } from "fs"; // Import existsSync from fs (not fs/promises)
// import path from "path";
// import pdf2json from "pdf2json";
// import Tesseract from "tesseract.js";
// import { NextRequest } from "next/server";

// export async function POST(req: NextRequest) {
  
//   const formData = await req.formData();
  
//   const files = formData.getAll("files");
  

//   if (!files || files.length === 0) {
    
//     return new Response("No files uploaded", { status: 400 });
//   }

//   const uploadDir = "uploads";
//   await mkdir(uploadDir, { recursive: true }); // Ensure the folder exists
  

//   const results = [];

//   for (const file of files) {
//     if (typeof file === "string") continue;

//     const buffer = Buffer.from(await file.arrayBuffer());
//     const filePath = path.join(uploadDir, file.name);

//     await writeFile(filePath, buffer);

//     try {
//       let text = "";

//       if (file.type === "application/pdf") {
//         // Using pdf2json to extract text from PDFs
//         const pdfParser = new pdf2json();

//         const parsePDF = new Promise<void>((resolve, reject) => {
//           pdfParser.on("pdfParser_dataError", (errData) => {
//             console.error(errData.parserError);
//             reject("Error parsing PDF");
//           });

//           pdfParser.on("pdfParser_dataReady", (pdfData) => {
//             try {
//               text = pdfData?.Pages?.map((page: any) =>
//                 page.Texts?.map((textItem: any) =>
//                   decodeURIComponent(textItem.R[0].T)
//                 ).join(" ")
//               ).join("\n") || "No text found in PDF";
//               resolve();
//             } catch (error) {
//               reject("Error extracting text from PDF");
//             }
//           });

//           pdfParser.loadPDF(filePath);
//         });

//         await parsePDF; // Wait for PDF parsing to finish

//       } else if (file.type.startsWith("image/")) {
//         // OCR using Tesseract for images
//         const result = await Tesseract.recognize(filePath, "eng");
//         text = result.data.text;
//       } else {
//         text = "Unsupported file type";
//       }

//       results.push(text);
//     } catch (err) {
//       console.error("Error Message" ,err);
//       results.push("Error reading file: " + file.name);
//     } finally {
//       // Clean up the file, only if it exists
//       if (existsSync(filePath)) {
//         await unlink(filePath);
//         // console.log(`File ${file.name} deleted successfully`);
//       }
//     }
//   }

//   // console.log(results , "results");
//   return new Response(JSON.stringify(results), {
//     headers: { "Content-Type": "application/json" },
//   });
// }

import { writeFile, mkdir, unlink } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import pdf2json from "pdf2json";
import Tesseract from "tesseract.js";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const files = formData.getAll("files");
  const images = formData.getAll("images"); // Get base64 images

  if ((!files || files.length === 0) && (!images || images.length === 0)) {
    return new Response("No files or images uploaded", { status: 400 });
  }

  const uploadDir = "uploads";
  await mkdir(uploadDir, { recursive: true });

  const results = [];

  // Handle files
  for (const file of files) {
    if (typeof file === "string") continue;

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(uploadDir, file.name);

    await writeFile(filePath, buffer);

    try {
      let text = "";

      if (file.type === "application/pdf") {
        const pdfParser = new pdf2json();

        const parsePDF = new Promise<void>((resolve, reject) => {
          pdfParser.on("pdfParser_dataError", (errData) => {
            console.error(errData.parserError);
            reject("Error parsing PDF");
          });

          pdfParser.on("pdfParser_dataReady", (pdfData) => {
            try {
              text =
                pdfData?.Pages?.map((page: any) =>
                  page.Texts?.map((textItem: any) =>
                    decodeURIComponent(textItem.R[0].T)
                  ).join(" ")
                ).join("\n") || "No text found in PDF";
              resolve();
            } catch (error) {
              reject("Error extracting text from PDF");
            }
          });

          pdfParser.loadPDF(filePath);
        });

        await parsePDF;

      } else if (file.type.startsWith("image/")) {
        const result = await Tesseract.recognize(filePath, "eng");
        text = result.data.text;
      } else {
        text = "Unsupported file type";
      }

      results.push(text);
    } catch (err) {
      console.error("Error Message", err);
      results.push("Error reading file: " + file.name);
    } finally {
      if (existsSync(filePath)) {
        await unlink(filePath);
      }
    }
  }

  // Handle images (base64)
  for (const [index, base64] of images.entries()) {
    if (typeof base64 !== "string") continue;

    const matches = base64.match(/^data:image\/(png|jpeg|jpg);base64,(.+)$/);
    if (!matches) {
      return new Response("invalid image format", { status: 400 });
      continue;
    }

    const extension = matches[1];
    const data = matches[2];
    const imageBuffer = Buffer.from(data, "base64");
    const tempFilePath = path.join(uploadDir, `image_${Date.now()}_${index}.${extension}`);

    try {
      await writeFile(tempFilePath, imageBuffer);
      const result = await Tesseract.recognize(tempFilePath, "eng");
      results.push(result.data.text);
    } catch (err) {
      console.error("Error processing base64 image:", err);
      results.push("Error reading base64 image");
    } finally {
      if (existsSync(tempFilePath)) {
        await unlink(tempFilePath);
      }
    }
  }

  return new Response(JSON.stringify(results), {
    headers: { "Content-Type": "application/json" },
  });
}
