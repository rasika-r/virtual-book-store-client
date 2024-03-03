import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PdfViewer from './components/PdfViewer';
import Login from './components/auth/login'
import { Outlet } from 'react-router-dom';
import Cart from './components/cart';

const App = () => {
	return (
		<>
			{/*<Login></Login>
			<PdfViewer></PdfViewer>*/}
			<Outlet/>
			<Cart></Cart>
		</>
		
	);
};

export default App;