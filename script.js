const themes = [
    {
        name: "Light",
        message: "Let there be light!"
    },
    {
        name: "Dark",
        message: "You merely adopted the darkness, I was born in it."
    },
    {
        name: "Red",
        message: "Vader is near."
    },
    {
        name: "Ocean",
        message: "Aloha brutha, get to the water."
    }
];

const themesButton = document.querySelector("#theme-switcher-button");

const themeDropdown = document.querySelector("#theme-dropdown");

const themeStatus = document.querySelector("#theme-status");


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