import React from 'react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../css/pdfviewer.css'


import pdf from './lung.pdf'
 
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {

	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

	return (
		<div className="pdf-view-wrapper">
			<div className="pdf-container">
				<div className="page-btn">
						<div><button onClick={goToPrevPage}>Prev</button></div>
						<div><p>
							{/* patch req for no. of pages, payload: pageNumber */}
							Page {pageNumber} of {numPages}
						</p></div>
						
						<div><button onClick={goToNextPage}>Next</button></div>
					</div>

					<div className="doc-view">
					<Document
						file={pdf}
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page pageNumber={pageNumber} />
					</Document></div>
			</div>
		</div>
	);
};

export default PdfViewer;
