import popup from "./popup.js";

const $forms = document.querySelectorAll('.form');
$forms.forEach($form => {
  $form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isError = false;
    const $inputs = $form.querySelectorAll('.form__input');
    $inputs.forEach($input => {
      if (!validateField($input)) {
        isError = true;
      }
    });

    let $popup;
    if (!isError) {
      $popup = popup.createSuccess();
      clearFields($inputs);
      
      const $formPopup = document.querySelector('.popup[data-name="callback"]');
      if ($formPopup) {
        $formPopup.classList.remove('popup_show');
      }
    } else {
      $popup = popup.createError();
    }

    document.body.appendChild($popup);
    setTimeout(() => $popup.classList.add('popup_show'), 100);
  });
});

function validateField($input) {
  if ($input.value === '') {
    return false;
  }

  return true;
}

function clearFields($inputs) {
  $inputs.forEach($input => $input.value = '');
}