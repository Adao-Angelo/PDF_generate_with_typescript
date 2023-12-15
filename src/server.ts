import express, { Request, Response, request } from "express";
import { generatePDF } from "./generatePDF";
import fs from "fs";
import path from "path";


const port = 2000;
const app = express();
app.use(express.json())
app.get("/pdf/:name", (req, res) => {
  const name = `${req.params.name}.pdf` ;
  const filePath = path.join(__dirname, "..", "PDFs", `${name}`);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while reading the file.");
      return;
    }
    res.contentType("application/pdf");
    res.send(data);
  });
});
app.listen(port, () => {
  console.log("server is on");
});

app.post("/pdf" , (req , res)=>{
  const { content , name} = req.body;
  generatePDF.handle({content:content , name:name})


  res.status(201).json({message:"sucesse"})
})



