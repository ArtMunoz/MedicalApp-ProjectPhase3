# MedicalApp-ProjectPhase3
Descripción
Este proyecto es una aplicación móvil desarrollada con React Native para la gestión de citas médicas en un asilo. La aplicación proporciona diversas funcionalidades para agilizar el proceso de programación y gestión de citas para doctores, enfermeras y pacientes.

Características
Características Generales
Pantalla de Inicio (Splash Screen)

Pantalla inicial mostrada al abrir la aplicación.
Pantalla de Inicio de Sesión

Opción de iniciar sesión con correo electrónico y contraseña.
Opción de iniciar sesión con Google.
Perfiles de Usuarios

Ver perfiles de doctores y enfermeras.
Ver perfiles de pacientes.
Funcionalidades Específicas
Gestión de Citas Médicas

Programar, cancelar y reprogramar citas médicas.
Notificaciones de recordatorio de citas.
Perfiles Detallados

Información completa de los doctores (nombre, especialidad, disponibilidad, etc.).
Información completa de los pacientes (historial médico, medicamentos actuales, alergias, etc.).
Calendario de Citas

Visualización de citas médicas en un calendario interactivo.
Filtrar citas por doctor, paciente o fecha.
Historial Médico

Acceso al historial médico de los pacientes por parte de doctores y enfermeras.
Posibilidad de agregar notas médicas a los perfiles de los pacientes.
Chat y Notificaciones

Chat interno para comunicación entre doctores, enfermeras y pacientes.
Notificaciones push para recordatorios de citas y mensajes importantes.
Configuración y Soporte

Opción de cambiar la contraseña y configuración de la cuenta.
Sección de ayuda y soporte técnico.
Requisitos Técnicos
Frontend: React Native
Backend: Node.js con Express
Base de Datos: Firebase Firestore
Autenticación: Firebase Authentication para correo electrónico y Google OAuth
Manejo de Estado: Redux
Notificaciones: Firebase Cloud Messaging (FCM)
Estructura de la Aplicación
Pantalla de Inicio

Componente: SplashScreen.js
Pantalla de Inicio de Sesión

Componente: LoginScreen.js
Pantalla Principal

Componente: HomeScreen.js
Perfiles

Componentes: DoctorProfile.js, PatientProfile.js
Calendario de Citas

Componente: AppointmentsCalendar.js
Historial Médico

Componente: MedicalHistory.js
Chat y Notificaciones

Componentes: ChatScreen.js, Notifications.js
Configuración y Soporte

Componentes: Settings.js, Support.js
Consideraciones de Diseño
UI/UX: Interfaz intuitiva y fácil de usar, accesible para usuarios mayores.
Seguridad: Cumplir con normativas de protección de datos personales (ej. GDPR, HIPAA).
Rendimiento: Optimización para un rendimiento fluido en dispositivos móviles.
Pasos de Desarrollo
Configuración del entorno de desarrollo.
Creación de componentes básicos (Pantalla de Inicio, Inicio de Sesión, etc.).
Integración de autenticación y backend.
Implementación de funcionalidades específicas (gestión de citas, perfiles, etc.).
Pruebas y depuración.
Despliegue y mantenimiento.
Herramientas y Tecnologías
React Native: Para el desarrollo de la aplicación móvil.
Firebase: Para autenticación y notificaciones.
Redux: Para el manejo del estado.
Axios: Para la comunicación con el backend.
React Navigation: Para la navegación dentro de la aplicación.
Funcionalidades Administrativas Adicionales
Gestión de Usuarios:
Los administradores pueden gestionar roles de usuario y eliminar usuarios.
Generación de Reportes:
Generar reportes para doctores y pacientes basados en citas.
Seguridad y Permisos
Solo los usuarios con el rol de administrador pueden acceder a las funciones administrativas.
Control de acceso basado en roles implementado para garantizar la seguridad.

Enlaces Útiles
Desarrollador: Arturo Ernesto Munoz Barahona - MB030522
Manual de usuario: 
Manual técnico:
Trello o Notion: 
Diseños Mock Ups: 

Licencia
Este proyecto está licenciado bajo la Licencia Creative Commons CC BY-NC 4.0.

Instalación
Clonar el repositorio.
Instalar las dependencias con npm install.
Configurar Firebase y las variables de entorno necesarias.
Ejecutar la aplicación con npm start.
Contribuciones
Siéntase libre de bifurcar el repositorio y enviar pull requests. ¡Todas las contribuciones son bienvenidas!


Licencia
Este proyecto está licenciado bajo la Licencia MIT.
