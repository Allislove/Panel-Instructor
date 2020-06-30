import allStudents from './allStudents.js';
import estudiantes from './estudiantes.js';

// Listeners


const addingStudent = document.getElementById('add-student');
addingStudent.addEventListener('submit', function(event){
    event.preventDefault(); // Para cancelar el evento, si este es cancelable, puede ser llamado de nuevo.

    //Obtengo los datos que ingresen en los inputs
    const name = document.getElementById('student-name').value;
    const lastname = document.getElementById('student-lastname').value;
    //const fouls = document.getElementById('student-fouls').value;
    const note = document.getElementById('student-note').value;
    const allInStudents = new allStudents(name, lastname, note);

    const totalStudents = new estudiantes();     // creamos la instancia del objeto
    totalStudents.addStudent(allInStudents, 'students-notes'); // llamamos la instancia y le pasamos la const que contiene los inputs
    document.getElementById("add-student").reset(); // Reseteamos los inputs cuando agreguemos datos
})


 