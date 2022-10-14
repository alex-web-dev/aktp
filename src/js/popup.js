import { createElem } from "./helpers.js";

const $openBtns = document.querySelectorAll('.js-open-popup');
$openBtns.forEach($btn => {
  $btn.addEventListener('click', () => {
    const name = $btn.dataset.popupName;
    const $popup = document.querySelector(`.popup[data-name="${name}"`);
    if (!name || !$popup) {
      return;
    }

    $popup.classList.add('popup_show');
  });
});

const $popups = document.querySelectorAll('.popup');
$popups.forEach($popup => {
  const $closeBtn = $popup.querySelector('.popup__close');
  $closeBtn.addEventListener('click', () => {
    $popup.classList.remove('popup_show');
  });

  $popup.addEventListener('click', (e) => {
    if ($popup === e.target) {
      $popup.classList.remove('popup_show');
    }
  });
});

function createPopup($content, className = '') {
  const $closeBtn = createElem('button', 'popup__close', {
    innerHTML: '<img src="assets/img/icons/close.svg" alt="">',
  });

  const $popupContent = createElem('div', 'popup__content', {
    innerHTML: $content,
  });
  $popupContent.appendChild($closeBtn);

  const $popup = createElem('div', `popup ${className}`);
  $popup.appendChild($popupContent);

  $popup.addEventListener('click', (e) => {
    if ($popup === e.target) {
      $popup.classList.remove('popup_show');
      setTimeout(() => $popup.remove(), 1000);
    }
  });

  $closeBtn.addEventListener('click', () => {
    $popup.classList.remove('popup_show');
    setTimeout(() => $popup.remove(), 1000);
  }, { once: true });

  return $popup;
}

export function createSuccessPopup(className) {
  const $popup = createPopup(`
    <img class="popup__icon" src="assets/img/icons/success.svg" alt="">
    <div class="popup__text">
      Спасибо Ваша заявка принята.
      Мы свяжемся с Вами в ближайшее время.
    </div>
  `);

  return $popup;
}

export function createErrorPopup(className) {
  const $popup = createPopup(`
    <img class="popup__icon" src="assets/img/icons/error.svg" alt="">
    <div class="popup__text">
      Произошла ошибка. Проверьте правильность введённых данных.
    </div>
  `);

  return $popup;
}

export default {
  createSuccess: createSuccessPopup,
  createError: createErrorPopup
};