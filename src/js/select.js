import Choices from "choices.js";

const $selects = document.querySelectorAll('.select__field');
$selects.forEach($select => {
  new Choices($select, {
    searchEnabled: false,
    paste: true,
    itemSelectText: '',
    placeholder: true,
    position: 'select-one',
    noResultsText: 'Не найдено',
  });
});

