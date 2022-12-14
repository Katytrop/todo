import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/app/app';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<App/>
	</StrictMode>
);
