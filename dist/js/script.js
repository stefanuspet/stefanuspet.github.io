//Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed')
    }
}


//Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-Menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//skills

    //button
const all_btn = document.querySelector('#all-btn');
const code_btn = document.querySelector('#code-btn');
const framework_btn = document.querySelector('#framework-btn');
const design_btn = document.querySelector('#design-btn');

    //display icon
const code = document.querySelector('#code');
const code2 = document.querySelector('#code2');
const code3 = document.querySelector('#code3');
const code4 = document.querySelector('#code4');
const design = document.querySelector('#design');
const design2 = document.querySelector('#design2');
const framework = document.querySelector('#framework');
const framework2 = document.querySelector('#framework2');



all_btn.addEventListener('click', function (){
    
    // Button
    all_btn.classList.add('all-active');
    code_btn.classList.remove('code-active');
    framework_btn.classList.remove('framework-active');
    design_btn.classList.remove('design-active');
    
    // card
    code.classList.remove('hidden');
    code2.classList.remove('hidden');
    code3.classList.remove('hidden');
    code4.classList.remove('hidden');
    framework.classList.remove('hidden');
    framework2.classList.remove('hidden');
    design.classList.remove('hidden');
    design2.classList.remove('hidden');


});
code_btn.addEventListener('click', function (){
    
    // Button
    all_btn.classList.remove('all-active');
    code_btn.classList.add('code-active');
    framework_btn.classList.remove('framework-active');
    design_btn.classList.remove('design-active');
    
    // card
    code.classList.remove('hidden');
    code2.classList.remove('hidden');
    code3.classList.remove('hidden');
    code4.classList.remove('hidden');
    framework.classList.add('hidden');
    framework2.classList.add('hidden');
    design.classList.add('hidden');
    design2.classList.add('hidden');

 
});
framework_btn.addEventListener('click', function (){
    
    // Button
    all_btn.classList.remove('all-active');
    code_btn.classList.remove('code-active');
    framework_btn.classList.add('framework-active');
    design_btn.classList.remove('design-active');
    
    // card
    code.classList.add('hidden');
    code2.classList.add('hidden');
    code3.classList.add('hidden');
    code4.classList.add('hidden');
    framework.classList.remove('hidden');
    framework2.classList.remove('hidden');
    design.classList.add('hidden');
    design2.classList.add('hidden');

 
});
design_btn.addEventListener('click', function (){
    
    // Button
    all_btn.classList.remove('all-active');
    code_btn.classList.remove('code-active');
    framework_btn.classList.remove('framework-active');
    design_btn.classList.add('design-active');
    
    // card
    code.classList.add('hidden');
    code2.classList.add('hidden');
    code3.classList.add('hidden');
    code4.classList.add('hidden');
    framework.classList.add('hidden');
    framework2.classList.add('hidden');
    design.classList.remove('hidden');
    design2.classList.remove('hidden');
    
 
});

// work
const all_btn_work = document.querySelector('#all-btn-work');
const code_btn_work = document.querySelector('#code-btn-work');
const design_btn_work = document.querySelector('#design-btn-work');

all_btn_work.addEventListener('click', function () {
    all_btn_work.classList.add('all-active-work');
    code_btn_work.classList.remove('code-active-work');
    design_btn_work.classList.remove('design-active-work');
});
code_btn_work.addEventListener('click', function () {
    all_btn_work.classList.remove('all-active-work');
    code_btn_work.classList.add('code-active-work');
    design_btn_work.classList.remove('design-active-work');
});
design_btn_work.addEventListener('click', function () {
    all_btn_work.classList.remove('all-active-work');
    code_btn_work.classList.remove('code-active-work');
    design_btn_work.classList.add('design-active-work');
});