import express from "express";
import { pdfRouter } from "./routes/Pdf.routes";



const port = 2000;
const app = express();
app.use(express.json());
app.use(pdfRouter)

app.listen(port, () => {
  console.log("server is on");
});


