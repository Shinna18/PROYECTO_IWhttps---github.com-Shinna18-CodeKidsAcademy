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
        window.location.href = 'index_Admin.html';
    } else {
        // Si no, redirigir al panel de Super Admin por defecto
        window.location.href = 'index_SAdmin.html';
    }
});

// Función para manejar el envío del formulario de curso
function submitCourse(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto

    const examName = document.getElementById('exam-name').value;
    const course = document.getElementById('exam-course').value;

    alert(`El examen "${examName}" ha sido asignado al curso "${course}".`);
    // Aquí podrías conectar esta lógica a tu backend para procesar el examen.
}

// Asignamos el evento de agregar preguntas dinámicamente
document.getElementById('add-question-btn').addEventListener('click', function() {
    addQuestion();
});

// Función para agregar preguntas dinámicamente
let questionCount = 1;

function addQuestion() {
    questionCount++;
    const questionContainer = document.getElementById('questions-container');
    const questionHTML = `
        <div class="question">
            <label for="question${questionCount}">Pregunta ${questionCount}:</label>
            <input type="text" id="question${questionCount}" name="question${questionCount}" required>
            
            <div class="options">
                <div class="option-item">
                    <input type="radio" name="q${questionCount}-correct" value="q${questionCount}-option1" required>
                    <label for="q${questionCount}-option1">Opción 1</label>
                    <input type="text" id="q${questionCount}-option1" name="q${questionCount}-option1" required>
                </div>

                <div class="option-item">
                    <input type="radio" name="q${questionCount}-correct" value="q${questionCount}-option2">
                    <label for="q${questionCount}-option2">Opción 2</label>
                    <input type="text" id="q${questionCount}-option2" name="q${questionCount}-option2" required>
                </div>

                <div class="option-item">
                    <input type="radio" name="q${questionCount}-correct" value="q${questionCount}-option3">
                    <label for="q${questionCount}-option3">Opción 3</label>
                    <input type="text" id="q${questionCount}-option3" name="q${questionCount}-option3" required>
                </div>

                <div class="option-item">
                    <input type="radio" name="q${questionCount}-correct" value="q${questionCount}-option4">
                    <label for="q${questionCount}-option4">Opción 4</label>
                    <input type="text" id="q${questionCount}-option4" name="q${questionCount}-option4" required>
                </div>
            </div>
        </div>
    `;
    questionContainer.insertAdjacentHTML('beforeend', questionHTML);
}
