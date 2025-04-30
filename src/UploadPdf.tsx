import React, { ReactElement } from "react";
import { Button, Grid } from "@mui/material";

const UploadPdf = function(onChange: Function): ReactElement {

	const handleChange = (e: { target: { files: any[]; }; }) => {
		onChange(e.target.files[0]);
	}

	return (
		<Grid>
			<Grid
			component="input"
			accept=".pdf"
			style={{ display: "none" }}
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
			>
			Charger un fichier PDF
			</Button>
		</Grid>
	);
};

export default UploadPdf;