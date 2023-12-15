import express, { Request, Response } from "express";
import { generatePDF } from "./generatePDF";
import fs from "fs";
import path from "path"

const port = 2000;
const  app = express();

app.get('/pdf', (req: Request, res: Response) => {

res.send()
});



app.listen(port , ()=>{
    console.log("server is on")
})

