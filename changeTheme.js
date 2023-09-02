const checkbox = document.getElementById('themeSwitcher');
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (storedTheme){
    checkbox.checked = storedTheme == "dark" ? false : true;
    document.documentElement.setAttribute('data-theme', storedTheme)
}

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', "light")
        localStorage.setItem('theme', "light");
    } else {
        document.documentElement.setAttribute('data-theme', "dark")
        localStorage.setItem('theme', "dark");
    }
});