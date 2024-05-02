import API from "./API.js";

document.addEventListener("DOMContentLoaded", function () {
  let imgTags = document.getElementById("gallery");
  let buttons = document.querySelectorAll(".btn");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let slt_category = this.name;
      let filteredItems = API.filter(item => item.category.includes(slt_category));
      displayImages(filteredItems);
    });
  });

  // Initially, display all images
  displayImages(API);
});

function displayImages(items) {
  let imgTags = document.getElementById("gallery");
  let itemHTML = "";

  for (let item of items) {
    itemHTML +=
      '<div><img class="img" src="' +
      item.link +
      '" alt="Loading..."></div>';
  }

  imgTags.innerHTML = itemHTML;
}
