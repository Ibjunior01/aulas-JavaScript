document.getElementById("areaMouse").addEventListener("mousemove", (e) => {
  document.getElementById("coordenadas").textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
});