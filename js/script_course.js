// Verificar si el parámetro "source" en la URL es "admin"
function getSourceFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('source'); // Retorna el valor del parámetro "source"
}

document.getElementById('back-button').addEventListener('click', function() {
    const source = getSourceFromUrl();
    if (source === 'admin') {
        // Si proviene del panel de Admin, redirigir al panel de Admin
        window.location.href = 'index_Admin.html';
    } else {
        // Si no, redirigir al panel de Super Admin por defecto
        window.location.href = 'index_SAdmin.html';
    }
});

// Función para manejar el envío del formulario de curso
function submitCourse(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto

    const courseName = document.getElementById('course-name').value;
    const teacher = document.getElementById('course-teacher').value;

    alert(`El curso "${courseName}" ha sido subido exitosamente y asignado a ${teacher}.`);
    // Aquí puedes conectar esta lógica a tu backend para procesar los archivos y asignar el curso.
}
