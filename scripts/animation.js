const h1 = document.querySelector("h1");
const anim_n = document.querySelectorAll(".anim_n");
let text = "";

const timer = ms => new Promise(res => setTimeout(res, ms));

async function load (element) {
let el_text = element.textContent;
element.textContent = "";
for (let i = 0; i < el_text.length; i++) {
    await timer(50); // then the created Promise can be awaited
    text = text + el_text[i];
    element.textContent = text;
}
text = "";

}
load(h1);



const numArray = document.querySelectorAll(".services_num");
async function nums(element) {
    let value = element.textContent;
    element.textContent = "";
    for (let j = 0; j < value / 4; j++) {
        element.textContent = j * 4;
        await timer(0.01);
        
    }
    
}
nums(numArray[1]);

const animItems = document.querySelectorAll(".anim");
let load_el = false;

window.addEventListener("scroll", animOnScroll);
function animOnScroll(params){
    for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 2;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if(animItemHeight > window.innerHeight){
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        let lines = document.querySelectorAll('.line');
        let procents = document.querySelectorAll(".procent");

        if((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))){
            if(animItem.classList.contains("line")){
               for (let i = 0; i < lines.length; i++) {
                    lines[i].style.width = procents[i].textContent + "%";
                } 
            }
            if (animItem.classList.contains("services_num") && !load_el){
                for (let i = 0; i < numArray.length; i++) {
                    nums(numArray[i]);
                }
                load_el = true;
            }
            animItem.classList.add("active_anim");

        }  else {
            if(animItem.classList.contains("line")){
                for (let i = 0; i < lines.length; i++) {
                     lines[i].style.width = 0;
                 } 
             
            }
            animItem.classList.remove("active_anim");
        }
    }
}
function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return{top: rect.top + scrollTop, left: rect.left + screenLeft}
}
let first_load = false
animOnScroll();
