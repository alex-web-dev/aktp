const $accordions = document.querySelectorAll('.accordion');
$accordions.forEach($accordion => {
  const $button = $accordion.querySelector('.accordion__button');
  const $content = $accordion.querySelector('.accordion__content');

  $button.addEventListener('click', () => {
    $accordion.classList.add('accordion_activating');

    if (!$accordion.classList.contains('accordion_active')) {
      $content.style.height = `${$content.scrollHeight}px`;
      $button.classList.add('accordion__button_active');
    } else {
      $content.style.height = '0px';
      $button.classList.remove('accordion__button_active');
    }
  });

  $content.addEventListener('transitionend', () => {
    $accordion.classList.remove('accordion_activating');

    if (!$accordion.classList.contains('accordion_active')) {
      $accordion.classList.add('accordion_active');
    } else {
      $accordion.classList.remove('accordion_active');
    }
  });
});