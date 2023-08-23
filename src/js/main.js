import "./slider.js";
import modal from "./modules/modals.js";
import tabs from "./modules/tabs.js";
import forms from "./modules/forms.js";
import changeModalState from "./modules/changeModalState.js";

let modalState = {};
changeModalState(modalState);

modal();

tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block");

forms(modalState);
