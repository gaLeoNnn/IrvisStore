function modals() {
  function bindModal(buttonSelector, modalSelector, closeSelector) {
    const btnEngineer = document.querySelectorAll(buttonSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelectorAll(closeSelector);

    btnEngineer.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
      });
    });

    close.forEach((item) => {
      item.addEventListener("click", () => {
        console.log(close);
        modal.style.display = "none";
      });
    });

    modal.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("popup_engineer") ||
        e.target.classList.contains("popup")
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
}

export default modals;
