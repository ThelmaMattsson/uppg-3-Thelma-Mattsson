
//Funktion för hamburgermeny
function toggleMenu() {
    const navigationMenu =document.getElementById('navigation-menu');
    navigationMenu.classList.toggle('active');
}

//Lånad kod från W3schools för dark/light-mode på body-elementet
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    
};

