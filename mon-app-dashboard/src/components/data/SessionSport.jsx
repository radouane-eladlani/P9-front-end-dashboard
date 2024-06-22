import React, { useState, useEffect, useRef } from "react";
import "./SessionSport.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useFetch from "../../utils/useFetch";
import SessionModel from "../../model/SessionModel";
import ErreurPage from "../../page/ErrorPage";


// Configuration de l'axe X du graphique en ligne
const xAxisConfig = {
  type: "category", // Type de données sur l'axe X (catégorie)
  dataKey: "day", // Clé des données pour les jours
  tickLine: false, // Pas de ligne de repère pour les ticks
  stroke: "none", // Pas de ligne de trait
  padding: { right: 10, left: 10 }, // Espacement a droite et a gauche
  tick: { fontSize: 12, stroke: "rgba(255, 255, 255, 0.7)", opacity: 0.8 } // Style des ticks police et couleuravec une opacité
};

// Configuration de l'axe Y du graphique en ligne
const yAxisConfig = {
  dataKey: "sessionLength", // Clé des données pour la longueur de session
  domain: [0, "dataMax + 10"], // Domaine des valeurs sur l'axe Y (avec marge)
  hide: true, // Axe caché
  tick: { fontSize: 12, stroke: "none", opacity: 0.8 } // Style des ticks
};

// Configuration de la ligne du graphique en ligne
const lineConfig = {
  type: "monotone", // Type de ligne 
  dataKey: "sessionLength", // Clé des données pour la longueur de session
  stroke: "rgba(255, 255, 255, 0.7)", // Couleur du trait
  strokeWidth: 2, // Largeur du trait
  dot: false, // Pas de points sur la ligne
  activeDot: { r: 5, strokeWidth: 2, stroke: "width" }, // Style du point actif (en cas d'interaction)
};

/*La fonction SessionSport permet de récupérer les données 
de la session et de retourner le composant avec le style */
function SessionSport({ userId }) {
  // État pour stocker les données de session
  const [sessions, setSessions] = useState([]);
  // Utilisation du hook personnalisé pour récupérer les données
  const { data, loading, error } = useFetch(`http://localhost:3001/user/${userId}/average-sessions`);
  const containerRef = useRef(null); // Référence au conteneur principal du composant

  // mettre à jour les sessions lorsque les données changent
  useEffect(() => {
    if (data) {
      const sessionData = new SessionModel(data).data; // recupérer les données de session
      setSessions(sessionData); // Mise à jour de l'état avec les données 
    }
  }, [data]); // Déclenchement lorsque les données changent

  // Affiche un message de chargement si les données sont en cours de récupération
  if (loading) {
    return <div>Chargement...</div>;
  }

  // Affiche un message d'erreur si une erreur survient lors de la récupération des données
  if (error) {
    return <div>Erreur : {<ErreurPage/>}</div>;
  }

  // Gestion de l'événement onMouseMove pour changer le fond du conteneur
  const handleMouseMove = (e) => {
    if (e.isTooltipActive && containerRef.current) {
      const windowWidth = containerRef.current.clientWidth; // Largeur du conteneur
      // Pourcentage de position horizontale de la souris
      const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100);
      // Définition du dégradé linéaire en fonction de la position de la souris
      containerRef.current.style.background = `linear-gradient(90deg, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(255,0,0,1) 100%)`;
    } else if (containerRef.current) {
      // Dégradé linéaire par défaut
      containerRef.current.style.background = 'linear-gradient(90deg, #E60000, #E60000)';
    }
  };

  // Rendu du composant avec la structure et le style
  return (
    <div className="bgroundRed" ref={containerRef}>
      <div className="containerSession">
        <h3>Durée moyenne des sessions</h3>
        <ResponsiveContainer width="100%" height="70%">
          {/* Graphique en ligne avec les données des sessions et gestion de l'événement onMouseMove */}
          <LineChart data={sessions} onMouseMove={handleMouseMove} >
            <XAxis {...xAxisConfig} /> {/* Axe X avec configuration définie */}
            <YAxis {...yAxisConfig} /> {/* Axe Y avec configuration définie */}
            {/* Tooltip personnalisé pour afficher la durée de la session */}
            <Tooltip content={<SessionsToolType />} />
            <Line {...lineConfig} /> {/* Ligne du graphique avec configuration définie */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Composant Tooltip pour afficher la durée de la session si elle est actif
function SessionsToolType({ active, payload }) {
  // Affiche le tooltip seulement s'il est actif
  if (active) {
    return (
      <div className="custom-tooltip">
        {/* Affiche la durée de la session en minutes */}
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null; // Retourne null si le tooltip n'est pas actif
}
export default SessionSport;
