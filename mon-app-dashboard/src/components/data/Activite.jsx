import React, { useEffect, useState } from "react";
import "./Activite.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'; 
import useFetch from "../../utils/useFetch"; 
import ActiviteModel from "../../model/ActiviteModel"; 
import { useParams } from "react-router-dom";
import ErreurPage from "../../page/ErrorPage";

/* Les variables qui permettent de modifier le style des axes X et Y pour le graphique de l'activité */
const xAxisStyle = {
    tickLine: false, // Pas de ligne de repère pour les ticks
    tick: { fontSize: 14 }, // Taille de la police pour les ticks
    dy: 15 // Décalage vertical
};

const yAxisKilogramStyle = {
    yAxisId: "kilogram", // Identifiant de l'axe des Y pour les kilogrammes
    dataKey: "kilogram", // Clé des données pour les kilogrammes
    type: "number", // Type de données (numérique)
    domain: ['dataMin - 2', 'dataMax + 1'], // Domaine des valeurs (avec marge)
    tickCount: 4, // Nombre de ticks
    axisLine: false, // Pas de ligne d'axe
    orientation: "right", // Orientation à droite
    tickLine: false, // Pas de ligne de repère pour les ticks
    tick: { fontSize: 14 }, // Taille de la police pour les ticks
    dx: 15 // Décalage horizontal pour les ticks
};

const yAxisCaloriesStyle = {
    yAxisId: "calories", // Identifiant de l'axe des Y pour les calories
    dataKey: "calories", // Clé des données pour les calories
    type: "number", // Type de données (numérique)
    domain: ['dataMin - 20', 'dataMax + 10'], // Domaine des valeurs (avec marge)
    hide: true // Axe caché
};

/* La fonction Activite permet de récupérer les données de l'activité et de retourner le composant avec le style */
function Activite( ) {
    const { id } = useParams();
    // Déclaration de l'état pour stocker les sessions
    const [sessions, setSessions] = useState([]); 
    // Utilisation du hook personnalisé pour récupérer les données
    const { data, loading, error } = useFetch(`http://localhost:3001/user/${id}/activity`); 

    // Utilisation du hook useEffect pour mettre à jour les sessions lorsque les données changent
    useEffect(() => {
        if (data) {
            // on recupère les données 
            const sessions = new ActiviteModel(data).data; 
            // on fait un map pour ajouter un numero de jour à chaque session 
            const dataSessions = sessions.map((session, index) => ({
                ...session,
                dayNumber: index + 1 // Ajout d'un numéro de jour à chaque session
            }));
            setSessions(dataSessions); // Mise à jour de l'état des sessions
        }
        
    }, [data]); // Mise à jour de l'état des sessions lorsque les données changent

    // Affichage du message de chargement si les données sont en cours de récupération
    if (loading) {
        return <div>Chargement...</div>;
    }

    // Affichage du message d'erreur si une erreur s'est produite lors de la récupération des données
    if (error) {
        return <div>Erreur : {<ErreurPage/>}</div>;
    }

    // return le composant avec le style et les données
    return (
        <div className="Wrapper">
            <div className="Head">
                <div className="Title">Activité quotidienne</div> 
                <div className="Legend">
                    <div className="Info">
                        <div className="IconPoids" />
                        <div className="TextLegend">Poids (kg)</div>
                    </div>
                    <div className="Info">
                        <div className="IconCalories" /> 
                        <div className="TextLegend">Calories brûlées (kCal)</div> 
                    </div>
                </div>
            </div>
            <ResponsiveContainer height={200}>
                <BarChart data={sessions} barGap={8} barCategoryGap={1}> {/* Graphique en barres avec les espaces entre les barres et recuperation des sessions*/}
                    <CartesianGrid vertical={false} strokeDasharray="1 1" /> {/* vertical en false c'est a dire le cadran et strokeDasharray permet de faire un trait de soulignement   */}
                    <XAxis {...xAxisStyle} dataKey= "dayNumber" /> {/* je definit la variable xAxisStyle ici  */}
                    <YAxis {...yAxisKilogramStyle} /> {/* je definit la variable yAxisKilogramStyle ici */}
                    <YAxis {...yAxisCaloriesStyle} /> {/* je definit la variable yAxisCaloriesStyle ici */}
                    <Tooltip content={<ActivityToolType />} /> {/* je definit le composant activiteToolType ici  */}
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} /> {/* Barre pour les kilogrammes personnalisée */}
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} /> {/* Barre pour les calories personnalisée */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Activite;

// Fonction pour le contenu personnalisé du Tooltip
function ActivityToolType({ active, payload }) {
    // Si le tooltip est actif, on retourne le container avec les valeurs en kilogrammes et en calories
    if (active) {
        return (
            <div className="Container">
                <div className="Text">{payload[0].value}kg</div> {/* payload[0].value contient la valeur en kilogrammes */}
                <div className="Text">{payload[1].value}Kcal</div> {/* payload[1].value contient la valeur en calories */}
            </div>
        );
    }
    return null; // Retourne null si le tooltip n'est pas actif
}