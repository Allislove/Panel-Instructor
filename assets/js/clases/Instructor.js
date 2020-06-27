import User from './User.js'

export default class Instructor extends User{
    constructor(name, lastname, desde) {
        super(name, lastname)
        this.desde = desde;
    }
    
}