import React, { ReactElement, useState } from 'react';
import pdf2html from "pdf2html";

const ViewerPdf = function (): ReactElement {

	const [htmlPdf, setHtmlPdf] = useState(null);
	const deleteFile = () => {
		setHtmlPdf(null);
	}
	const displayPdf = () => {
		var pdf = (document.getElementById("pdf") as HTMLInputElement);
		if (pdf?.files) {
			var file = pdf.files[0];
			// setHtmlPdf(pdf2html.html(file));
		}
	};

	return <section id="viewerPdf">
		<form>
			<input type="file" id="myFile" name="filename" />
			<input type="reset" value="Fermer le PDF chargé" />
		</form>
		<div>
			{htmlPdf}
		</div>
	</section>
}

export default ViewerPdf;