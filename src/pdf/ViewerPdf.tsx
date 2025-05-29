import React, { ReactElement, useState } from 'react';

const ViewerPdf = function (): ReactElement {

	const [htmlPdf, setHtmlPdf] = useState(null);
	const displayPdf = () => {
		const file = myFile.files;
		if (file) {
			htmlPdf = file;
		}
	};

	return <section id="viewerPdf">
		<form>
			<input type="file" id="myFile" name="filename" accept=".pdf" />
			<input type="reset" value="Fermer le PDF chargé" />
			<pdf onClick={displayPdf}>Afficher le PDF</button>
		</form>
		{htmlPdf}
	</section>
}

export default ViewerPdf;