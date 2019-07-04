////////////////////////////////////////////////////////////////////////
//                             variables                              //
////////////////////////////////////////////////////////////////////////

  const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.navbar__logo');
let toggleAnim = true;

export default (function() {

    animNavbar();

  window.onscroll = function() {

    animNavbar();

  }
}())

function animNavbar(argument) {

  if (pageYOffset > 0) {

    if (toggleAnim) {
      navbar.classList.toggle('fixed');
      navbar.classList.remove('absolute');
      logo.classList.remove('logo-absolute');
      logo.classList.add('logo-fixed');
    }
    toggleAnim = false;

  } else {

    if (!toggleAnim) {
      navbar.classList.toggle('fixed');
      navbar.classList.add('absolute');
      logo.classList.remove('logo-fixed');
      logo.classList.add('logo-absolute');
    }
    toggleAnim = true;
  }
}
