import { useState, useEffect, useCallback } from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mock/data';
import ErrorPage from '../page/ErrorPage';

// Mode de développement
const mode = "fetchData";

// Hook personnalisé useFetch pour gérer les requêtes HTTP
const useFetch = (url) => {
  // États pour gérer les données, l'état de chargement et les erreurs
  const [data, setData] = useState(null); // Contient les données récupérées
  const [loading, setLoading] = useState(false); // Indique si une requête est en cours
  const [error, setError] = useState(null); // Contient les messages d'erreur en cas de problème

  // Fonction fetchData pour récupérer les données en fonction de l'URL
  const fetchData = useCallback(async () => {
    setLoading(true); // Démarre le chargement

    // En mode développement
    if (mode === "dev") {
      const module = url.substring(url.lastIndexOf("/") + 1); // On récupère le dernier parti de l'URL
      switch (module) {
        case "activity":
          setData({ data: USER_ACTIVITY }); // Utilise les données USER_ACTIVITY pour le module 'activity'
          break;
        case "average-sessions":
          setData({ data: USER_AVERAGE_SESSIONS }); // Utilise les données USER_AVERAGE_SESSIONS pour le module 'average-sessions'
          break;
        case "performance":
          setData({ data: USER_PERFORMANCE }); // Utilise les données USER_PERFORMANCE pour le module 'performance'
          break;
        default:
          setData({ data: USER_MAIN_DATA }); // Utilise les données USER_MAIN_DATA par défaut
          break;
      }
      setLoading(false); // Termine le chargement des données
    } else {
      try {
        const response = await fetch(url); // Effectue une requête HTTP GET avec l'URL spécifiée
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`); // Lance une erreur si la réponse n'est pas OK
        }
        const result = await response.json(); // Convertit la réponse en JSON
        setData(result); // Met à jour les données avec le résultat de la requête
      } catch (err) {
        setError(<ErrorPage/>); // Capture et enregistre les erreurs rencontrées pendant la requête
      } finally {
        setLoading(false); // Termine le chargement, que la requête soit réussie ou non
      }
    }
  }, [url]); // Gestion des changements de l'URL pour que useEffect s'exécute à chaque changement

  // Effectue la récupération des données à chaque changement de l'URL
  useEffect(() => {
    fetchData(); // Appelle la fonction fetchData pour récupérer les données
  }, [fetchData]); // Appelle la fonction fetchData pour que useEffect s'exécute à chaque changement

  // Retourne les données, l'état de chargement et les erreurs pour une utilisation dans le composant
  return { data, loading, error };
};

export default useFetch;
