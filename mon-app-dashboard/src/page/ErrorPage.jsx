import React from 'react'
import "./ErrorPage.css";

/* la function ErreurPageNotFound permet de retourner le composant ErreurPageNotFound avec le style */
export function ErreurPageNotFound() {
  return (
      <div>
      <div className="error_flex">
        <h1 className="error_title">404</h1>
        <p className="error_p">Oups! La page que vous demandez n'existe pas.</p>
      </div>
    </div>
  );
}

export default ErreurPageNotFound