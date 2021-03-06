/*jshint esversion: 6 */

//* nav Bar

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click',()=>{
  // toggle nav
  nav.classList.toggle('nav-active');

  //animate navLinks
  navLinks.forEach((link) => {
  if(link.style.animation) {
    link.style.animation = '';
    }
    else{
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
      }
      });

      // burger animation
      burger.classList.toggle('toggle');
    });
  };

navSlide();
