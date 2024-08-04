const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
  const mockLink = document.createElement('a');
  mockLink.href = 'resume.pdf';
  mockLink.download = 'resume.pdf';
  document.body.appendChild(mockLink);
  mockLink.click();
  document.body.removeChild(mockLink);
});
