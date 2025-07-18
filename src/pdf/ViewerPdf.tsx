import React, { ReactElement, useState } from "react";

export default function ViewerPdf(): ReactElement {

	const [pdf, setPdf] = useState("");

	function handleChange(): void {
		const files = (document.getElementById("myFile") as HTMLInputElement).files;
		if (files != null && files.length > 0) {
			setPdf(files[0].name);
			document.getElementById("myPdf")!.style.display = "flex";
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
	};

	function closePdf(): void {
		setPdf("");
		document.querySelector("embed")!.src = "";
		document.getElementById("myPdf")!.style.display = "none";
		document.querySelector("input")!.value = "";
	}

	return <section id="viewerPdf">
		<form id="boutonsPdf">
			<input type="file" id="myFile" name="filename" accept=".pdf" onChange={handleChange} />
			<input type="reset" id="close" disabled={pdf == ""} onClick={closePdf} value="Fermer le PDF chargé" />
		</form>
		<embed src={undefined} id="myPdf" type="application/pdf" />
	</section>
}