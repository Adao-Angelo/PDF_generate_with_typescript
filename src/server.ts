import express, { Request, Response } from "express";
import { generatePDF } from "./generatePDF";
import fs from "fs";
import path from "path"

const port = 2000;
const  app = express();


app.get('/pdf', (req, res) => {

    generatePDF.handle({content:"welcome"  , name:"text,pdf"})
    
    const filePath = 'C:/Users/PC/Desktop/adão apps/jspdf/PDFs/text.pdf';
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('An error occurred while reading the file.');
        return;
      }
      res.contentType('application/pdf');
      res.send(data);
    });
  });
app.listen(port , ()=>{
    console.log("server is on")
})

