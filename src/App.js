import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PdfViewer from './components/PdfViewer';
import Login from './components/auth/login'
import { Outlet } from 'react-router-dom';
import Home from './Home';

const App = () => {
	return (
		<>
			{/*<Login></Login>
			<PdfViewer></PdfViewer>*/}
			<Outlet/>
		</>
		
	);
};

export default App;