
new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
    },
);
let header = document.querySelector("header");

  let scrollPrev = 0;

window.addEventListener('scroll', function() {
	let scrolled = window.pageYOffset;
	if ( scrolled > 0 && scrolled > scrollPrev ) {
		header.classList.remove('header_scroll_active');
	} else {
		header.classList.add('header_scroll_active');
	}
	scrollPrev = scrolled;
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let button = document.querySelector(".buttons_block");
let nav = document.querySelector("nav");
let menu_active = true;

let selectedTd;
nav.onclick = function(event) {
  let a = event.target.closest('a'); // (1)

  if (!a) return; // (2)

  if (!nav.contains(a)) return; // (3)

  highlight(a); // (4)
};
function highlight(td) {
  if (selectedTd) { // убрать существующую подсветку, если есть
    selectedTd.classList.remove('active');
  }
  selectedTd = td;
  selectedTd.classList.add('active'); // подсветить новый td
  closeMenu();
}

function openMenu(){
  button.classList.add("active");
  nav.classList.add("active");
  header.classList.add("active");
  // document.body.style.overflow = "hidden";
  menu_active = !menu_active;
}

function closeMenu(){
  button.classList.remove("active");
  nav.classList.remove("active");
  header.classList.remove("active");
  menu_active = !menu_active;

}

button.addEventListener("click",function(){
  if (menu_active){
    openMenu();
  } else closeMenu();

});
window.addEventListener("keyup", function(e){ if(e.keyCode == 27){

  closeMenu();
}  }, false);
