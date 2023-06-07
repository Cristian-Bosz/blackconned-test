import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './styles/navbar.css';
import './styles/footer.css';
import './styles/AboutUsBanner.css';
import './styles/AboutUsServices.css';
import './styles/AboutUsBrands.css';
import './styles/Carrousel.css';
import './styles/HomeCategoriesMonth.css';
import './styles/HomeFeaturesProducts.css';
import './styles/StoreFilter.css';
import './styles/ProductDetails.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
