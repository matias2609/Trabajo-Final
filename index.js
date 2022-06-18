import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Nav} from './Componentes/Nav'
import {Info} from './Componentes/Info'
import {Prueba} from './Componentes/Prueba'
import {PieDePagina} from './Componentes/PieDePagina'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav />
    <Info />
    <Prueba />
    <PieDePagina />
  </React.StrictMode>
);

//Aquí se pone arriba lo que va primero


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
