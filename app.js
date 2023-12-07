/*Text Animation CSS and JavaScript

.box{
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  
  .box.show{
    opacity: 1;
    transform: translateY(0);
  }
*/

const contents = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    contents.forEach((content) => {
        const contentTop = content.getBoundingClientRect().top;

        if (contentTop < triggerBottom) {
            content.classList.add('show');
        } else {
            content.classList.remove('show');
        }
    });
}

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const mobile_nav_links = document.querySelectorAll('.mobile-nav a');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

mobile_nav_links.forEach(link => {
    link.addEventListener('click', function () {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    });
});

/*Active Header */
const header = document.querySelector('.header');

window.onscroll = function () {
    var top = window.scrollY;
    console.log(top);

    if (top >= 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

/*Carousel Script */
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let box = document.querySelector('.image-slider-box');

let degrees = 0;

prev.addEventListener('click', function () {
    degrees += 45;

    box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
})

next.addEventListener('click', function () {
    degrees -= 45;

    box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
})

/*MODAL CALL */
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const openBtnResponsive = document.getElementById("openModalResponsive");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

openBtnResponsive.addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

/* SMTP SCRIPT*/
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");
const checkbox = document.getElementById("myCheckbox");
const errorTxt = document.querySelector('.danger-txt');

function sendEmail() {

    if (!checkbox.checked) {
        errorTxt.style.opacity = 1;
        return;
    }

    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${mess.value}`;

    Email.send({
        SecureToken: "67d40d83-6d54-45c6-846c-664964dfbc61",
        To: 'manosgrammos9@gmail.com',
        From: "manosgrammos9@gmail.com",
        Subject: "Trip Information",
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });

    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !mess.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
    }
});