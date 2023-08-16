/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        /* 1 . döngü*/
        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills__active')
        })

        target.classList.add('skills__active')

        /*2.döngü*/

        tabs.forEach(tab => {
            tab.classList.remove('skills__active')
        })

        tab.classList.add('skills__active')

    })
})

/* Yukarıdaki JS Kodları Becerilerim Kısmında becerilerim tablolarına dinamiklik kazandırmak için oluşturuldu.*/

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerjs = mixitup('.work__container', {
    selectors: {
        target: '.work__kart'
    },
    animation: {
        duration: 300
    }
});
/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}



linkWork.forEach(l => l.addEventListener("click", activeWork))
/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}


document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector("portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;

    document.querySelector("portfolio__popup-body span").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalclick) {
    modalViews[modalclick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testtimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true, /* Mouse ile üzerine geldiğimizde el işareti verir.*/
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/* Yukarıda ki Js kodu ile iletişim kısmında kullanılabilir olan elementlere animasyon kazandırdım*/
/* input adı ile oluşturduğum HTML Classına ilk css ile şekilendikten sonra js ile döngü ve fonksiyon yardımı ile animasyon ve esnetik kazandırdım */
/* Lanet animasyonu yapmak 1 günümü aldı  ",blurFunc"  ","  yerine "." koydum =( */

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}
/* Yukarıda ki kod Bloğunda şu işlemleri gerçekleştirdik*/
/* Sol kısımda bulan adres çubuklarımız ilgili olduğu bölüme geldiğinde altında kalıcı olarak bir kırmızı nokta belirecektir*/
/*=============== SHOW SCROLL UP ===============*/
