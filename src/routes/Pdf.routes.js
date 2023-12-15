import { Router } from "express";
const pdfRouter = Router()
const { pdfController } = require("../controller/pdfController");

pdfRouter.get("/pdf/:name", (req, res) => {
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
pdfRouter.post("/pdf", (req, res) => {
  pdfController.create(req, res);
});
pdfRouter.get("/" , (req , res)=>{
  res.render("index")
})

export {pdfRouter}