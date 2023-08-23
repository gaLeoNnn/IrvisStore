import checkNumInputs from "./checkNumInputs";

const changeModalState = state => {
  const windowForm = document.querySelectorAll(".balcon_icons_img");
  const windowWidth = document.querySelectorAll("#width");
  const windowHeight = document.querySelectorAll("#height");
  const windowType = document.querySelectorAll("#view_type");
  const windowProfile = document.querySelectorAll(".checkbox");
  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElements(event, elem, prop) {
    elem.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = index;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              index === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");

              elem.forEach((box, i) => {
                box.checked = false;
                if (index === i) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
        }
        console.log(state);
      });
    });
  }

  bindActionToElements("click", windowForm, "form");
  bindActionToElements("input", windowHeight, "height");
  bindActionToElements("input", windowWidth, "width");
  bindActionToElements("change", windowType, "type");
  bindActionToElements("change", windowProfile, "check");
};
export default changeModalState;
