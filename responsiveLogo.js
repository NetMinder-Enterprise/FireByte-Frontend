function changeImageSource() {
  const logo = document.getElementById("logo");

  if (window.matchMedia("(max-width: 500px)").matches) {
    logo.src = "assets/netMinderLogoSmall.png";
  } else {
    logo.src = "assets/netMinderLogo.png";
  }
}

changeImageSource();

window.addEventListener("resize", changeImageSource);
