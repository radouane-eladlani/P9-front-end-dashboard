export default class ScoreModel {
  constructor(data) {
    // Initialise 'this.data' avec un tableau contenant deux objets
    this.data = [
      { name: 'Score', value: data.data.todayScore * 100 }, // Première entrée avec le score calculé
      { name: 'Rest', value: 100 - (data.data.todayScore * 100) } // Deuxième entrée pour le reste du score
    ];
  }
}
