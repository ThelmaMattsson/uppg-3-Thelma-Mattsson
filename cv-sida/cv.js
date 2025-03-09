
//Funktion för hamburgermeny
function toggleMenu() {
    const navigationMenu =document.getElementById('navigation-menu');
    navigationMenu.classList.toggle('active');
};

//Lånad funktion från W3schools för dark/light mode
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
};


//Funktion för att hämta data från JSON för cv
function fetchData() {
    //fetch hämtar JSON-filen
    fetch("myData.json")
        .then(function(response) {
            return response.json();
        })
        //Uppdaterar HTML med JSON-datan
        .then(function(data) {
            document.getElementById("title").innerText = data.cvItem1;

            //listan från HTML-filen lokaliseras
            let itemList1 = document.getElementById("cvList1");
            itemList1.innerHTML = "";

            //Loopar JSON-listan och skapar nya element i html för vatje objekt i listan
            data.utbildningar.forEach(function(utbildning) {
                //Skapar nytt li-element i html
                let li = document.createElement("li"); 
                //Innehållet i nya li-elementet
                li.innerHTML = utbildning.title + "<br>" + utbildning.school + "<br>" + utbildning.period;
                //Lägger till i listan
                itemList1.appendChild(li);
            });
            document.getElementById("arbete").innerText = data.cvItem2;

            let itemList2 = document.getElementById("cvList2");
            itemList2.innerHTML = "";

            data.arbeten.forEach(function(arbete) {
                let li = document.createElement("li");
                li.innerHTML = arbete.title + "<br>" + arbete.workplace + "<br>" + arbete.period;
                itemList2.appendChild(li);
            });
            
        })
        .catch(function(error) {
            console.log("Fel vid hämtning av data:", error);
        });
}
fetchData(); //Kör funktionen 

