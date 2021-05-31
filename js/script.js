var elem = document.getElementById("graph");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* -----------------------------------
           dark-mode
    ----------------------------------- */
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const logoDark = document.querySelector('.logo-dark');
const logoWhite = document.querySelector('.logo-white');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    document.body.classList.toggle("dark");
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    document.body.classList.remove('dark');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

/* -----------------------------------
           Stagger Animation Home
    ----------------------------------- */
if ($('.card').length > 0) {
  gsap.from(".card", {
    duration: 2,
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
  });
}

$(document).ready(function() {
  setTimeout(function() {
    if ($('foreignObject').length > 0) {
      gsap.from("foreignObject", {
        duration: 2,
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "elastic",
        force3D: true
      });
    }
  },
    500);
});