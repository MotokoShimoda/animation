document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".list-item");

  accordionItems.forEach((item) => {
    const title = item.querySelector(".list-tit");

    title.addEventListener("click", () => {
      const content = item.querySelector(".list-content");

      if (content.style.height === "0px" || !content.style.height) {
        content.style.height = `${content.scrollHeight}px`;
        content.style.padding = "1rem";
      } else {
        content.style.height = "0";
        content.style.padding = "0";
      }
    });
  });
});
