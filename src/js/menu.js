window.addEventListener('load', () => {
  const $menu = document.querySelector('.menu');
  if ($menu) {
    const $menuToggle = $menu.querySelector('.menu__toggle');
    $menuToggle.addEventListener('click', () => {
      $menu.classList.toggle('menu_active');
      document.body.classList.toggle('body-lock');
    });

    $menu.addEventListener('click', e => {
      if ($menu === e.target || e.target.classList.contains('menu__link')) {
        $menu.classList.remove('menu_active');
        document.body.classList.remove('body-lock');  
      }
    });
  }
});