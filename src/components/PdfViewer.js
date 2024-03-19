import React, { useEffect } from 'react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../css/pdfviewer.css'
import pdf from './lung.pdf'
import axios, { Axios } from 'axios';
import {useParams} from 'react-router-dom'

 
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	useEffect(() => {
		const user_id = localStorage.getItem('id')
		const book_id = localStorage.getItem('book_id')
		console.log(user_id,"test");
		axios.post('http://localhost:8000/progress/', {
		  user_id: user_id,
		  book_id: book_id
		})
		.then((response) => {
			let val = response.data.message;
			setPageNumber(val)
			if(val<pageNumber)
			{
				console.log("done");
				axios.patch('http://localhost:8000/progress/', {
					user_id: user_id,
		  			book_id: book_id,
					current_page : pageNumber
		})
			}
		})
		.catch((error) => {
		  console.error('Error fetching progress:', error);
		});
	  }, [pageNumber]);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);
	const [url,seturl] = useState(localStorage.getItem('url'));

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
						file={url}
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page pageNumber={pageNumber}
						renderTextLayer={false} // Disable rendering text layer
						renderInteractiveForms={false} // Disable rendering interactive forms
						renderAnnotationLayer={false}  />
					</Document></div>
			</div>
		</div>
	);
};

export default PdfViewer;


