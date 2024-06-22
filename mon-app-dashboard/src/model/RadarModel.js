export default class RadarModel {
  constructor(data) {
    // Vérifie si 'data' existe et si 'data.data' et 'data.data.data' sont des tableaux
    if (data && data.data && Array.isArray(data.data.data)) {
      // Trie les données par 'kind' de manière décroissante
      const sortedData = data.data.data.sort((a, b) => b.kind - a.kind);
      
      // On mappe chaque élément de 'sortedData' pour transformer les propriétés 'value' et 'kind'
      this.data = sortedData.map(item => ({
        value: item.value, // On garde la valeur 'value' inchangée
        kind: this.mapKind(item.kind) // On mappe 'kind' à l'aide de la méthode 'mapKind'
      }));
    } else {
      // Si les données ne sont pas valides, initialise 'this.data' à un tableau vide
      this.data = [];
    }
  }

  // Méthode pour mapper les valeurs 'kind' aux noms correspondants 
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
        return kind;  // Retourne 'kind' si aucun nom n'est correspondant
    }
  }
}


