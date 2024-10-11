function login(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const email = document.getElementById('email').value;

  // Verificar el correo estático
  if (email === "superadmin@example.com") {
      // Redirigir al panel de Super Admin
      window.location.href = "indexSAdmin.html";
  } else if (email === "admin@example.com") {
      // Redirigir al panel de Admin
      window.location.href = "index_Admin.html";
  } else {
      alert("Correo no reconocido. Por favor ingrese un correo válido.");
  }
}