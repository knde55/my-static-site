document.addEventListener('DOMContentLoaded', () => {
    const pdfList = document.getElementById('pdf-list');
    const markdownList = document.getElementById('markdown-list');

    // Example PDF files
    const pdfFiles = [
        { name: 'Document 1', path: 'pdfs/document1.pdf' },
        { name: 'Document 2', path: 'pdfs/document2.pdf' }
    ];

    // Example Markdown files
    const markdownFiles = [
        { name: 'README 1', path: 'markdowns/README1.md' },
        { name: 'README 2', path: 'markdowns/README2.md' }
    ];

    // Function to create a document item element
    function createDocumentItem(name, path) {
        const div = document.createElement('div');
        div.className = 'document-item';
        div.innerHTML = `
            <h3>${name}</h3>
            <p><a href="${path}" target="_blank">Open in new tab</a></p>
        `;
        return div;
    }

    // Populate PDF list
    pdfFiles.forEach(file => {
        pdfList.appendChild(createDocumentItem(file.name, file.path));
    });

    // Populate Markdown list
    markdownFiles.forEach(file => {
        markdownList.appendChild(createDocumentItem(file.name, file.path));
    });
});



