function modals() {
  function bindModal(buttonSelector, modalSelector, closeSelector) {
    const btnEngineer = document.querySelectorAll(buttonSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelectorAll(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");

    btnEngineer.forEach(item => {
      item.addEventListener("click", e => {
        if (e.target) {
          e.preventDefault();
        }
        windows.forEach(item => {
          item.style.display = "none";
        });

        modal.style.display = "block";
      });
    });

    close.forEach(item => {
      item.addEventListener("click", () => {
        modal.style.display = "none";
      });
    });

    modal.addEventListener("click", e => {
      if (
        e.target.classList.contains("popup_engineer") ||
        e.target.classList.contains("popup") ||
        e.target.classList.contains("popup_calc")
      )
        modal.style.display = "none";
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
    }, time);
  }
  // showModalByTime(".popup", 60000);
  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_close");
  bindModal(".phone_link", ".popup", ".popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close");
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close");
}

export default modals;
