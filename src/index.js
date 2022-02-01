import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './components/App';
import GlobalStyles from './components/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
  	<BrowserRouter>
    	<App />
    	<GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
