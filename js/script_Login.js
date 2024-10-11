document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const email = document.getElementById('email').value;
    
    // Comprobar el correo y redirigir al panel correspondiente
    if (email === 'superadmin@example.com') {
        window.location.href = 'index_SAdmin.html';  // Redirigir al Panel de Super Admin
    } else if (email === 'admin@example.com') {
        window.location.href = 'index_Admin.html';  // Redirigir al Panel de Admin
    } else if (email === 'profesor@example.com') {
        window.location.href = 'index_profesores.html';  // Redirigir al Panel de Profesores
    } else {
        alert('Correo no reconocido. Por favor, verifique su correo o contacte al administrador.');
    }
});
