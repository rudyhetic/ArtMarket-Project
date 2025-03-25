const rightArrow = document.querySelector(".rightarrowclass");
const leftArrow = document.querySelector(".leftarrowclass");
const tabslist = document.querySelector(".text");

rightArrow.addEventListener("click", () => {
    tabslist.scrollBy({
        left: 400,
        behavior: 'smooth' 
    });
    console.log("Clique droite");
});

leftArrow.addEventListener("click", () => {
    tabslist.scrollBy({
        left: -400,
        behavior: 'smooth' 
    });
    console.log("Clique gauche");
});
