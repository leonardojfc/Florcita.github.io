onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

// JavaScript para mostrar gradualmente el nombre
const nombreElement = document.getElementById('nombre');
setTimeout(() => {
    nombreElement.style.opacity = '1';
}, 3000); // 3000ms (3 segundos) coincide con la duración de la animación