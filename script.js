/*==================== SHOW MENU =================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*========= MENU SHOW =======*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

/* ======= MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

/*============= REMOVE MENU MOBILE ===========*/
const navLink = document.querySelectorAll('nav-link')

const linkAction =() =>{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav_ link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER =============*/

const blurHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viweport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

/*=========== EMAIL JS ==================*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_apvcuoc','template_4v32g2d', '#contact-form','gGby7Wd7WXMGW2H5F')
        .then(() =>{
            //Show sent message
            contactMessage.textContent='Message sent successfully✅'

        }, () =>{
           //Show error message
           contactMessage.textContent='Message not sent (service error)❌' 
        })
}

contactForm.addEventListener('submit', sendEmail)

/* =============== SHOW SCROLL UP ================*/

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
        this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                           : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=========== SCROLL SECTIONS ACTIVE LINK =============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/*============== SCROLL REVEAL ANIMATION ================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:600,
    // reset:true  //Animations repeat
})

sr.reveal(`.home-data, .home-social, .contact-container, .footer-container, .footer`)
sr.reveal(`.home-image`,{origin:'bottom'})
sr.reveal(`.about-data, .skills-data`,{origin:'left'})
sr.reveal(`.about-image,.skills-content`,{origin:'right'})
sr.reveal(`.services-card, .projects-card`,{interval:100})

