/*jshint esversion: 6 */

const menuOne = document.getElementById('menu-one');
const menuTwo = document.getElementById('menu-two');
const chevronOne = menuOne.getElementsByClassName('fas fa-chevron-down');
const chevronTwo = menuTwo.getElementsByClassName('fas fa-chevron-down');

const toggleMenu = id => {
  const dropdownOne = document.getElementById('dropdown-one');
  const dropdownTwo = document.getElementById('dropdown-two');

  switch (id) {
    case 'menu-one':
      dropdownOne.classList.toggle('selected');
      menuOne.classList.toggle('open');
      chevronOne[0].classList.toggle('down');

      if (dropdownTwo.classList.contains('selected')) {
        dropdownTwo.classList.remove('selected');
        menuTwo.classList.remove('open');
        chevronTwo[0].classList.remove('down');
      }
      break;
    case 'menu-two':
      dropdownTwo.classList.toggle('selected');
      menuTwo.classList.toggle('open');
      chevronTwo[0].classList.toggle('down');

      if (dropdownOne.classList.contains('selected')) {
        dropdownOne.classList.remove('selected');
        menuOne.classList.remove('open');
        chevronOne[0].classList.remove('down');
      }
      break;
    default:
  }
};

// window.onclick = event => {
//   if (
//     !event.target.matches('.menu-select') &&
//     !event.target.parentElement.matches('.menu-select')
//   ) {
//     menuOne.classList.remove('open');
//     menuTwo.classList.remove('open');
//     chevronOne[0].classList.remove('down');
//     chevronTwo[0].classList.remove('down');

//     let dropdowns = document.getElementsByClassName('menu-dropdown');
//     dropdowns = Array.from(dropdowns);
//     dropdowns.map(dropdown => {
//       if (dropdown.classList.contains('selected')) {
//         dropdown.classList.remove('selected');
//       }
//     });
//   }
// };

const closeMenu = event => {
  if (
    (!event.target.matches('.menu-select') &&
      !event.target.parentElement.matches('.menu-select')) ||
    event.keyCode === 27
  ) {
    menuOne.classList.remove('open');
    menuTwo.classList.remove('open');
    chevronOne[0].classList.remove('down');
    chevronTwo[0].classList.remove('down');

    let dropdowns = document.getElementsByClassName('menu-dropdown');
    dropdowns = Array.from(dropdowns);
    dropdowns.map(dropdown => {
      if (dropdown.classList.contains('selected')) {
        dropdown.classList.remove('selected');
      }
    });
  }
};

window.onclick = closeMenu;
document.onkeydown = () => {
  if (event.keyCode === 27) {
    closeMenu(event);
  }
};
