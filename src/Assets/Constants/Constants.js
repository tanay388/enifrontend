import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { verifyAdminUserLogin } from '../../Api/api'
export const baseUrl= "https://enisolution.com:5000/"
export const adminUrl = "https://enisolution.com:5000/admin/"


// download QR code
export const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('QrCodePNGimg')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
}

//validate user
export const validateUser = async () => {
  const token= localStorage.getItem("token");
  const email= localStorage.getItem("userEmail");

  const user = {
    token: token,
    email: email,
  }
  if(token){
    // localStorage.setItem("token", null);
    // localStorage.removeItem('token');
    // window.location.pathname = "/";
    verifyAdminUserLogin(user).then((res) => {
      console.log(localStorage.getItem('userId'))
    });
    // console.log(token)
  }
}

//generate pdf
export const printDocument = async () => {
  const input = document.getElementById('divToPrint');
  const canvas = await html2canvas(input);
  const data = canvas.toDataURL('image/png');

  const pdf = new jsPDF();
  const imgProperties = pdf.getImageProperties(data);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight =
    (imgProperties.height * pdfWidth) / imgProperties.width;

  pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('print.pdf');
}