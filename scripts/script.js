const navtoggle = document.querySelector(".nav__toggle")
const nav = document.querySelector(".primary__navigation")

navtoggle.addEventListener("click",()=>{
    navtoggle.classList.toggle("active");

    nav.hasAttribute("data-visible")
    ? navtoggle.setAttribute("aria-expamded", false)
    : navtoggle.setAttribute("aria-expamded", true);
    nav.toggleAttribute("data-visible");
})