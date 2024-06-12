export default class ScoreModel {
    constructor(data) {
      this.data = [
        { name: 'Score', value: data.data.todayScore * 100 },
        { name: 'Rest', value: 100 - (data.data.todayScore * 100) }
      ];
    }
  }
  