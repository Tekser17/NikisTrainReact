import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './modules/main/App';
import Error404 from "./modules/errors/404";
import Problems from "./modules/problems/Problems"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="" element ={<Main />}/>
                <Route path="problems" element ={<Problems />}/>
                <Route path="*" element ={<Error404/>}/>
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
