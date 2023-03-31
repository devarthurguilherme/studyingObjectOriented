const changeTheme = document.querySelector("#changeTheme");

changeTheme.addEventListener("change", function() {
   DarkMode(); 
});

loadDarkMode();


function loadDarkMode() {
    const darkMode = localStorage.getItem("dark");

    if(darkMode) {
        DarkMode();
    }
}

function DarkMode() {
    document.body.classList.toggle("dark");

    localStorage.removeItem("dark");

    //Save DarkMode

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
}