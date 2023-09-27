const checkbox = document.getElementById('themeSwitcher');
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (storedTheme){
    checkbox.checked = storedTheme == "dark" ? false : true;
    document.documentElement.setAttribute('data-theme', storedTheme)
}else{
    storedTheme = "dark";
    document.documentElement.setAttribute('data-theme', storedTheme)
}

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', "light")
        localStorage.setItem('theme', "light");
        changeLogo();
    } else {
        document.documentElement.setAttribute('data-theme', "dark")
        localStorage.setItem('theme', "dark");
        changeLogo();
    }
});

function changeLogo(){
    logo = document.getElementById("logo");
    if (window.matchMedia("(max-width: 500px)").matches) {
        if (storedTheme == "dark"){
            logo.src = "./assets/netMinderLogoSmallDark.png";
        }else{
            logo.src = "./assets/netMinderLogoSmallLight.png";
        }
    } else {
        if (storedTheme == "dark"){
            logo.src = "./assets/netMinderLogoDark.png";
        }else{
            logo.src = "./assets/netMinderLogoLight.png";
        }
    }
}

changeLogo();
window.addEventListener("resize", changeLogo);