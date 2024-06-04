/*Function for open menu*/
function openav(){
    const element = document.querySelector("#navbar");
    element.classList.add("open-menu");
};

/*Closed menu */
function closenav(){
    var ex = document.getElementById("navbar");
    ex.classList.remove("open-menu");
};
/*this script is for effect scroll parallax*/
ScrollReveal().reveal('.postscript' , {delay: 300});
ScrollReveal().reveal('.container-aboutme' , {delay: 300});
ScrollReveal().reveal('.section' , {delay: 500});

/*function alt (){
    var v = document.querySelector("c-home").clientHeight;
    //const exp =document.querySelector("#experience");
    //exp.style.add()
    alert(v);
};*/


import { faro } from '@grafana/faro-web-sdk';

// ...
// initialize faro as shown in the previous examples
// ...

// will be captured automatically
console.info('hello world');

// push log explicitly
faro.api.pushLog(['hello world']);

// will be captured automatically
throw new Error('oh no');

// push error manually
faro.api.pushError(new Error('oh no'));

// push a RUM event
faro.api.pushEvent('click_sign_up_button')