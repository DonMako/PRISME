import React, { forwardRef } from "react";
import { Button, Grid } from "@mui/material";

const getRandomInt = (max = 1000000000) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const UploadFichier = forwardRef(
  (
    {
      sx,
      color = "inherit",
      justify,
      id = `UploadFichier${getRandomInt()}`,
      onChange,
    },
    ref
  ) => {

    const handleChange = e => {
      onChange(e.target.files[0]);
    };

    const handleAccessibilite = e => {
      if (e.key === " " || e.key === "Enter") {
        const element = document.getElementById(id);
        element.click();
      }
    };

    return (
      <Grid
        container
        sx={{
          ...sx,
          display: "",
        }}
        alignItems="center"
        justifyContent={justify}
      >
        <Grid component="label" htmlFor={id}>
          <Grid
            component="input"
            ref={ref}
            accept=".pdf"
            style={{ display: "none" }}
            id={id}
            type="file"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            component="span"
            color={color}
            sx={{
              marginBottom: "10px",
              marginTop: "10px",
            }}
            onKeyDown={handleAccessibilite}
          >
          Charger un fichier PDF
          </Button>
        </Grid>
      </Grid>
    );
  }
);

export default UploadFichier;
