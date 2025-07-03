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

	return <section id="viewerPdf">
		<form>
			<input type="file" id="myFile" name="filename" accept=".pdf" onChange={handleChange} />
			<input type="reset" value="Fermer le PDF chargé" />
		</form>
		{pdf && <embed src="" id="myPdf" type="application/pdf" width="100%" height="100%" />}
	</section>
}

export default ViewerPdf;