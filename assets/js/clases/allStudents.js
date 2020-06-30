import User from './User.js' // Para traer los metodos

export default class allInStudent extends User {
    constructor(name, lastname, note) {
        super(name, lastname)
        this.note = note;
        
    }
}

// Clase para llevar la lista total de estudiantes