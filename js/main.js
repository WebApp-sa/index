

const allLinkes  = document.querySelectorAll(".navbar-nav a");
const started  = document.querySelectorAll(".btn-main");
console.log(started);

function scrollToSomeWhere( elements) {
    elements.forEach(ele => {
        ele.addEventListener("click",(e)=>{

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'

            });
        });
    });
}

scrollToSomeWhere(allLinkes);
scrollToSomeWhere(started);