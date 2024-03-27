//Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const riceWhite = document.querySelector(".rice-w");
const riceBlack = document.querySelector(".rice-b");

const wait = 200;

//Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//Icon Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
    riceWhite.classList.toggle("display-none");
    riceBlack.classList.toggle("display-none");
};


// //Initial Theme Check
// const themeCheck = () => {
//     if (userTheme === "dark" || (!userTheme && systemTheme)) {
//         document.documentElement.classList.add("dark");
//         moonIcon.classList.add("display-none");
//         riceBlack.classList.add("display-none");
//         return;
//     }
//     sunIcon.classList.add("display-none");
//     riceWhite.classList.add("display-none");
// };


const initDefaultTheme = () => {
    if (userTheme === "dark") {
        document.documentElement.classList.add("dark");
        moonIcon.classList.toggle("display-none");
        riceWhite.classList.toggle("display-none");
    } else {
         sunIcon.classList.toggle("display-none");
         riceBlack.classList.toggle("display-none");
    }
}


//Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};


// call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
    sunIcon.setAttribute("src", "./img/sun-white.png")

    sunIcon.classList.add('animate-close');
    setTimeout(() => {
        themeSwitch();
        sunIcon.classList.remove('animate-close');
        moonIcon.classList.add('animate-init');
        setTimeout(() => {
            moonIcon.classList.remove('animate-init')
        },
            wait);
        sunIcon.setAttribute("src", "./img/sun-black.png")

    }, wait);
});


moonIcon.addEventListener("click", () => {
    moonIcon.setAttribute("src", "./img/moon-black.png");

    moonIcon.classList.add('animate-close');
    setTimeout(() => {
        themeSwitch();
        moonIcon.classList.remove('animate-close');
        sunIcon.classList.add('animate-init');
        setTimeout(() => {
            sunIcon.classList.remove('animate-init')
        },
            wait);
        moonIcon.setAttribute("src", "./img/moon-white.png");

    }, wait);
});

//invoke theme check on initial load
//themeCheck();
initDefaultTheme();