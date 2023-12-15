import { Request, Response, request } from "express";
import { generatePDF } from "../generatePDF";
import fs from "fs";
import path from "path";

class PdfController {
  constructor() {}
  create(req: Request, res: Response) {
    const { name, content } = req.body;
    generatePDF.handle({ content: content, name: name });
    const filePath = path.join(__dirname, "..", "..", "PDFs", `${name}`);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("An error occurred while reading the file.");
        return;
      }
      res.contentType("application/pdf");
      res.send(data);
    });
  }
}

const pdfController = new PdfController();

export { pdfController };
