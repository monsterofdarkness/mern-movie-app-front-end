import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css'
import { AuthContextProvider }   from './context/authContext/AuthContext';
import { ListContextProvider } from './context/listContext/ListContext'
import { MovieContextProvider } from './context/movieContext/MovieContext'


import { BrowserRouter as Router } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
      <Router>
        <AuthContextProvider>  
          <MovieContextProvider>
            <ListContextProvider>
              <App /> 
            </ListContextProvider>   
          </MovieContextProvider>      
        </AuthContextProvider>         
      </Router>
     

  </React.StrictMode>
);