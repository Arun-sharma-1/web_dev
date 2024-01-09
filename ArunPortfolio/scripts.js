//navigation bar effect on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header?.classList.toggle("sticky", window.scrollY > 5);
})



const serviceModals = document.querySelectorAll(".service-modal")
const learnmoreBtns = document.querySelectorAll(".learn-more-btn")
const modalCloseBtns = document.querySelectorAll(".modal-close-btn")

var modal = function (modalClick) {
    serviceModals[modalClick].classList.add('display-class')
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloseBtns.forEach(modalclosebtn => {
    modalclosebtn.addEventListener('click', () => {
        serviceModals.forEach((modalview) => {
            modalview.classList.remove('display-class')
        })
    })
})

const ImageCard = document.querySelectorAll('.image-card');
const portfolioClosebtn = document.querySelectorAll('.portfolio-close-btn');
const portfolioModal = document.querySelectorAll('.portfolio-modal');

ImageCard.forEach((card, i) => {
    card.addEventListener('click', () => {
        console.log('clicked')
        openPortfolioModal(i);
    })
})

var openPortfolioModal = function (i) {
    console.log('under')
    portfolioModal[i].classList.add('active')
}

portfolioClosebtn.forEach((closebtn, i) => {
    closebtn.addEventListener('click', () => {
        closePortfolioModal(i);
    })
});

function closePortfolioModal(i) {
    portfolioModal[i].classList.remove('active')
}


// scroll to top 
const scrollToTop = document.querySelector('.scroll-totop-btn');
window.addEventListener('scroll', function () {
    scrollToTop?.classList.toggle('active', window.scrollY > 500);
})
scrollToTop?.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//navigating menu icons on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section')
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]")?.classList.add('active');
        }
        else {
            document.querySelector(".nav-items a[href*=" + id + "]")?.classList.remove('active');
        }
    })
});

//Responsive navigation bar
const menubtn = document.querySelector('.nav-menu-btn')
const navClosebtn = document.querySelector('.nav-close-btn')
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav-items a')

menubtn?.addEventListener('click', () => {
    console.log('1st ')
    navigation?.classList.add('active')
})
navClosebtn?.addEventListener('click', () => {
    console.log('2nd ')
    navigation?.classList.remove('active')
})

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navigation?.classList.remove('active')
    })
})