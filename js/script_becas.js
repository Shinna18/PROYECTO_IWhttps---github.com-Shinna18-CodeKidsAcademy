// Verificar si el parámetro "source" en la URL es "admin"
function getSourceFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('source'); // Retorna el valor del parámetro "source"
}

// Asignar comportamiento al botón "Volver"
document.getElementById('back-button').addEventListener('click', function() {
    const source = getSourceFromUrl();
    if (source === 'admin') {
        // Si proviene del panel de Admin, redirigir al panel de Admin
        window.location.href = 'index_admin.html';
    } else {
        // Si no, redirigir al panel de Super Admin por defecto
        window.location.href = 'index_SAdmin.html';
    }
});

// Abrir el modal de evaluación
function openEvaluationModal(studentName, courseName) {
    document.getElementById('student-name').innerText = studentName;
    document.getElementById('course-name').innerText = courseName;
    document.getElementById('evaluation-modal').style.display = 'block';
}

// Cerrar el modal
function closeModal() {
    document.getElementById('evaluation-modal').style.display = 'none';
}

// Mostrar el campo de porcentaje solo si se selecciona "beca parcial"
document.getElementById('evaluation-result').addEventListener('change', function() {
    const percentageGroup = document.getElementById('percentage-group');
    if (this.value === 'parcial') {
        percentageGroup.style.display = 'block';
    } else {
        percentageGroup.style.display = 'none';
    }
});

// Manejar el envío de la evaluación
function submitEvaluation(event) {
    event.preventDefault(); // Prevenir el envío por defecto
    const result = document.getElementById('evaluation-result').value;
    let message = 'Evaluación guardada correctamente: ';
    
    if (result === 'aprobado') {
        message += 'Beca Completa otorgada.';
    } else if (result === 'rechazado') {
        message += 'Solicitud rechazada.';
    } else if (result === 'parcial') {
        const percentage = document.getElementById('percentage').value;
        message += `Beca Parcial otorgada con un ${percentage}% de beca.`;
    }

    alert(message);
    closeModal(); // Cerrar el modal después de guardar la evaluación
}
