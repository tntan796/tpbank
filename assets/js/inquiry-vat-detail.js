document.addEventListener('DOMContentLoaded', (event) => {
    const inquiryDateRange = document.getElementsByClassName('inquiry-date-range-wrapper')[0];
    inquiryDateRange.addEventListener('click', function() {
        document.getElementsByClassName('select-option-date')[0].classList.add('show');
    })
});

document.addEventListener('click', e => {
    if(!e.target.classList.contains('open-options-btn')) {
        document.getElementsByClassName('select-option-date')[0].classList.remove('show');
    }
  });