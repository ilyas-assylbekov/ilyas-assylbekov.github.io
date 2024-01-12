document.addEventListener('DOMContentLoaded', function () {
    const showSocials = document.getElementById('show-socials');
    const socialsMenu = document.getElementById('socials-menu');
  
    showSocials.addEventListener('click', function () {
      socialsMenu.style.left = socialsMenu.style.left === '0px' ? '-120%' : '0px';
      showSocials.textContent = socialsMenu.style.left === '0px' ? "Hide Socials" : "Show Socials";
    });
});