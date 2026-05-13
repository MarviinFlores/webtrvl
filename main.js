const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
	  navLinks.classList.toggle("open");

	  const isOpen = navLinks.classList.contains("open");
	menuBtnIcon.setAttribute( "class", isOpen ? "ri-close-line" : "ri-menu-3-line");
	
});

navLinks.addEventListener("click", (e) => {
	  navLinks.classList.remove("open");
	  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
	
});

const scrollRevealOption = {
	distance :"50px",
	origin : "bottom",
	duration :  1000,
};

	ScrollReveal().reveal(".header__content h1", {
	  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
	  ...scrollRevealOption,
	  delay: 500,
	
});

ScrollReveal().reveal(".header__content form", {
	  ...scrollRevealOption,
	  delay: 1000,
});
ScrollReveal().reveal(".header__content img", {
	  ...scrollRevealOption,
	origin:"left",
	delay: 1500,
	
});

ScrollReveal().reveal(".about__content .section__header", {
	  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
	  ...scrollRevealOption,
	     delay:500,
});
ScrollReveal().reveal(".about__signature", {
	  ...scrollRevealOption,
	delay: 1000,
	
});
ScrollReveal().reveal(".tour__card", {
	  ...scrollRevealOption,
	 interval :500,	
});
ScrollReveal().reveal(".destination__card", {
	  ...scrollRevealOption,
	 interval :500,	
});

const swiper = new Swiper(".swiper", {
	  loop: true,
});

const banner = document.querySelector(".banner__wrapper");
const bannerImages = Array.from(banner.children);

bannerImages.forEach((item) => {

	  const duplicateNode = item.cloneNode(true);

	  duplicateNode.setAttribute("aria-hidden", true);

	  banner.appendChild(duplicateNode);

	
});

						emailjs.init({publicKey:"OhM264xdidEe0KoPb",});
  				document.getElementById("contact-form").addEventListener("submit",function(event){
					event.preventDefault();
           
						 const formData ={
						    name : document.getElementById("name").value,
                email : document.getElementById("email").value,
                message : document.getElementById("message").value
              }     						
				
						/* console.table(formData); */

  emailjs.send("service_cgh8acw","template_6yuohqu",formData)
						.then(() => {
							alert ("Mensaje enviado");
						})
							.catch((error) =>{
								console.error("Nose envio mail",error);
							} )
					});


