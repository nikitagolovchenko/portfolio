// import $ from 'jquery';


export default class burgerMenu {
  constructor(burger) {
    this.burger = burger;
  }

  addActive() {
    $(this.burger).toggleClass('active');
  }

  removeActive() {
    $(this.burger).removeClass('active');
  }
}
