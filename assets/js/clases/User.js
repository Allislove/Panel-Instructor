export default class User {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
    fullName() {
        return `${this.name} ${this.lastname}`
    }
// Genero una funcion que me retorne solo el nombre lo mismo para apellido, para asi añadirlo a las tablas de estudiantes
    studentName() {
        return `${this.name} `
    }

    studentLastName() {
        return `${this.lastname}`
    }

    hereFrom() {
        return `${this.desde}`
    }

    studentFouls() {
        return `${this.fouls}`
    }

    studentNotes() {
        return `${this.note}`
    }
}
