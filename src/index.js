import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './routes/routes'
import { RouterProvider } from 'react-router-dom'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router}/>
);
