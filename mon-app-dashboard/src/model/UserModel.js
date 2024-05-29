export default class UserModel {
    constructor(data) {
        this.firstName = data.data.userInfos.firstName;
        this.calorieCount = data.data.keyData.calorieCount;
        this.proteinCount = data.data.keyData.proteinCount;
        this.carbohydrateCount = data.data.keyData.carbohydrateCount;
        this.lipidCount = data.data.keyData.lipidCount;
    }
}