let darkMode = false;



function init(){
    darkMode = "false";
    const prefersDarkMode = window.matchMedia && window.matchMedia("prefers-color-scheme: dark").matches;

    if(localStorage.getItem("dark-mode")){
        darkMode = localStorage.getItem("dark-mode");
        darkModeProperties();
    }
    else {
        localStorage.setItem("darl-mode",prefersDarkMode);
        darkMode = prefersDarkMode;
        lightModeProperties(); 
    }
    getUserData(url + "thepranaygupta");
}
init();