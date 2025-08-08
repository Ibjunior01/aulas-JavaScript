const form = document.getElementById("formPreferencias");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const preferencias = {
    tema: document.getElementById("tema").value,
    fonte: document.getElementById("fonte").value
  };
  localStorage.setItem("preferencias", JSON.stringify(preferencias));
  aplicarPreferencias();
});

function aplicarPreferencias() {
  const prefs = JSON.parse(localStorage.getItem("preferencias"));
  if (prefs) {
    document.body.className = `${prefs.tema} ${prefs.fonte}`;
  }
}

aplicarPreferencias();