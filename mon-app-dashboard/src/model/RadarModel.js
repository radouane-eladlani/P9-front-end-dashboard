export default class RadarModel {
  constructor(data) {
    if (data && data.data && Array.isArray(data.data.data)) {
      const sortedData = data.data.data.sort((a, b) => b.kind - a.kind);
      
      this.data = sortedData.map(item => ({
        value: item.value,
        kind: this.mapKind(item.kind)
      }));
    } else {
      this.data = [];
    }
  }

  mapKind(kind) {
    switch (kind) {
      case 6:
        return 'Intensité';
      case 5:
        return 'Vitesse';
      case 4:
        return 'Force';
      case 3:
        return 'Endurance';
      case 2:
        return 'Energie';
      case 1:
        return 'Cardio';
      default:
        return kind; 
    }
  }
}

