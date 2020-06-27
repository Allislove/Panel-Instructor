import User from './User.js'

export default class Student extends User {
    constructor(name, lastname, note, fouls) {
        super(name, lastname)
        this.note = note;
        this.fouls = fouls;
    }
}