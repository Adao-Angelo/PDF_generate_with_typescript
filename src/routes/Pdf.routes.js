import { Router } from "express";


const pdfRouter = Router()

const { pdfController } = require("../controller/pdfController");

pdfRouter.get("/pdf/:name", (req, res) => {
  pdfController.list(req, res);
});

pdfRouter.post("/pdf", (req, res) => {
  pdfController.create(req, res);
});


export {pdfRouter}