//Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");


const syntax = document.getElementById("syntax");

const wait = 200;

//Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//Icon Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};


//Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        syntax.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark-reasonable.min.css";
        return;
    }
    sunIcon.classList.add("display-none");
    syntax.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css";
};


// const initDefaultTheme = () => {
//     if (userTheme === "dark") {
//         document.documentElement.classList.add("dark");
//         moonIcon.classList.toggle("display-none");
//         riceWhite.classList.toggle("display-none");
//         menuWhite.classList.toggle("display-none")
//     } else {
//          sunIcon.classList.toggle("display-none");
//          riceBlack.classList.toggle("display-none");
//          menuBlack.classList.toggle("display-none");
//     }
// }


//Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        syntax.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css";
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
    syntax.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark-reasonable.min.css";
};


// call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
    sunIcon.classList.replace('fill-black', 'fill-white');
    sunIcon.classList.add('animate-close');
    setTimeout(() => {
        themeSwitch();
        sunIcon.classList.remove('animate-close');
        moonIcon.classList.add('animate-init');
        setTimeout(() => {
            moonIcon.classList.remove('animate-init')
        },
            wait);
        sunIcon.classList.replace('fill-white', 'fill-black');
    }, wait);
});


moonIcon.addEventListener("click", () => {
    moonIcon.classList.replace('fill-white', 'fill-black');
    moonIcon.classList.add('animate-close');
    setTimeout(() => {
        themeSwitch();
        moonIcon.classList.remove('animate-close');
        sunIcon.classList.add('animate-init');
        setTimeout(() => {
            sunIcon.classList.remove('animate-init')
        },
            wait);
        moonIcon.classList.replace('fill-black', 'fill-white');
    }, wait);
});

//invoke theme check on initial load
themeCheck();
