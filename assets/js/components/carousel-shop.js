////////////////////////////////////////////////////////////////////////
//                             variables                              //
////////////////////////////////////////////////////////////////////////

const buttonLeft = document.getElementsByClassName('container-shop__icon-arrow-left')[0];
const buttonRight = document.getElementsByClassName('container-shop__icon-arrow-right')[0];
const shopSection = document.getElementsByClassName('container-shop')[0];

export default (function test() {

  shopSection.onclick = (event) => {

    const allProduct = document.getElementsByClassName('container-shop__fieldset');
    const activeProduct = document.querySelector(".container-shop__active-product");
    const precedentProduct = document.querySelector('.container-shop__precedent-product');
    const lastProduct = document.querySelector('.container-shop__last-product');

    if(event.target == buttonRight) {
      toggleClass(precedentProduct, 'container-shop__precedent-product');
      toggleClass(precedentProduct, 'container-shop__last-product');
      toggleClass(activeProduct, 'container-shop__active-product');
      toggleClass(activeProduct, 'container-shop__precedent-product');
      toggleClass(lastProduct, 'container-shop__active-product');
      toggleClass(lastProduct, 'container-shop__last-product');
    }

    if(event.target == buttonLeft) {
      toggleClass(activeProduct, 'container-shop__active-product');
      toggleClass(activeProduct, 'container-shop__last-product');
      toggleClass(precedentProduct, 'container-shop__active-product');
      toggleClass(precedentProduct, 'container-shop__precedent-product');
      toggleClass(lastProduct, 'container-shop__last-product');
      toggleClass(lastProduct, 'container-shop__precedent-product');
    }
  }
}());

function toggleClass(target, whichClass) {
  target.classList.toggle(whichClass);
};
