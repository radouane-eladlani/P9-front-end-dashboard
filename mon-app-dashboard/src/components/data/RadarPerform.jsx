import React, { useState, useEffect } from "react";
import useFetch from "../../utils/useFetch";
import RadarModel from "../../model/RadarModel";
import "./RadarPerform.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'; 
import ErreurPage from "../../page/ErrorPage";
/* La fonction RadarPerform permet de récupérer les données 
de performance et de retourner le composant avec le style */
function RadarPerform({ userId }) {
  // Déclaration de l'état pour stocker les données de performance
  const [dataPerform, setRadarPerform] = useState([]);
  // Utilisation du hook personnalisé pour sélectionner les données
  const { data, loading, error } = useFetch(`http://localhost:3001/user/${userId}/performance`);

  // Utilisation du hook useEffect pour mettre à jour les données de performance lorsque les données changent
  useEffect(() => {
    // Si les données sont disponibles
    if (data) {
      // on recupère les données 
      const radarData = new RadarModel(data).data;
      setRadarPerform(radarData); // Mise à jour de l'état avec les données de performance
    }
  }, [data]); // Mise à jour de l'état lorsque les données changent

  // Affichage du message de chargement si les données sont en cours de récupération
  if (loading) {
    return <div>Chargement...</div>;
  }

  // Affichage du message d'erreur si une erreur s'est produite lors de la récupération des données
  if (error) {
    return <div>Erreur : {<ErreurPage/>}</div>;
  }

  // Retourne le composant avec le style et les données
  return (
    <div className="bgroundRadar">
      <div className="containerRadar"> 
        <ResponsiveContainer width="100%" height="100%"> {/* pour ajuster le graphique à la taille de son parent */}
          <RadarChart cx="50%" cy="50%" outerRadius="50%" data={dataPerform}> {/* Composant du graphique radar avec configuration des données */}
            <PolarGrid stroke="#fff" /> {/* Grille polaire avec des lignes blanches */}
            <PolarAngleAxis dataKey="kind" tick={{ fill: '#fff', fontSize: 12 }} /> {/* configuration de dataKey  pour l'axe des angles et des ticks */}
            <PolarRadiusAxis stroke="none" /> {/* Axe des rayons polaires sans ligne */}
            <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} /> {/* Composant Radar pour les données de performance, avec le style */}
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RadarPerform;