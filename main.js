const hamBtn = document.getElementById("ham-icon");
const navMenu = document.getElementById("mob-nav");
const closeIcon = document.getElementById("close-icon");
const navLink = document.querySelectorAll(".nav-links");
const tabs = document.querySelectorAll(".selcet-btns ul li");
const gadget = document.querySelectorAll(".gadget");
const mouse = document.querySelectorAll(".mouses");
const keyboard = document.querySelectorAll(".keyboards");
const headphones = document.querySelectorAll(".headphones");
const scrollBtn = document.getElementById('scroll-btn');
const screenheader = document.getElementById('header');
const html = document.querySelector("html");
const themeBtn = document.getElementById('theme-btn');

navLink.forEach(link => link.addEventListener("click", () => navMenu.classList.add("hidden")));
closeIcon.addEventListener("click", () => navMenu.classList.add("hidden"));
hamBtn.addEventListener("click", () => navMenu.classList.toggle("hidden"));

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const tabVal = tab.getAttribute("data-tabs");

        gadget.forEach(item => item.style.display = "none");

        switch (tabVal) {
            case 'gadget':
                gadget.forEach(item => item.style.display = "block");
                break;
            case 'mouses':
                mouse.forEach(item => item.style.display = "block");
                break;
            case 'keyboards':
                keyboard.forEach(item => item.style.display = "block");
                break;
            case 'headphones':
                headphones.forEach(item => item.style.display = "block");
                break;
        }
    });
});

const handleScroll = () => {
    scrollBtn.classList.toggle('hidden', window.scrollY < 300);
    screenheader.classList.toggle('border-b', window.scrollY >= 80);
};

window.addEventListener('scroll', handleScroll);

const toggleTheme = () => {
    html.classList.toggle('dark');
    themeBtn.classList.toggle('ri-moon-fill', 'ri-sun-fill');
    localStorage.setItem("mode", html.classList.contains('dark') ? "dark" : "light");
};

if (localStorage.getItem("mode") === "dark") {
    toggleTheme();
}

themeBtn.addEventListener('click', toggleTheme);

const animation = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: "200",
    mobile: true,
});

animation.reveal(".main-img");
animation.reveal(".main-div", { origin: 'right' });
animation.reveal(".catagory", { interval: '300' });
animation.reveal(".promo-1", { origin: 'left' });
animation.reveal(".promo-2", { origin: 'right' });
animation.reveal(".combo-img", { origin: 'bottom' });
animation.reveal(".combo-content", { origin: 'right' });
animation.reveal(".menu-main", { origin: 'left', delay: 20 });
animation.reveal(".review", { origin: 'top' });
animation.reveal(".footer", { origin: 'top' });
