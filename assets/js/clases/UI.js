export default class UI {
    addInstructor(instructor, elementId) {
        const container = document.getElementById(elementId)
        const rowInstructor = `<tr>
                                <td>${1}</td>
                                <td>${instructor.fullName()}</td>
                                <td>${instructor.hereFrom()}</td>
                        </tr>`
        container.innerHTML += rowInstructor
    }
}

