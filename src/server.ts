import express, { request, response } from "express";
import { generatePDF } from "./generatePDF";

const port = 2000;
const  app = express();

app.get("/pdf" , (request , response)=>{    
    const dt = generatePDF.handle({content:"welcome", name:"text4.pdf"})
    response.send(dt)
})


app.listen(port , ()=>{
    console.log("server is on")
})

