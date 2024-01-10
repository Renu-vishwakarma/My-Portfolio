const servicesButtons = document.querySelectorAll('.service_item');
const serviceDetails = document.querySelector('.services_right');

const getService = (category) => {
    const details = serviceData.find(item => item.category === category);
    serviceDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}`
}

const removeActiveClass = () => {
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    })
}

servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        const serviceClass = item.classList[1];
        getService(serviceClass)
        item.classList.add('active')
    })
})

getService('frontend')

// mix it up

const containerEl = document.querySelector('.projects_container')

var mixer = mixitup(containerEl, {
     animation: {
        enable: false
     }
});

mixer.filter('*');

//swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    breakpoints: {
        600:{
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });

  //nav toggle

const navMenu = document.querySelector('.nav_menu')  
const navOpenBtn = document.querySelector('.nav_toggle-open')
const navCloseBtn = document.querySelector('.nav_toggle-close')

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNavHandler)
navCloseBtn.addEventListener('click', closeNavHandler)

const navItems = navMenu.querySelector('a');
if(window.innerWidth < 768){
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler)
    })
}

// theme

const themeBtn = document.querySelector('.nav_theme-btn');
themeBtn.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if(!bodyClass){
        bodyClass = 'dark';
        document.body.className = bodyClass;
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
        window.localStorage.setItem('theme', bodyClass);
    }
    else{
        bodyClass = '';
        document.body.className = bodyClass;
        themeBtn.innerHTML = '<i class="fa-regular fa-moon"></i>'
        window.localStorage.setItem('theme', bodyClass);
    }
})

window.addEventListener('load', () => {
   document.body.className = window.localStorage.getItem('theme');
})