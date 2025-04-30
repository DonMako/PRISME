import React, { ReactElement, useState } from 'react';
import pdf2html from "pdf2html";
import { Button, Grid } from "@mui/material";

const ViewerPdf = function (): ReactElement {

	const [fileName, setFileName] = useState("");
	const [htmlPdf, setHtmlPdf] = useState(null);
	const deleteFile = () => {
		setFileName("");
		setHtmlPdf(null);
	}	
    const displayPdf = () => {
		var pdf = (document.getElementById("pdf") as HTMLInputElement);
		if (pdf?.files) {
			var file = pdf.files[0];
			setFileName(file.name);
			// setHtmlPdf(pdf2html.html(file));
		}
	};

	return <section id="viewerPdf">
		<div>
			<Grid component="label">
				<Grid
				component="input"
				accept=".pdf"
				style={{ display: "none" }}
				type="file"
				onChange={displayPdf}
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
			<p id="fileName">{fileName}</p>
			<button onClick={deleteFile}>Fermer le PDF chargé</button>
		</div>
		<div>
			{htmlPdf}
		</div>
	</section>
}

export default ViewerPdf;