import React, { ReactElement } from "react";
import { Button, Grid } from "@mui/material";

const getRandomInt = (max = 1000000000) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const UploadPdf = function(onChange: Function): ReactElement {

    const handleChange = (e: { target: { files: any[]; }; }) => {
      onChange(e.target.files[0]);
    };

    const handleAccessibilite = (e: { key: string; }) => {
      if (e.key === " " || e.key === "Enter") {
        const element = document.getElementById(id);
        element.click();
      }
    };

    return (
        <Grid component="label">
          <Grid
            component="input"
            accept=".pdf"
            style={{ display: "none" }}
            id={`UploadFichier${getRandomInt()}`}
            type="file"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            component="span"
            sx={{
              marginBottom: "10px",
              marginTop: "10px",
            }}
            onKeyDown={handleAccessibilite}
          >
          Charger un fichier PDF
          </Button>
        </Grid>
    );
};

export default UploadPdf;