// Contador de preguntas
let questionCount = 1;

// Agregar una nueva pregunta
function addQuestion() {
    questionCount++;
    const questionContainer = document.getElementById('questions-container');
    
    const questionHTML = `
        <div class="question">
            <label for="question${questionCount}">Pregunta ${questionCount}:</label>
            <input type="text" id="question${questionCount}" name="question${questionCount}" required>
            
            <div class="options">
                <div class="input-group">
                    <label for="q${questionCount}-option1">Opción 1</label>
                    <input type="text" id="q${questionCount}-option1" name="q${questionCount}-option1" required>
                    <input type="radio" name="q${questionCount}-correct" value="q${questionCount}-option1" required> Correcta
                </div>

                <div class="input-group">
                    <label for="q${questionCount}-option2">Opción 2</label>
                    <input type="text" id="q${questionCount}-option2" name="q${questionCount}-option2" required>
                    <input type="radio" name="q${questionCount}-correct" value="q${questionCount}-option2"> Correcta
                </div>

                <div class="input-group">
                    <label for="q${questionCount}-option3">Opción 3</label>
                    <input type="text" id="q${questionCount}-option3" name="q${questionCount}-option3" required>
                    <input type="radio" name="q${questionCount}-correct" value="q${questionCount}-option3"> Correcta
                </div>

                <div class="input-group">
                    <label for="q${questionCount}-option4">Opción 4</label>
                    <input type="text" id="q${questionCount}-option4" name="q${questionCount}-option4" required>
                    <input type="radio" name="q${questionCount}-correct" value="q${questionCount}-option4"> Correcta
                </div>
            </div>
        </div>`;
    
    questionContainer.insertAdjacentHTML('beforeend', questionHTML);
}

// Enviar el examen
function submitExam(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    const examName = document.getElementById('exam-name').value;
    const course = document.getElementById('exam-course').value;

    alert(`Examen "${examName}" asignado al curso "${course}" ha sido creado exitosamente.`);
    // Aquí podrías procesar los datos y enviarlos al backend para crear el examen en la base de datos
}

// Asignamos los eventos después de cargar la página
window.onload = function() {
    document.getElementById('add-question-btn').addEventListener('click', addQuestion);
    document.getElementById('exam-form').addEventListener('submit', submitExam);
}
