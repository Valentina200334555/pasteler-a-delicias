
document.addEventListener("DOMContentLoaded", function () {
    // Inicializar AOS
  AOS.init();

    //Script para alternar modo oscuro   
    const toggleDark = document.getElementById('toggleDark');
    const htmlElement = document.documentElement;
  
    if (toggleDark) {
      toggleDark.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
      });
    }
  });
  
