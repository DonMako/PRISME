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
					document.getElementById("close")?.removeAttribute("disabled");
					document.getElementById("myFile")?.setAttribute("disabled", "disabled");
				}
			}
		}
	};

	function closePdf() {
		document.getElementById("myFile")?.removeAttribute("disabled");
		document.getElementById("close")?.setAttribute("disabled", "disabled");
	}

	return <section id="viewerPdf">
		<div id="boutonsPdf">
			<input type="file" id="myFile" name="filename" accept=".pdf" onChange={handleChange} />
			<button id="close" disabled onClick={closePdf}>Fermer le PDF chargé</button>
		</div>
		{pdf && <embed src="" id="myPdf" type="application/pdf" />}
	</section>
}

export default ViewerPdf;