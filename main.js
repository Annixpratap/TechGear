/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamBtn = document.getElementById("ham-icon");
const navMenu = document.getElementById("mob-nav");
const closeIcon = document.getElementById("close-icon");
const navLink = document.querySelectorAll(".nav-links");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden");
    })
);

closeIcon.addEventListener("click", () => {
    navMenu.classList.add("hidden");
});

hamBtn.addEventListener("click", () => {
    navMenu.classList.remove("hidden");
});
const tabs = document.querySelectorAll(".selcet-btns ul li");
const gadget = document.querySelectorAll(".gadget");
const mouse = document.querySelectorAll(".mouses");
const keyboard = document.querySelectorAll(".keyboards");
const headphones = document.querySelectorAll(".headphones");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => {
            t.classList.remove("active");
        });
        tab.classList.add("active");

        const tabVal = tab.getAttribute("data-tabs");

        // Hide all gadget items
        gadget.forEach(item =>{
            item.style.display = "none";
        });

        // Show relevant gadget items based on clicked tab
        if(tabVal == 'gadget'){
            gadget.forEach(item => {
                item.style.display = "block";
            });
        }
        else if(tabVal == 'mouses'){
            mouse.forEach(item => {
                item.style.display = "block";
            });
        }
        else if(tabVal == 'keyboards'){
            keyboard.forEach(item => {
                item.style.display = "block";
            });
        }
        else if(tabVal == 'headphones'){
            headphones.forEach(item => {
                item.style.display = "block";
            });
        }
    });
});

const screenTop = () => {
    const scrollBtn = document.getElementById('scroll-btn');
    if(this.scrollY >= 300){
        scrollBtn.classList.remove('hidden');
        scrollBtn.classList.add('bottom-4');
    } else{
        scrollBtn.classList.remove('bottom-4');
        scrollBtn.classList.add('hidden');  
    }
};
window.addEventListener('scroll', screenTop);


const screenHead = () => {
    const screnheader = document.getElementById('header');
    if(this.scrollY >= 80){
        screnheader.classList.add("border-b");
    } else {
        screnheader.classList.remove("border-b");
    }
};


window.addEventListener('scroll', screenHead);



const html = document.querySelector("html");
const themeBtn = document.getElementById('theme-btn');


const darkMode = ()=>{
    html.classList.add('dark');
    themeBtn.classList.replace('ri-moon-fill','ri-sun-fill');
    localStorage.setItem("mode", "dark");
}
const lightMode = ()=>{
    html.classList.remove('dark');
    themeBtn.classList.replace('ri-sun-fill','ri-moon-fill');
    localStorage.setItem("mode", "light");
}

if(localStorage.getItem("mode") == "dark"){
    darkMode();
}else {
    lightMode();
}

themeBtn.addEventListener('click', (e) => {
    if(localStorage.getItem("mode") == "light"){
        darkMode(); 
    }else{
        lightMode();
    }
});


const animation = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay:"200",
    mobile: true,    
})

animation.reveal(".main-img");
animation.reveal(".main-div", {origin: 'right'});
animation.reveal(".catagory", { interval:'300'});
animation.reveal(".promo-1", {origin: 'left'});
animation.reveal(".promo-2", {origin: 'right'});
animation.reveal(".combo-img", {origin: 'bottom'});
animation.reveal(".combo-content", {origin: 'right'});
animation.reveal(".menu-main", {origin: 'left',delay: 20});
animation.reveal(".review", {origin: 'top'});
animation.reveal(".footer", {origin: 'top'});
