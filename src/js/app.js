import $ from 'jquery';
import burgerMenu from './components/burgerMenu';

$(document).ready(function() {
    
    const $burger = $('#burger');
    const $preloader = $('#preloader');
    const $wrapper = $('#wrapper');
    const burger = new burgerMenu($burger);

    $(window).on('load', function() {
        $preloader.hide();
        $wrapper.css('opacity', '1');
    });

    
    $($burger).on('click', function(e) {
        e.preventDefault();
        burger.addActive();
    });
    
    
    // --- resize handler ---
    $(window).on('load resize orientationchange', function () {
        burger.removeActive();
    });


    
    // const circle = document.querySelector('.progress-ring__circle');
    // const radius = circle.r.baseVal.value;  // берем значение радиуса из SVG объекта
    // const circumference = 2 * Math.PI * radius; // получаем длину окружности 
    // const input = document.querySelector('.percent');

    // input.addEventListener('change', function() {
    //     setProgress(input.value);
    // })

    // circle.style.strokeDasharray = `${circumference} ${circumference}`; // разбиваем обводку круга на отрезки( длина_отрезков отступ)
    // circle.style.strokeDashoffset = circumference; // задаем сдвиг для пунктирной обводки равным длине окружности (т.е круга видно не будет)

    // function setProgress(percent) {
    //     const offset = circumference - percent / 100 * circumference;
    //     circle.style.strokeDashoffset = offset;
    // }

    // setProgress(15);

});
