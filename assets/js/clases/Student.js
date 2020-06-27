import User from './User.js'

export default class Student extends User {
    constructor(name, lastname, fouls, note) {
        super(name, lastname)
        this.fouls = fouls;
        this.note = note;
        
    }
}