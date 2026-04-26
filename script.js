const themes = [
    {
        name: "light",
        message: "Let there be light!"
    },
    {
        name: "dark",
        message: "You merely adopted the darkness, I was born in it."
    },
    {
        name: "red",
        message: "Vader is near."
    },
    {
        name: "ocean",
        message: "Aloha brutha, get to the water."
    }
];

const themesButton = document.querySelector("#theme-switcher-button");

const themeDropdown = document.querySelector("#theme-dropdown");

const statusMessage = document.querySelector("#status");


function openThemes() {
    themeDropdown.hidden = false;
    themesButton.ariaExpanded = true;
}

function closeThemes() {
    themeDropdown.hidden = true;
    themesButton.ariaExpanded = false;
}


// open or close theme dropdown
themesButton.addEventListener("click", () => {
    if(themeDropdown.hidden) {
        openThemes();
    } else {
        closeThemes();
    }
});

themeDropdown.addEventListener("click", () => {
    const themeName = event.target.textContent;
    const theme = themes.find(theme => theme.name === themeName);

    const body = document.querySelector("body");
    body.setAttribute("class", "theme-" + theme.name);

    const message = document.createElement("h3");
    message.textContent = theme.message;
    statusMessage.innerHTML = "";
    statusMessage.appendChild(message);
    
    closeThemes();
});