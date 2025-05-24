// Aplicar modo guardado al cargar
if (localStorage.getItem("modo") === "oscuro") {
  document.documentElement.classList.add("dark-mode");
}

window.addEventListener("DOMContentLoaded", () => {
  // Botón modo claro/oscuro
  const botonModo = document.getElementById("modoToggle");
  if (botonModo) {
    botonModo.addEventListener("click", () => {
      const html = document.documentElement;
      const estaOscuro = html.classList.contains("dark-mode");
      if (estaOscuro) {
        html.classList.remove("dark-mode");
        localStorage.setItem("modo", "claro");
      } else {
        html.classList.add("dark-mode");
        localStorage.setItem("modo", "oscuro");
      }
    });
  }

  // Microinteracciones
  document.querySelectorAll(".card").forEach((card) => {
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.02)";
      card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "";
    });
  });
});

// Aplicar microinteracción a botones del header
document.addEventListener("DOMContentLoaded", () => {
  // Microinteracciones para botones de navbar
  document.querySelectorAll(".navbar .btn").forEach((btn) => {
    btn.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.05)";
      btn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
      btn.style.boxShadow = "";
    });
  });

  // Fade-in inicial
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.4s ease-in-out";
  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });

  // Fade-out al cambiar de página
  const links = document.querySelectorAll(
    'a[href]:not([href^="#"]):not([target])'
  );
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const url = link.getAttribute("href");
      if (!url.startsWith("http") && !url.startsWith("mailto")) {
        e.preventDefault();
        document.body.style.opacity = 0;
        setTimeout(() => {
          window.location.href = url;
        }, 300);
      }
    });
  });
});

// Hacer que el dashboard redirija a index.html al hacer clic
document.addEventListener("DOMContentLoaded", () => {
  const dashboard = document.querySelector(".dashboard-shadow");
  if (dashboard) {
    dashboard.style.cursor = "pointer";
    dashboard.title = "Ir a la página principal";
    dashboard.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});
