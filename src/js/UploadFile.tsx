import React from "react";

// interface MyProps {
//   myValue: string,
// }

// const Optiic = require('optiic');
// const optiic = new Optiic();

// const convertImage = (image) => {
//   optiic.process({ image: image }).then(result => result);
// }

// const handleChange = e => {
//   convertImage(e.files[0]);
// };

// const UploadFile = (target:string) => {
//   return <input accept=".pdf" type="file" onClick={handleChange(target)}>Charger un fichier PDF</input>
// };

const UploadFile = function() {
  return <input accept=".pdf" type="file">Charger un fichier PDF</input>
};

export default UploadFile;