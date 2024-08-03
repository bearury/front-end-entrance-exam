const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
	const downloadLink = document.createElement('a');
	downloadLink.href = 'resume.pdf';
	downloadLink.download = 'resume.pdf'; 
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
});

