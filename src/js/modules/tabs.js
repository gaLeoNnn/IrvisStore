const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "block"
) => {
  const header = document.querySelector(headerSelector),
    tabs = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideContentTabs() {
    content.forEach((item) => {
      item.style.display = "none";
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  header.addEventListener("click", (e) => {
    if (
      e.target.classList.contains(tabSelector.replace(/\./, "")) ||
      e.target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tabs.forEach((item, index) => {
        if (item === e.target || e.target.parentNode === item) {
          hideContentTabs();
          showContentTabs(index);
        }
      });
    }
  });

  function showContentTabs(index) {
    content[index].style.display = display;
    tabs[index].classList.add(activeClass);
  }

  hideContentTabs();
  showContentTabs(0);
};

export default tabs;
