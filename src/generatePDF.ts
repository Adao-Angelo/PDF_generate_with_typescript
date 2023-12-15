import {jsPDF} from "jspdf";
interface IRequet  {
    content:string;
    name:string;
}
 class GeneratePDF {
    constructor(){
    }
    handle({content , name}:IRequet){
        const docPDF = new jsPDF();
        return docPDF.text(content , 10 , 10 );
    }
}

const generatePDF =  new GeneratePDF() 
export {generatePDF}