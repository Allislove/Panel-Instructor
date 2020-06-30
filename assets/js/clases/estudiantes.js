export default class estudiantes {
    addStudent(allStudents, elementId) { //le paso la instancia de student para que pueda traer sus propievades y atributos
        const stdsAll = document.getElementById(elementId)
      /*  let count = 1;
        for(let i=1; i<student.length; i++){
        count ++;
} en prueba */
        const totalStudents = `<tr>
                                <td>${1}</td>
                                <td>${allStudents.studentName()}</td>
                                <td>${allStudents.studentLastName()}</td>
                                <td>${allStudents.studentNotes()}</td>
                        </tr>`
        stdsAll.innerHTML += totalStudents;
    }
}

// Clase para llevar la lista total de estudiantes