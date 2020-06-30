import Instructor from './clases/Instructor.js';
import Student from './clases/Student.js';
import UI from './clases/UI.js';
import Stds from './clases/Stds.js';
//import deleteUser from './clases/deleteUser.js';

// Listeners
const formInstructor = document.getElementById('form-new-instructor');
formInstructor.addEventListener('submit', function(event) {
    event.preventDefault()

    const name = document.getElementById('name-instructor').value;
    const lastname = document.getElementById('lastname-instructor').value;
    const desde = document.getElementById('desde-instructor').value;
    const instructor = new Instructor(name, lastname, desde);
    
    const ui = new UI();
    ui.addInstructor(instructor, 'instructors');
    document.getElementById("form-new-instructor").reset();
    //const student =  new Student(name, lastname, 9, 8);
   // console.log(instructor);
    //console.log(student);
})


const addingStudent = document.getElementById('add-negative-students');
addingStudent.addEventListener('submit', function(event){
    event.preventDefault(); // Para cancelar el evento, si este es cancelable, puede ser llamado de nuevo.

    //Obtengo los datos que ingresen en los inputs
    const name = document.getElementById('student-name').value;
    const lastname = document.getElementById('student-lastname').value;
    const fouls = document.getElementById('student-fouls').value;
    const note = document.getElementById('student-note').value;
    const student = new Student(name, lastname, fouls, note);

    const stds = new Stds();     // creamos la instancia del objeto
    stds.addStudent(student, 'students-notes'); // llamamos la instancia y le pasamos la const que contiene los inputs
    document.getElementById("add-negative-students").reset(); // Reseteamos los inputs cuando agreguemos datos
})


 