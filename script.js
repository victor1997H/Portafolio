document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector("[data-current-year]");

  if (yearElement) {
    yearElement.textContent = `© ${new Date().getFullYear()} Víctor Daniel Hualpa`;
  }

  const caseStudies = {
    cobros: {
      title: "Sistema de Cobros Predictivo",
      summary:
        "Plataforma web para centralizar información relacionada con clientes, préstamos, cuotas y procesos de cobranza.",
      description:
        "Sistema web desarrollado para organizar información operativa y permitir que diferentes partes del proceso se gestionen desde una aplicación centralizada.",
      problem:
        "La necesidad principal era trabajar con información más ordenada y accesible, evitando depender de registros dispersos para procesos relacionados con cobranza.",
      solution:
        "Se desarrolló una aplicación web con frontend, backend, API REST, autenticación, gestión de base de datos, contenerización, publicación en servidor y automatización de procesos.",
      role:
        "Participé en el desarrollo de la interfaz, backend, API, base de datos, configuración de contenedores y preparación del sistema para funcionar en Internet.",
      features: [
        "Aplicación web con frontend y backend",
        "API REST para comunicación entre capas",
        "Autenticación y seguridad",
        "Gestión de base de datos",
        "Contenerización y publicación en servidor",
        "Automatización de procesos"
      ],
      tech: ["Angular", "TypeScript", "NestJS", "Node.js", "PostgreSQL", "Docker", "Traefik", "n8n"],
      captures:
        "No se publican capturas ni datos reales de clientes en esta versión. El espacio visual queda preparado para reemplazarse por imágenes autorizadas."
    },
    dental: {
      title: "Sistema de Gestión para Consultorio Dental",
      summary:
        "Aplicación orientada a facilitar la organización y gestión digital de un consultorio dental.",
      description:
        "Proyecto desarrollado como una solución digital conectada a una API para apoyar la organización de información del consultorio.",
      problem:
        "La necesidad era contar con una herramienta digital que permitiera estructurar parte del trabajo del consultorio mediante una aplicación conectada a servicios backend.",
      solution:
        "Se trabajó una aplicación con comunicación hacia una API REST, autenticación, almacenamiento seguro de contraseñas y persistencia de información en una base de datos.",
      role:
        "Participé en el desarrollo de la aplicación, la conexión con la API, la autenticación y la integración con base de datos.",
      features: [
        "Aplicación orientada a gestión digital",
        "Comunicación entre aplicación y API REST",
        "Autenticación",
        "Almacenamiento seguro de contraseñas",
        "Persistencia en base de datos"
      ],
      tech: ["Flutter", "Flask", "PostgreSQL", "API REST"],
      captures:
        "No se incorporaron capturas públicas del sistema porque el repositorio actual no contiene imágenes reales verificables del proyecto."
    },
    fertilizantes: {
      title: "Calculadora de Fertilizantes",
      summary:
        "Aplicación móvil para realizar cálculos relacionados con fertilización a partir de datos de nutrientes, parcela y fertilizantes.",
      description:
        "Aplicación móvil desarrollada para guiar el ingreso de información y presentar resultados relacionados con cálculos de fertilización.",
      problem:
        "La necesidad era disponer de una herramienta móvil que permitiera organizar datos de entrada y consultar el detalle del cálculo de forma clara.",
      solution:
        "Se desarrolló una aplicación móvil con flujo de captura de datos, selección de fertilizantes, detalle del cálculo y presentación de resultados.",
      role:
        "Participé en el desarrollo móvil, la estructura de pantallas y la lógica de presentación de datos y resultados.",
      features: [
        "Ingreso de niveles de nutrientes",
        "Registro de dimensiones de parcela",
        "Selección y listado de fertilizantes",
        "Detalle del cálculo",
        "Presentación de resultados"
      ],
      tech: ["React Native", "Expo", "JavaScript"],
      captures:
        "No se agregaron capturas reales en esta versión. La tarjeta está preparada para incorporar imágenes del flujo móvil cuando estén disponibles."
    }
  };

  const modal = document.querySelector("#case-study-modal");
  const openButtons = document.querySelectorAll("[data-case]");

  if (!modal || openButtons.length === 0) {
    return;
  }

  const fields = {
    title: modal.querySelector("#case-title"),
    summary: modal.querySelector("#case-summary"),
    description: modal.querySelector("#case-description"),
    problem: modal.querySelector("#case-problem"),
    solution: modal.querySelector("#case-solution"),
    role: modal.querySelector("#case-role"),
    features: modal.querySelector("#case-features"),
    tech: modal.querySelector("#case-tech"),
    captures: modal.querySelector("#case-captures")
  };

  const closeButton = modal.querySelector(".case-modal__close");
  let lastFocusedElement = null;

  const renderList = (container, items, tagName) => {
    container.replaceChildren();

    items.forEach((item) => {
      const element = document.createElement(tagName);
      element.textContent = item;
      container.appendChild(element);
    });
  };

  const openCaseStudy = (caseId) => {
    const caseStudy = caseStudies[caseId];

    if (!caseStudy) {
      return;
    }

    fields.title.textContent = caseStudy.title;
    fields.summary.textContent = caseStudy.summary;
    fields.description.textContent = caseStudy.description;
    fields.problem.textContent = caseStudy.problem;
    fields.solution.textContent = caseStudy.solution;
    fields.role.textContent = caseStudy.role;
    fields.captures.textContent = caseStudy.captures;
    renderList(fields.features, caseStudy.features, "li");
    renderList(fields.tech, caseStudy.tech, "span");

    lastFocusedElement = document.activeElement;
    document.body.classList.add("modal-open");

    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
      modal.classList.add("is-open");
    }

    closeButton?.focus();
  };

  const closeCaseStudy = () => {
    if (typeof modal.close === "function" && modal.open) {
      modal.close();
      return;
    }

    modal.removeAttribute("open");
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    lastFocusedElement?.focus();
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openCaseStudy(button.dataset.case);
    });
  });

  closeButton?.addEventListener("click", closeCaseStudy);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeCaseStudy();
    }
  });

  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    lastFocusedElement?.focus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.hasAttribute("open")) {
      closeCaseStudy();
    }
  });
});
