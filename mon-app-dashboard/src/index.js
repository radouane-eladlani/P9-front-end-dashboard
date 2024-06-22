import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageAccueil from './page/PageAccueil';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';


// reactDOM permet de lancer l'application 
// Crée un point d'entrée dans le DOM avec ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render prend le composant PageAccueil et l'injecte dans l'élément spécifié dans le DOM
root.render(
  <React.StrictMode>{/* Utilisation de StrictMode pour les vérifications et avertissements supplémentaires */}
    <BrowserRouter>
      <PageAccueil />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
