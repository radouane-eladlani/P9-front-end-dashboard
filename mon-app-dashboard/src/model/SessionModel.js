export default class SessionModel {
    constructor(data) {
        const daysMapping = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        this.data = data.data.sessions.map(session => ({
            ...session,
            day: daysMapping[session.day - 1]
        }));
    }
}
