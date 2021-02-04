let accord;
//= document.querySelectorAll(".accordion-item");

const accordionWrapper = document.querySelector(".accordion-wrapper");
console.log(accordionWrapper);

const contentData = [
  {
    id: 1,
    title: "Title - № 1",
    content: "Content - № 1",
  },
  {
    id: 2,
    title: "Title - № 2",
    content: "Content - № 2",
  },
  {
    id: 3,
    title: "Title - № 3",
    content: "Content - № 3",
  },
  {
    id: 4,
    title: "Title - № 4",
    content: "Content - № 4",
  },
  {
    id: 5,
    title: "Title - № 5",
    content: "Content - № 5",
  },
];

const createTemplate = (item) => {
  return `
    <div class="accordion-item">
        <div class="accordion-item__title">${item.title}</div>
        <div class="accordion-item__content">${item.content}</div>
    </div>
    `;
};

const fillHtmlList = () => {
  contentData.forEach((item) => {
    accordionWrapper.innerHTML += createTemplate(item);
  });
  accord = document.querySelectorAll(".accordion-item");
};

fillHtmlList();

if (accord) {
  for (item of accord) {
    item.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        for (el of accord) {
          el.classList.remove("active");
        }
        this.classList.add("active");
      }
    });
  }
}
