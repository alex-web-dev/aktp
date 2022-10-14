const $accordions = document.querySelectorAll('.accordion');
$accordions.forEach($accordion => {
  const $button = $accordion.querySelector('.accordion__button');
  const $content = $accordion.querySelector('.accordion__content');

  $button.addEventListener('click', () => {
    if (!$accordion.classList.contains('accordion_active')) {
      $button.classList.add('accordion__button_active');
      $accordion.classList.add('accordion_activating');
      $content.style.height = `${$content.scrollHeight}px`;
    } else {
      $button.classList.remove('accordion__button_active');
      $content.style.height = `${$content.scrollHeight}px`;
      $accordion.classList.add('accordion_activating');
      setTimeout(() => $content.style.height = '0px');
    }
  });

  $content.addEventListener('transitionend', () => {
    $accordion.classList.remove('accordion_activating');

    if (!$accordion.classList.contains('accordion_active')) {
      $content.setAttribute('style', '');
      $accordion.classList.add('accordion_active');
    } else {
      $accordion.classList.remove('accordion_active');
    }
  });
});