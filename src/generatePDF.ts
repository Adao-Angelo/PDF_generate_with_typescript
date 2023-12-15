import {jsPDF} from "jspdf";
interface IRequet  {
    content:string;
    name:string;
}
 class GeneratePDF {
    constructor(){
    }
    handle({content , name}:IRequet){
        const docPDF = new jsPDF()
        docPDF.text(content , 10 , 10 );
        docPDF.save(`PDFs/${name}`)
        return "sucess"
    }
}

const generatePDF =  new GeneratePDF() 
export {generatePDF}