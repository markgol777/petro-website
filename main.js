/*
███████╗░█████╗░██╗░░░░░██╗░░░░░░█████╗░░██╗░░░░░░░██╗  ░██╗░░░░░░░██╗██████╗░░██████╗░░░░░█████╗░
██╔════╝██╔══██╗██║░░░░░██║░░░░░██╔══██╗░██║░░██╗░░██║  ░██║░░██╗░░██║╚════██╗██╔════╝░░░░██╔══██╗
█████╗░░██║░░██║██║░░░░░██║░░░░░██║░░██║░╚██╗████╗██╔╝  ░╚██╗████╗██╔╝░█████╔╝██║░░██╗░░░░██║░░██║
██╔══╝░░██║░░██║██║░░░░░██║░░░░░██║░░██║░░████╔═████║░  ░░████╔═████║░░╚═══██╗██║░░╚██╗░░░██║░░██║
██║░░░░░╚█████╔╝███████╗███████╗╚█████╔╝░░╚██╔╝░╚██╔╝░  ░░╚██╔╝░╚██╔╝░██████╔╝╚██████╔╝██╗╚█████╔╝
╚═╝░░░░░░╚════╝░╚══════╝╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░░  ░░░╚═╝░░░╚═╝░░╚═════╝░░╚═════╝░╚═╝░╚════╝░

░█████╗░███╗░░██╗  ██╗███╗░░██╗░██████╗████████╗░█████╗░
██╔══██╗████╗░██║  ██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗
██║░░██║██╔██╗██║  ██║██╔██╗██║╚█████╗░░░░██║░░░███████║
██║░░██║██║╚████║  ██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║
╚█████╔╝██║░╚███║  ██║██║░╚███║██████╔╝░░░██║░░░██║░░██║
░╚════╝░╚═╝░░╚══╝  ╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝
*/

window.addEventListener('DOMContentLoaded', setup);
const getClass = selector => document.querySelector(selector);


function setup() {
    const options = {
        rootMargin: '0%'
    };

    const observer = new IntersectionObserver((entires, observer) => {
        entires.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target)
            } else {
                return;
            }
        })
    }, options);

    const h1 = getClass('.text1-section1');
    const span = getClass('.part2-text1-section1');
    const text3 = getClass('.text3-section1');
    const section3Tittle = getClass('.section3-tittle');
    observer.observe(h1);
    setTimeout(() => {
        observer.observe(span);
    }, 400);
    observer.observe(text3);
    observer.observe(section3Tittle);
}

const solutionsButtons = [{
        name: '#banking-btn',
        display: '.first-info-right-section3'
    },
    {
        name: '#commerce-btn',
        display: '.second-info-right-section3'
    },
    {
        name: '#real-estate-btn',
        display: '.third-info-right-section3'
    },
    {
        name: '#social-media-btn',
        display: '.fourth-info-right-section3'
    },

    {
        name: '#logistics-software-btn',
        display: '.fiveth-info-right-section3'
    },
    {
        name: '#healthcare-medical-btn',
        display: '.sixth-info-right-section3'
    },
    {
        name: '#learning-btn',
        display: '.seventh-info-right-section3'
    },
    {
        name: '#solution-btn',
        display: '.eight-info-right-section3'
    }
];

const resetColor = dontResetColor => {
    for (let i = 0; i < solutionsButtons.length; i++) {
        if (solutionsButtons[i].name !== dontResetColor) {
            getClass(solutionsButtons[i].name).style.color = 'white';
        }
    }
}

for (let i = 0; i < solutionsButtons.length; i++) {
    const display = solutionsButtons[i].display;
    const dontResetColor = solutionsButtons[i].name;
    getClass(solutionsButtons[i].name).addEventListener('click', () => {
        getClass(solutionsButtons[i].name).style.color = '#EE7600'
        getClass(solutionsButtons[i].display).style.display = 'block';
        for (let j = 0; j < getClass('.right-section3').children.length; j++) {
            console.log(getClass('.right-section3').children[j].className);
            console.log('display', display.slice(1, ));
            console.log(getClass('.right-section3').children[j].className === display.slice(1, ));
            if (getClass('.right-section3').children[j].className !== display.slice(1, )) {
                getClass('.right-section3').children[j].style.display = 'none';
                resetColor(dontResetColor);
            }
        }
    })
}


// window.onscroll = function (e) {
//     console.log(this.oldScroll > this.scrollY);
//     if (this.oldScroll > this.scrollY) {

//         getClass('.header').style.position = 'fixed';
//         getClass('.header').animate([
//             {top: '0px'},
//             // {opacity: 1}
//         ], 5000)
//     } else {
//         getClass('.header').style.position = 'fixed';
//         getClass('.header').animate([
//             {top: '-20%'},
//             // {opacity: 0}
//         ], 5000)
//     }
//     this.oldScroll = this.scrollY;
// }


console.log(Date.now());
setTimeout(() => {
    console.log(Date.now());
}, 1000)