// Aquí iría la lógica para cargar dinámicamente los cursos asignados al profesor
const courses = ['Curso de Programación Básica', 'Curso de Matemáticas Avanzadas'];

document.addEventListener('DOMContentLoaded', function() {
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course;
        courseList.appendChild(li);
    });
});

// Función para enviar comentarios
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const comment = document.getElementById('comment').value;
    alert('Comentario enviado: ' + comment);
    // Aquí podrías enviar el comentario al backend
    document.getElementById('comment').value = ''; // Limpiar campo
});

// Lógica para responder comentarios
const commentButtons = document.querySelectorAll('.btn-secondary');
commentButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Respuesta enviada');
        // Aquí podrías enviar la respuesta al backend
    });
});
