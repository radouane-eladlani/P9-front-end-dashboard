export default class SessionModel {
    constructor(data) {
      // Tableau représentant les jours de la semaine (Lundi à Dimanche)
      const daysMapping = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
      
      // Transforme chaque session de 'data.data.sessions' en ajoutant la correspondance du jour 
      this.data = data.data.sessions.map(session => ({
        ...session, // Copie toutes les propriétés existantes de 'session'
        day: daysMapping[session.day - 1] // Ajoute la propriété 'day' avec la valeur abrégée correspondante
      }));
    }
  }
  
  
