import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PdfViewer from './components/PdfViewer';
import Cart from './components/cart';

const App = () => {
	return (
		<div>
			<Cart></Cart>
		</div>
	);
};

export default App;