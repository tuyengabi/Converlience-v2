////////////////////////////////////////////////////////////////////////
//                             variables                              //
////////////////////////////////////////////////////////////////////////

const buttonLeft = document.getElementsByClassName('container-shop__icon-arrow-left')[0];
const buttonRight = document.getElementsByClassName('container-shop__icon-arrow-right')[0];
const shopSection = document.getElementsByClassName('container-shop')[0];



export default (function test() {

  shopSection.onclick = (event) => {

    const allProduct = document.getElementsByClassName('container-shop__fieldset') ;
    const activeProduct = document.querySelector(".container-shop__active-product");
    const precedentProduct = document.querySelector('.container-shop__precedent-product')
    const lastProduct = document.querySelector('.container-shop__last-product')


    // set css for active product
    activeProduct.style.left = '50%';
    activeProduct.style.top = '50%';
    activeProduct.style.height = '90%';
    activeProduct.style.transform = 'translate(-50%, -50%)';
    activeProduct.style.opacity = '1';

    if(event.target == buttonRight) {

      // toggleClass(activeProduct, 'container-shop__active-product');
      // toggleClass(activeProduct, 'container-shop__last-product');
      // toggleClass(precedentProduct, 'container-shop__active-product');
      // toggleClass(precedentProduct, 'container-shop__precedent-product');
      // toggleClass(lastProduct, 'container-shop__last-product');
      // toggleClass(lastProduct, 'container-shop__precedent-product');


      //////////////////////////////////////////////////////////////////////////
      //  function for wrap all css animation when we clicked in Right button  //
      //////////////////////////////////////////////////////////////////////////

        (function animLeft() {


          ////////////////////
          //  active part  //
          ////////////////////
          let activeOpacity = 1;
          let activeHeight = 90;
          let activeTop = 50;
          let activeLeft = 50;

          // 4 seconds
          let animActiveOpacity = setInterval(function() {

            if (activeOpacity < 0.4) {clearInterval(animActiveOpacity)}
            else {
              activeOpacity -= 0.1;
              activeProduct.style.opacity = activeOpacity;
            }
          }, 21.875);

          let animActiveHeight = setInterval(function() {

            if (activeHeight == 80) {clearInterval(animActiveHeight)}
            else {
              activeHeight -= 2.5;
              activeProduct.style.height = activeHeight + '%';
            }

          }, 31.25);

          let animActiveTop = setInterval(function() {

            if (activeTop == 40) {clearInterval(animActiveTop)}
            else {
              activeTop -= 2.5;
              activeProduct.style.top = activeTop + '%';
            }

          }, 31.25);

          let animActiveLeft = setInterval(function() {

            if (activeLeft == 25) {clearInterval(animActiveLeft)}
            else {
              activeLeft -= 6.25;
              activeProduct.style.left = activeLeft + '%';
            }

          }, 31.25);

          let animSwitchActive = setTimeout(function() {
            toggleClass(activeProduct, 'container-shop__active-product');
            toggleClass(activeProduct, 'container-shop__precedent-product');
          }, 125);

          //////////////////////
          //  precedent part  //
          //////////////////////

          let precedentLeft = 25;

          let animPrecedentLeft = setInterval(function() {

            if (precedentLeft == 75) {clearInterval(animPrecedentLeft)}
            else {
              precedentLeft += 12.5;
              precedentProduct.style.left = precedentLeft + '%';
            }

          }, 31.25);

          let animSwitchPrecedent = setTimeout(function() {
            toggleClass(precedentProduct, 'container-shop__precedent-product');
            toggleClass(precedentProduct, 'container-shop__last-product');
          }, 125);

          /////////////////
          //  last part  //
          /////////////////

          let lastLeft = 75;
          let lastHeight = 80;
          let lastOpacity = 0.3;
          let lastTop = 0;
          let lastTransform = 0;


          let animLastLeft = setInterval(function() {

            if (lastLeft == 50) {clearInterval(animLastLeft)}
            else {
              lastLeft -= 6.25;
              lastProduct.style.left = lastLeft + '%';
            }

          }, 31.25);

          let animLastTransform = setInterval(function() {

            if (lastTransform == 50) {clearInterval(animLastTransform)}
            else {
              lastTransform += 12.5;
              lastProduct.style.transform = `translate(-50%, -${lastTransform}%)`;
            }

          }, 31.25);

          let animLastTop = setInterval(function() {

            if (lastTop == 50) {clearInterval(animLastTop)}
            else {
              lastTop += 12.5;
              lastProduct.style.top = lastTop + '%';
            }

          }, 31.25);

          let animLastOpacity = setInterval(function() {

            if (lastOpacity >= 1) {clearInterval(animLastOpacity)}
            else {
              lastOpacity += 0.1 ;
              lastProduct.style.opacity = lastOpacity;
            }

          }, 21.875);

          let animLastHeight = setInterval(function() {

            if (lastHeight == 90) {clearInterval(animLastHeight)}
            else {
              lastHeight += 2.5;
              lastProduct.style.height = lastHeight + '%';
            }

          }, 31.25);

          let animSwitchLast = setTimeout(function() {
            toggleClass(lastProduct, 'container-shop__active-product');
            toggleClass(lastProduct, 'container-shop__last-product');
          }, 125);

        }());
    }

    if(event.target == buttonLeft) {

      // toggleClass(precedentProduct, 'container-shop__precedent-product');
      // toggleClass(precedentProduct, 'container-shop__last-product');
      // toggleClass(activeProduct, 'container-shop__active-product');
      // toggleClass(activeProduct, 'container-shop__precedent-product');
      // toggleClass(lastProduct, 'container-shop__active-product');
      // toggleClass(lastProduct, 'container-shop__last-product');

      //////////////////////////////////////////////////////////////////////////
      //  function for wrap all css animation when we clicked in left button  //
      //////////////////////////////////////////////////////////////////////////

        (function animRight() {


          ////////////////////
          //  active part  //
          ////////////////////
          let activeOpacity = 1;
          let activeHeight = 90;
          let activeTop = 50;
          let activeLeft = 50;

          // 4 seconds
          let animActiveOpacity = setInterval(function() {

            if (activeOpacity < 0.4) {clearInterval(animActiveOpacity)}
            else {
              activeOpacity -= 0.1;
              activeProduct.style.opacity = activeOpacity;
            }
          }, 21.875);

          let animActiveHeight = setInterval(function() {

            if (activeHeight == 80) {clearInterval(animActiveHeight)}
            else {
              activeHeight -= 2.5;
              activeProduct.style.height = activeHeight + '%';
            }

          }, 31.25);

          let animActiveTop = setInterval(function() {

            if (activeTop == 40) {clearInterval(animActiveTop)}
            else {
              activeTop -= 2.5;
              activeProduct.style.top = activeTop + '%';
            }

          }, 31.25);

          let animActiveLeft = setInterval(function() {

            if (activeLeft == 75) {clearInterval(animActiveLeft)}
            else {
              activeLeft += 6.25;
              activeProduct.style.left = activeLeft + '%';
            }

          }, 31.25);

          let animSwitchActive = setTimeout(function() {
            toggleClass(activeProduct, 'container-shop__active-product');
            toggleClass(activeProduct, 'container-shop__last-product');
          }, 125);

          //////////////////////
          //  precedent part  //
          //////////////////////

          let precedentLeft = 25;
          let precedentTransform = 0;
          let precedentTop = 0;
          let precedentOpacity = 0.3;
          let precedentHeight = 80;

          let animPrecedentLeft = setInterval(function() {

            if (precedentLeft == 50) {clearInterval(animPrecedentLeft)}
            else {
              precedentLeft += 6.25;
              precedentProduct.style.left = precedentLeft + '%';
            }

          }, 31.25);


          let animPrecedentTransform = setInterval(function() {

            if (precedentTransform == 50) {clearInterval(animPrecedentTransform)}
            else {
              precedentTransform += 12.5;
              precedentProduct.style.transform = `translate(-50%, -${precedentTransform}%)`;
            }

          }, 31.25);

          let animPrecedentTop = setInterval(function() {

            if (precedentTop == 50) {clearInterval(animPrecedentTop)}
            else {
              precedentTop += 12.5;
              precedentProduct.style.top = precedentTop + '%';
            }

          }, 31.25);

          let animPrecedentOpacity = setInterval(function() {

            if (precedentOpacity >= 1) {clearInterval(animPrecedentOpacity)}
            else {
              precedentOpacity += 0.1 ;
              precedentProduct.style.opacity = precedentOpacity;
            }

          }, 21.875);

          let animPrecedentHeight = setInterval(function() {

            if (precedentHeight == 90) {clearInterval(animPrecedentHeight)}
            else {
              precedentHeight += 2.5;
              precedentProduct.style.height = precedentHeight + '%';
            }

          }, 21.875);

          let animSwitchPrecedent = setTimeout(function() {
            toggleClass(precedentProduct, 'container-shop__active-product');
            toggleClass(precedentProduct, 'container-shop__precedent-product');

          }, 125);

          /////////////////
          //  last part  //
          /////////////////

          let lastLeft = 75;
          let lastHeight = 80;
          let lastOpacity = 0.3;


          let animLastLeft = setInterval(function() {

            if (lastLeft == 25) {clearInterval(animLastLeft)}
            else {
              lastLeft -= 12.5;
              lastProduct.style.left = lastLeft + '%';
            }

          }, 31.25);

          let animSwitchLast = setTimeout(function() {
            toggleClass(lastProduct, 'container-shop__last-product');
            toggleClass(lastProduct, 'container-shop__precedent-product');
          }, 125);

        }());
    }
  }
}());

function toggleClass(target, whichClass) {
  target.classList.toggle(whichClass);
};
