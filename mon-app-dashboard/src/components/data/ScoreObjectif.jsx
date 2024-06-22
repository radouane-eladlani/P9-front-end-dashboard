import React, { useEffect, useState } from "react"; // Importation de React et des hooks useState et useEffect
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'; // Importation des composants Recharts nécessaires pour le graphique
import useFetch from "../../utils/useFetch"; // Importation du hook personnalisé useFetch pour les requêtes API
import ScoreModel from "../../model/ScoreModel"; // Importation du modèle de données ScoreModel
import "./ScoreObjectif.css"; // Importation du fichier CSS pour le style
import ErreurPage from "../../page/ErrorPage"; 
/* La fonction ScoreObjectif permet de récupérer les 
données de score et de retourner le composant avec le style */
function ScoreObjectif({ userId }) {
  const [dataScore, setScore] = useState([]); // Déclaration de l'état pour stocker les données de score
  const { data, loading, error } = useFetch(`http://localhost:3001/user/${userId}`); // Utilisation du hook personnalisé pour récupérer les données de l'utilisateur
  // Utilisation du hook useEffect pour mettre à jour les données de score lorsque les données changent
  useEffect(() => {
    if (data) { // Si les données sont disponibles
      // Transformation des données avec le modèle ScoreModel
      const scoreData = new ScoreModel(data).data; 
      setScore(scoreData); // Mise à jour de l'état avec les données transformées
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

  const COLORS = ['#ff0000', '#ffffff']; // Définition des couleurs pour les segments du graphique

  // Retourne le composant avec le style et les données
  return (
    <div className="bground">
      <div className="containerScore">
        <h3>Score</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={dataScore} // Données du graphique
              startAngle={90} // Angle de départ du graphique
              endAngle={450} // Angle de fin du graphique
              innerRadius={70} // Rayon intérieur du graphique
              outerRadius={80} // Rayon extérieur du graphique
              dataKey="value" // Clé des données pour les valeurs
              stroke="none" // Pas de contour pour les segments
            >
              {dataScore.map((entry, index) => (
                <Cell
                  key={`cell-${index}`} // Clé signifie que la cellule correspond à l'index
                  /* Remplissage de la cellule avec une couleur spécifique à 
                  partir du tableau COLORS, en utilisant l'index pour accéder à la couleur correspondante*/
                  fill={COLORS[index % COLORS.length]} 
                  cornerRadius={10} // cornerRadius défini à 10 pixels pour arrondir les coins
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="scoreText">
          <p>{`${dataScore[0]?.value}%`}</p> {/* Affichage du score en pourcentage sur 100% */}
          <p>de votre objectif</p>
        </div>
      </div>
    </div>
  );
}

export default ScoreObjectif;
