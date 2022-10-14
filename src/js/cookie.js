const $cookie = document.querySelector('.cookie');
if ($cookie) {
  const isAccept = JSON.parse(localStorage.getItem('cookie'));
  if (!isAccept) {
    setTimeout(() => $cookie.classList.add('cookie_show'), 1000);
  }
  const $acceptBtn = $cookie.querySelector('.cookie__btn');
  const $closeBtn = $cookie.querySelector('.cookie__close');

  $acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookie', JSON.stringify(true));
    $cookie.classList.remove('cookie_show');
  });

  $closeBtn.addEventListener('click', () => {
    $cookie.classList.remove('cookie_show');
  });
}