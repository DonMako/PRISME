import React, { forwardRef } from "react";

const Optiic = require('optiic');
const optiic = new Optiic();

const convertImage = (image) => {
  optiic.process({image: image}).then(result => result);
}

const UploadFile = forwardRef(
  (
    {
      onChange,
    },
    ref
  ) => {

    const handleChange = e => {
      onChange(convertImage(e.target.files[0]));
    };

    return (
          <button
            component="input"
            accept=".pdf"
            type="file"
            onClick={handleChange}
          >
          Charger un fichier PDF
          </button>
    );
  }
);

export default UploadFile;
