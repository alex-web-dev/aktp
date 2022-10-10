window.addEventListener('load', () => {
  const $menu = document.querySelector('.menu');
  if ($menu) {
    const $menuToggle = $menu.querySelector('.menu__toggle');
    $menuToggle.addEventListener('click', () => {
      $menu.classList.toggle('menu_active');
      document.body.classList.toggle('body-lock');
    });

    $menu.addEventListener('click', e => {
      if (e.target.classList.contains('menu__link') && e.target.href.includes('#')) {
        closeMenu($menu);
      }
    });
  }
});

function closeMenu($menu) {
  if ($menu.classList.contains('menu_active')) {
    $menu.classList.remove('menu_active');
    document.body.classList.remove('body-lock');  
  }
}