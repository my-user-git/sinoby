document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.header-content__burger').forEach(function (clickBurger) {
    clickBurger.addEventListener('click', function (event) {
      let el = this;
      el.classList.add('header-content__burger-active');
      document.querySelectorAll('.header-content__nav').forEach(item => {
        if (item != el) {
          item.classList.remove('header-content__nav-active');
        }
      })
      document.querySelectorAll('.header-content__burger').forEach(item => {
        if (item != el) {
          item.classList.remove('header-content__burger-active');
        }
      })
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.header-content__nav').forEach(function (clickBurgerContent) {
        clickBurgerContent.classList.remove('header-content__nav-active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('header-content__nav-active');
    })
  })

  document.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.header-content__burger') && !target.closest('.header-content__nav-active')) {
      document.querySelectorAll('.header-content__nav').forEach((event) => {
        event.classList.remove('header-content__nav-active');
      })
    }
  })
})