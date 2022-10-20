import ReactDOM from 'react-dom/client';
import React from "react"
import './index.css';
import App from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
