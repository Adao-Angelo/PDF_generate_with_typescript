import { Request, Response } from "express";
import { generatePDF } from "../generatePDF";
import fs from "fs";
import path from "path";


class PdfController {
    constructor(){}
    list(req:Request , res:Response){
        const name = `${req.params.name}.pdf` ;
        const filePath = path.join(__dirname,"..", "..", "PDFs", `${name}`);
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

    create(req:Request , res:Response){
        const { content , name} = req.body;
        generatePDF.handle({content:content , name:name})
        res.status(201).json({message:"sucesse"})
    }

}


const pdfController = new PdfController()


export { pdfController }