const images = () => {
  const imgPopup = document.createElement("div"),
    workSection = document.querySelector(".works"),
    bigImg = document.createElement("img");

  bigImg.style.width = "600px";
  bigImg.style.height = "600px";

  imgPopup.appendChild(bigImg);
  imgPopup.classList.add("popup");
  imgPopup.style.display = "flex";
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";

  workSection.appendChild(imgPopup);

  workSection.addEventListener("click", e => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", path);
    }

    if (target.classList.contains("popup")) {
      imgPopup.style.display = "none";
    }
  });
};

export default images;
