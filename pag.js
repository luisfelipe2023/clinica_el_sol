/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, mainId) =>{
    const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId),
    main = document.getElementById(mainId)
 
    if(toggle && sidebar && main){
        toggle.addEventListener('click', ()=>{
            /* Show sidebar */
            sidebar.classList.toggle('show-sidebar')
            /* Add padding main */
            main.classList.toggle('main-pd')
        })
    }
 }
 showSidebar('header-toggle','sidebar', 'main')
 document.addEventListener('DOMContentLoaded', () => {
    // Obtener el nombre del usuario desde localStorage
    const username = localStorage.getItem('username');

    // Seleccionar el elemento donde se mostrará el mensaje
    const welcomeMessage = document.getElementById('welcome-message');

    // Actualizar el texto del mensaje
    if (username) {
        welcomeMessage.textContent = `BIENVENIDO  ${username} A CLÍNICA EL SOL`;
    } else {
        welcomeMessage.textContent = "BIENVENIDO A CLÍNICA EL SOL";
    }
});