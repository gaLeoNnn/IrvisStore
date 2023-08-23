import checkNumInputs from "./checkNumInputs";

const forms = state => {
  const form = document.querySelectorAll("form"),
    input = document.querySelectorAll("input");

  const message = {
    loading: "Загрузка",
    success: "Спасибо! Мы скоро с вами свяжемся",
    failure: "Что то пошло не так",
  };
  checkNumInputs("input[name='user_phone']");

  let postData = async (url, formData) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    return await res.text();
  };

  const clearInput = () => {
    input.forEach(item => {
      item.value = "";
    });
  };

  form.forEach(item => {
    item.addEventListener("submit", e => {
      e.preventDefault();
      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      let formData = new FormData(item);

      if (item.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
      postData("assets/server.php", formData)
        .then(res => {
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInput();
          setTimeout(() => {
            statusMessage.remove();
          }, 2000);
        });
    });
  });
};

export default forms;
