export default class Stds {
    addStudent(student, elementId) { //le paso la instancia de student para que pueda traer sus propievades y atributos
        const container = document.getElementById(elementId)
        const rowNegativeStudents = `<tr>
                                <td>${1}</td>
                                <td>${student.studentName()}</td>
                                <td>${student.studentLastName()}</td>
                                <td>${student.studentFouls()}</td>
                                <td>${student.studentNotes()}</td>
                        </tr>`
        container.innerHTML += rowNegativeStudents;
    }
}


// Clase para llevar la lista total de estudiantes negativos
// En esta clase, llamo el objeto student, que esta creado en el nodo principal, para mostrarlas en una tabla en el documento html
// entonces al llamar a el objeto student. le digo que me muestre las funciones que he determinado para que se cpuedan ingresar datos, o cumpla su trabajo
