//Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

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
        return;
    }
    sunIcon.classList.add("display-none");
};


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
    moonIcon.setAttribute("src", "./img/moon-white.png");
    sunIcon.setAttribute("src", "./img/sun-white.png")
    setTimeout(() => {
        sunIcon.classList.add('animate-close');
    },30);

    setTimeout(() => {
        themeSwitch();
        sunIcon.classList.remove('animate-close');
        moonIcon.classList.add('animate-init');
        setTimeout(() => {
            moonIcon.classList.remove('animate-init')
        },
            wait);

    }, wait);
});


const moon2 = 


moonIcon.addEventListener("click", () => {
    sunIcon.setAttribute("src", "./img/sun-black.png")
    moonIcon.setAttribute("src", "./img/moon-black.png");
    setTimeout(() => {
        moonIcon.classList.add('animate-close');
    },30);

    setTimeout(() => {
        themeSwitch();
        moonIcon.classList.remove('animate-close');
        sunIcon.classList.add('animate-init');
        setTimeout(() => {
            sunIcon.classList.remove('animate-init')
        },
            wait);

    }, wait);
});

//invoke theme check on initial load
themeCheck();