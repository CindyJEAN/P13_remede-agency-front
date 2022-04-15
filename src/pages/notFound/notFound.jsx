import { Link } from "react-router-dom";
import React from "react";

export default function NotFound() {
  return (
    <main>
      <h1>Erreur 404</h1>
      <p className="text">Cette page n'existe pas.</p>
      <Link to="/">Retourner à l'accueil</Link>
    </main>
  );
}
