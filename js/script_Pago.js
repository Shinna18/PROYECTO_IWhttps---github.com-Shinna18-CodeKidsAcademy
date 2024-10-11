document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario para pruebas

    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardName = document.getElementById('cardName').value;

    if (validateCardNumber(cardNumber) && validateExpiryDate(expiryDate) && validateCVV(cvv) && cardName !== '') {
        alert("Pago realizado con éxito");
    } else {
        alert("Por favor, complete correctamente los campos");
    }
});

function validateCardNumber(number) {
    return number.length === 16 && !isNaN(number);
}

function validateExpiryDate(date) {
    const [month, year] = date.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    return (
        month >= 1 && month <= 12 && 
        year >= currentYear && 
        (year > currentYear || (year == currentYear && month >= currentMonth))
    );
}

function validateCVV(cvv) {
    return cvv.length === 3 && !isNaN(cvv);
}
