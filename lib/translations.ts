export type Locale = "en" | "es";

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Header
    "header.titleModal": "User_Details",
    "header.jobTitle": "Fullstack Developer",
    "header.description":
      "Backend and DevOps developer. My main stack is Java with Spring Boot, plus Docker/Podman and Kubernetes for infrastructure. I can also build frontends with React and TypeScript, and I set up automated CI/CD workflows to keep deployments running smoothly.",
    "header.labelBtn": "More",

    // Header Modal
    "header.modal.hobbies":
      "When I'm not staring at a screen, I'm usually losing myself in a movie or a series—I'm a true cinephile. I also have a deep interest in freestyle battles and the art of improvisation.",
    "header.modal.motivation":
      "My drive started as a kid, taking toys apart not to break them, but to figure out how they worked. That same obsession with the 'inner workings' is what leads me to dive deep into the guts of a system today.",
    "header.modal.curiosities":
      "I love tinkering with hardware. Whether it's experimenting with an Arduino Uno or setting up a home server on an old PC using K3s and Podman, I find that building the infrastructure myself is the best way to truly master the software.",
    "header.modal.philosophy":
      "I'm a pragmatist. I believe the most elegant solution is usually the simplest one. I'll always choose a maintainable, straightforward architecture over a complex one just to be 'clever'.",
    "header.modal.soundtrack":
      "My focus is powered by 80s New Wave and the energy of Salsa. To unwind, I turn to classical music, particularly the piano and violin—which is why I'm currently teaching myself how to play the piano.",

    // Sidebar
    "sidebar.userProfile": "USER_PROFILE",
    "sidebar.region": "Region",
    "sidebar.regionValue": "GMT-5 (Colombia)",
    "sidebar.mode": "Mode",
    "sidebar.modeValue": "Remote / Hybrid",
    "sidebar.downloadCV": "Download_CV.exe",
    "sidebar.linguisticStack": "LINGUISTIC_STACK",
    "sidebar.developmentStack": "Development_Stack",
    "sidebar.additionalDeps": "Additional_Dependencies",

    // Sidebar Nav
    "sidebar.nav.userRoot": "User_Root",
    "sidebar.nav.techSpecs": "Tech_Specs",
    "sidebar.nav.logsAcademic": "Logs_Academic",
    "sidebar.nav.deployments": "Deployments",

    // Social tooltips
    "social.connect": "connect",

    // Knowledge
    "knowledge.title": "Knowledge_Base",
    "knowledge.backend": "Backend Development",
    "knowledge.backend.stack": "Stack",
    "knowledge.backend.interfaces": "Interfaces",
    "knowledge.backend.interfacesDesc": "RESTful APIs & GraphQL Design",
    "knowledge.backend.persistence": "Persistence",
    "knowledge.backend.persistenceDesc": "DB Management & Service Architecture",
    "knowledge.frontend": "Frontend Engineering",
    "knowledge.frontend.stack": "Stack",
    "knowledge.frontend.frameworks": "Frameworks",
    "knowledge.frontend.frameworksDesc": "React, Svelte",
    "knowledge.frontend.integration": "Integration & UX",
    "knowledge.frontend.integrationDesc":
      "RESTful API consumption and reactive state management",
    "knowledge.devops": "DevOps & Cloud Infrastructure",
    "knowledge.devops.orchestration": "Orchestration",
    "knowledge.devops.orchestrationDesc": "Kubernetes (K8s)",
    "knowledge.devops.containers": "Containers",
    "knowledge.devops.containersDesc": "Docker/Podman",
    "knowledge.devops.automation": "Automation",
    "knowledge.devops.automationDesc": "CI/CD pipeline development",
    "knowledge.cs": "Computer Science Fundamentals",
    "knowledge.cs.osInternals": "OS Internals",
    "knowledge.cs.osInternalsDesc":
      "Memory, process management, and concurrency",
    "knowledge.cs.lowLevel": "Low-Level",
    "knowledge.cs.lowLevelDesc": "System programming in C",
    "knowledge.cs.systemUtils": "System Utilities",
    "knowledge.cs.systemUtilsDesc": "Unix environment and Shell Scripting",

    // Education
    "education.title": "ACADEMIC_LOG",
    "education.present": "Present",
    "education.udea":
      "Systems Engineering at Universidad de Antioquia. Coursework covers software engineering, DevOps, and distributed systems.",
    "education.rh124":
      "Focused on core Linux administration tasks, including CLI proficiency, file system hierarchy management, user administration, and security permissions within the RHEL 9.3 environment.",
    "education.do188":
      "Comprehensive training on containerizing applications using Podman 4.18. Focused on building, managing, and running containers in rootless environments, along with a foundational introduction to OpenShift orchestration and Kubernetes-based deployments.",

    // Portfolio
    "portfolio.title": "PORTFOLIO_LOG",
    "portfolio.learnMore": "Learn_More",
    "portfolio.githubRepo": "Github_Repository",
    "portfolio.frontendRepo": "Frontend_Repo",
    "portfolio.backendRepo": "Backend_Repo",
    "portfolio.liveDemo": "Live_Demo",
    "portfolio.shellRepo": "Shell_Repo",
    "portfolio.utilitiesRepo": "Utilities_Unix_Repo",

    // Portfolio - Supermarket
    "portfolio.supermarket.title": "Supermarket Sales Management",
    "portfolio.supermarket.desc":
      "API for sales control across supermarket chains, featuring automated deployment on a Kubernetes cluster.",
    "portfolio.supermarket.f1": "Automated deployment pipeline for scalability",
    "portfolio.supermarket.f2": "RESTful API for multi-branch sales tracking",
    "portfolio.supermarket.f3":
      "Containerized database management using stateful sets",
    "portfolio.supermarket.challenge":
      "Data persistence across pod restarts using Kubernetes StatefulSets and persistent volumes.",

    // Portfolio - Fleet Guard
    "portfolio.fleet.title": "Fleet Guard 360",
    "portfolio.fleet.desc":
      "Real-time fleet monitoring system with satellite tracking, built on a microservices architecture.",
    "portfolio.fleet.f1":
      "Microservices architecture with API Gateway and JWT auth",
    "portfolio.fleet.f2":
      "Real-time push notifications via WebSocket (STOMP/SockJS)",
    "portfolio.fleet.f3": "Nginx reverse proxy with isolated Docker networks",
    "portfolio.fleet.challenge":
      "Two isolated Docker networks, JWT auth across 5 microservices, and real-time alerts via WebSocket/RabbitMQ.",

    // Portfolio - Tracely
    "portfolio.tracely.title": "Tracely",
    "portfolio.tracely.desc":
      "High-precision wealth tracking platform with budget management, analytics, and type-safe financial data.",
    "portfolio.tracely.f1":
      "Dynamic balance overview with real-time surplus/deficit indicators",
    "portfolio.tracely.f2":
      "Category-based budget management with visual progress bars",
    "portfolio.tracely.f3":
      "Interactive donut charts for income and expense analytics",
    "portfolio.tracely.challenge":
      "Implementing a feature-based architecture with high cohesion per domain module while ensuring type safety across the entire transaction lifecycle using Zod schemas and TanStack Query for server state management.",

    // Portfolio - Renewable
    "portfolio.renewable.title": "Global Renewable Energy Monitoring",
    "portfolio.renewable.desc":
      "Full-stack platform to analyze global solar, wind, and hydroelectric energy production and consumption.",
    "portfolio.renewable.f1":
      "Real-time data visualization of global energy trends",
    "portfolio.renewable.f2": "Dynamic filtering by energy source and region",
    "portfolio.renewable.f3":
      "High-performance API for handling large datasets",
    "portfolio.renewable.challenge":
      "Integrating complex data visualizations while maintaining a responsive UI and ensuring the backend could serve large volumes of data without latency.",

    // Portfolio - Unix
    "portfolio.unix.title": "Unix Command Interpreter",
    "portfolio.unix.desc":
      "A from-scratch Unix shell implementation capable of executing both internal and external commands.",
    "portfolio.unix.f1": "Support for internal shell commands",
    "portfolio.unix.f2": "Execution of external binaries via fork/exec",
    "portfolio.unix.f3": "I/O redirection and pipe implementation",
    "portfolio.unix.challenge":
      "Designing a robust command parser and managing the complex lifecycle of child processes to prevent zombie processes and handle signals correctly.",

    // Contact
    "contact.title": "transmission_protocol",
    "contact.emailPlaceholder": "user@domain.com",
    "contact.emailLabel": "Set_target_email",
    "contact.messagePlaceholder": "Enter transmission data...",
    "contact.messageLabel": "Compile_payload",
    "contact.submit": "Transmit_data",
    "contact.sending": "Transmitting...",
    "contact.success": "Transmission_Successful: Data sent to root",
    "contact.error": "Transmission_Failed: Server_Error_0x404",

    // Project Details
    "project.stack": "Build_Stack",
    "project.features": "Core_features",
    "project.challenge": "Tech_challenge",
    "project.logs": "Access_logs",

    // Footer
    "footer.status": "SYSTEM_STATUS:",
    "footer.stable": "STABLE",
  },
  es: {
    // Header
    "header.titleModal": "Detalles_Usuario",
    "header.jobTitle": "Desarrollador Fullstack",
    "header.description":
      "Desarrollador backend y DevOps. Mi stack principal es Java con Spring Boot, más Docker/Podman y Kubernetes para la infraestructura. También construyo frontends con React y TypeScript, y configuro flujos CI/CD automatizados para que los despliegues corran sin problemas.",
    "header.labelBtn": "Ver más",

    // Header Modal
    "header.modal.hobbies":
      "Cuando no estoy frente a una pantalla, suelo perderme en una película o una serie: soy un verdadero cinéfilo. También me apasionan las batallas de freestyle y el arte de la improvisación.",
    "header.modal.motivation":
      "Todo empezó de niño, cuando desarmaba juguetes no para romperlos, sino para entender cómo funcionaban. Esa misma obsesión por el 'funcionamiento interno' es la que hoy me lleva a meterme en las entrañas de un sistema.",
    "header.modal.curiosities":
      "Me encanta trastear con hardware. Ya sea experimentando con un Arduino Uno o montando un servidor casero en un PC viejo con K3s y Podman, creo que construir la infraestructura por mi cuenta es la mejor forma de dominar el software de verdad.",
    "header.modal.philosophy":
      "Soy pragmático. Creo que la solución más elegante suele ser la más simple. Siempre elegiré una arquitectura mantenible y directa antes que una compleja solo para presumir de 'listo'.",
    "header.modal.soundtrack":
      "Mi concentración se alimenta del New Wave de los 80 y de la energía de la salsa. Para desconectar, recurro a la música clásica, sobre todo al piano y al violín; por eso ahora estoy aprendiendo piano por mi cuenta.",

    // Sidebar
    "sidebar.userProfile": "PERFIL_USUARIO",
    "sidebar.region": "Región",
    "sidebar.regionValue": "GMT-5 (Colombia)",
    "sidebar.mode": "Modalidad",
    "sidebar.modeValue": "Remoto / Híbrido",
    "sidebar.downloadCV": "Descargar_CV.exe",
    "sidebar.linguisticStack": "STACK_LINGÜÍSTICO",
    "sidebar.developmentStack": "Stack_de_Desarrollo",
    "sidebar.additionalDeps": "Dependencias_Adicionales",

    // Sidebar Nav
    "sidebar.nav.userRoot": "Usuario_Root",
    "sidebar.nav.techSpecs": "Specs_Técnicas",
    "sidebar.nav.logsAcademic": "Logs_Académicos",
    "sidebar.nav.deployments": "Despliegues",

    // Social tooltips
    "social.connect": "conectar",

    // Knowledge
    "knowledge.title": "Base_de_Conocimiento",
    "knowledge.backend": "Desarrollo Backend",
    "knowledge.backend.stack": "Stack",
    "knowledge.backend.interfaces": "Interfaces",
    "knowledge.backend.interfacesDesc": "Diseño de APIs RESTful y GraphQL",
    "knowledge.backend.persistence": "Persistencia",
    "knowledge.backend.persistenceDesc":
      "Gestión de BD y arquitectura de servicios",
    "knowledge.frontend": "Ingeniería Frontend",
    "knowledge.frontend.stack": "Stack",
    "knowledge.frontend.frameworks": "Frameworks",
    "knowledge.frontend.frameworksDesc": "React, Svelte",
    "knowledge.frontend.integration": "Integración y UX",
    "knowledge.frontend.integrationDesc":
      "Consumo de APIs RESTful y manejo reactivo del estado",
    "knowledge.devops": "DevOps e Infraestructura en la Nube",
    "knowledge.devops.orchestration": "Orquestación",
    "knowledge.devops.orchestrationDesc": "Kubernetes (K8s)",
    "knowledge.devops.containers": "Contenedores",
    "knowledge.devops.containersDesc": "Docker/Podman",
    "knowledge.devops.automation": "Automatización",
    "knowledge.devops.automationDesc": "Desarrollo de pipelines CI/CD",
    "knowledge.cs": "Fundamentos de Ciencias de la Computación",
    "knowledge.cs.osInternals": "Funcionamiento interno del SO",
    "knowledge.cs.osInternalsDesc":
      "Memoria, gestión de procesos y concurrencia",
    "knowledge.cs.lowLevel": "Bajo nivel",
    "knowledge.cs.lowLevelDesc": "Programación de sistemas en C",
    "knowledge.cs.systemUtils": "Utilidades del sistema",
    "knowledge.cs.systemUtilsDesc": "Entorno Unix y Shell Scripting",

    // Education
    "education.title": "REGISTRO_ACADÉMICO",
    "education.present": "Actualidad",
    "education.udea":
      "Ingeniería de Sistemas en la Universidad de Antioquia. El plan de estudios cubre ingeniería de software, DevOps y sistemas distribuidos.",
    "education.rh124":
      "Enfocada en tareas esenciales de administración Linux: dominio de la CLI, gestión del sistema de archivos, administración de usuarios y permisos de seguridad en entornos RHEL 9.3.",
    "education.do188":
      "Formación integral en containerización de aplicaciones con Podman 4.18: construcción, gestión y ejecución de contenedores en entornos rootless, junto con una introducción a la orquestación con OpenShift y despliegues basados en Kubernetes.",

    // Portfolio
    "portfolio.title": "REGISTRO_PORTAFOLIO",
    "portfolio.learnMore": "Saber_Más",
    "portfolio.githubRepo": "Repositorio_GitHub",
    "portfolio.frontendRepo": "Repo_Frontend",
    "portfolio.backendRepo": "Repo_Backend",
    "portfolio.liveDemo": "Demo_En_Vivo",
    "portfolio.shellRepo": "Repo_Shell",
    "portfolio.utilitiesRepo": "Repo_Utilidades_Unix",

    // Portfolio - Supermarket
    "portfolio.supermarket.title": "Gestión de Ventas para Supermercados",
    "portfolio.supermarket.desc":
      "API para el control de ventas en cadenas de supermercados, con despliegue automatizado sobre un clúster de Kubernetes.",
    "portfolio.supermarket.f1":
      "Pipeline de despliegue automatizado para escalabilidad",
    "portfolio.supermarket.f2":
      "API RESTful para el seguimiento de ventas en múltiples sedes",
    "portfolio.supermarket.f3":
      "Gestión de base de datos containerizada con StatefulSets",
    "portfolio.supermarket.challenge":
      "Persistencia de datos entre reinicios de pods usando StatefulSets y volúmenes persistentes de Kubernetes.",

    // Portfolio - Fleet Guard
    "portfolio.fleet.title": "Fleet Guard 360",
    "portfolio.fleet.desc":
      "Sistema de monitoreo de flotas en tiempo real con rastreo satelital, construido sobre una arquitectura de microservicios.",
    "portfolio.fleet.f1":
      "Arquitectura de microservicios con API Gateway y autenticación JWT",
    "portfolio.fleet.f2":
      "Notificaciones push en tiempo real vía WebSocket (STOMP/SockJS)",
    "portfolio.fleet.f3": "Reverse proxy Nginx con redes Docker aisladas",
    "portfolio.fleet.challenge":
      "Dos redes Docker aisladas, autenticación JWT en 5 microservicios y alertas en tiempo real vía WebSocket/RabbitMQ.",

    // Portfolio - Tracely
    "portfolio.tracely.title": "Tracely",
    "portfolio.tracely.desc":
      "Plataforma de seguimiento de patrimonio de alta precisión con gestión de presupuestos, analítica y datos financieros con tipado seguro.",
    "portfolio.tracely.f1":
      "Resumen dinámico de saldo con indicadores de superávit/déficit en tiempo real",
    "portfolio.tracely.f2":
      "Gestión de presupuestos por categorías con barras de progreso visuales",
    "portfolio.tracely.f3":
      "Gráficas de anillo interactivas para la analítica de ingresos y gastos",
    "portfolio.tracely.challenge":
      "Implementar una arquitectura basada en funcionalidades con alta cohesión por módulo de dominio, garantizando tipado seguro en todo el ciclo de vida de las transacciones con esquemas Zod y TanStack Query para el estado del servidor.",

    // Portfolio - Renewable
    "portfolio.renewable.title": "Monitoreo Global de Energía Renovable",
    "portfolio.renewable.desc":
      "Plataforma full-stack para analizar la producción y el consumo global de energía solar, eólica e hidroeléctrica.",
    "portfolio.renewable.f1":
      "Visualización de datos en tiempo real de las tendencias energéticas globales",
    "portfolio.renewable.f2":
      "Filtrado dinámico por fuente de energía y región",
    "portfolio.renewable.f3":
      "API de alto rendimiento para manejar grandes volúmenes de datos",
    "portfolio.renewable.challenge":
      "Integrar visualizaciones de datos complejas manteniendo una UI responsiva, y asegurar que el backend sirviera grandes volúmenes de datos sin latencia.",

    // Portfolio - Unix
    "portfolio.unix.title": "Intérprete de Comandos Unix",
    "portfolio.unix.desc":
      "Implementación de una shell Unix desde cero, capaz de ejecutar comandos internos y externos.",
    "portfolio.unix.f1": "Soporte para comandos internos de la shell",
    "portfolio.unix.f2": "Ejecución de binarios externos vía fork/exec",
    "portfolio.unix.f3": "Redirección de E/S e implementación de pipes",
    "portfolio.unix.challenge":
      "Diseñar un parser de comandos robusto y gestionar el ciclo de vida de los procesos hijos para evitar procesos zombi y manejar señales correctamente.",

    // Contact
    "contact.title": "protocolo_de_transmisión",
    "contact.emailPlaceholder": "usuario@dominio.com",
    "contact.emailLabel": "Definir_email_destino",
    "contact.messagePlaceholder": "Ingresa los datos de transmisión...",
    "contact.messageLabel": "Compilar_payload",
    "contact.submit": "Transmitir_datos",
    "contact.sending": "Transmitiendo...",
    "contact.success": "Transmisión_Exitosa: Datos enviados a root",
    "contact.error": "Transmisión_Fallida: Error_de_Servidor_0x404",

    // Project Details
    "project.stack": "Stack_del_Proyecto",
    "project.features": "Características_Principales",
    "project.challenge": "Reto_Técnico",
    "project.logs": "Logs_de_Acceso",

    // Footer
    "footer.status": "ESTADO_DEL_SISTEMA:",
    "footer.stable": "ESTABLE",
  },
};

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};
