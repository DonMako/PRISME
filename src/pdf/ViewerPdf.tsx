import React, { ReactElement, useState } from 'react';

const ViewerPdf = function (): ReactElement {

	const [pdf, setPdf] = useState("");

	function handleChange() {
		const element = document.getElementById("myFile");
		if (element != null) {
			const files = (element as HTMLInputElement).files;
			if (files != null) {
				setPdf(files[0].name);
				const reader = new FileReader();
				reader.addEventListener(
					"load",
					() => {
						document.querySelector("embed")!.src = (reader.result! as string);
					},
					false,
				);
				if (files[0]) {
					reader.readAsDataURL(files[0]);
				}
			}
		}
	};

	function closePdf() {
		console.log("coucou");
		document.getElementById("myPdf")?.setAttribute("src", "");
		document.getElementById("myFile")?.removeAttribute("value");
		setPdf("");
	}

	return <section id="viewerPdf">
		<form id="boutonsPdf">
			<input type="file" id="myFile" name="filename" accept=".pdf" onChange={handleChange} />
			<input type="reset" id="close" onClick={closePdf} value="Fermer le PDF chargé" />
		</form>
		{pdf && <embed src={undefined} id="myPdf" type="application/pdf" />}
	</section>
}

export default ViewerPdf;