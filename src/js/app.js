import $ from 'jquery';
import burgerMenu from './components/burgerMenu';

$(document).ready(function() {
    
    const $burger = $('#burger');
    const burger = new burgerMenu($burger);

    
    $($burger).on('click', function(e) {
        e.preventDefault();
        burger.addActive();
    });
    
    
    // --- resize handler ---
    $(window).on('load resize orientationchange', function () {
        burger.removeActive();
    });

});
