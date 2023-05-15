const themeButton = document.getElementById("theme-button");
const body = document.querySelector("body");
const themeButtonImage = document.querySelector(".button-image");
themeButton.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){
        themeButtonImage.setAttribute("src", "./src/imagens/sun.png");
    }
    else{
    themeButtonImage.setAttribute("src", "./src/imagens/moon.png");
    }
    
});