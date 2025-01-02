document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".list-item");

  items.forEach((item) => {
    const title = item.querySelector(".list-tit");
    title.addEventListener("click", () => {
      const content = item.querySelector(".list-content");
      const isOpen = item.classList.contains("open");

      if (isOpen) {
        content.style.height = "0";
        item.classList.remove("open");
      } else {
        items.forEach((i) => {
          i.classList.remove("open");
          i.querySelector(".list-content").style.height = "0";
        });
        content.style.height = content.scrollHeight + "px";
        item.classList.add("open");
      }
    });
  });
});
