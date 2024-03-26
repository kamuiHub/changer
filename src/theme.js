//Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

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
     sunIcon.classList.add('animate-close');

    setTimeout(() => {
    themeSwitch();
    sunIcon.classList.remove('animate-close');
    moonIcon.classList.add('animate-initial');
    setTimeout(() => {
        moonIcon.classList.remove('animate-initial')
    },
        200);

  }, 200);
});

moonIcon.addEventListener("click", () => {
    moonIcon.classList.add('animate-close');

    setTimeout(() => {
    themeSwitch();
    moonIcon.classList.remove('animate-close');
    sunIcon.classList.add('animate-initial');
    setTimeout(() => {
        sunIcon.classList.remove('animate-initial')
    },
        200);

  }, 200);

});

//invoke theme check on initial load
themeCheck();