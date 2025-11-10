let toggle = document.getElementById("toggle");
let toggleCategories = document.getElementById("toggle-categories");

categoriesData.map((el) => {
    toggleCategories.innerHTML += `
        <a href="../pages/category.html?categoryName=${el.name}" class="flex items-center gap-[5px]">
          <img class="w-[50px] h-[50px] rounded-[50%]" src=${el.imageUrl} alt="">
          <h1 class="text-[24px] font-bold text-white">${el.name}</h1>
        </a>
    `;
});

toggle.addEventListener("click", function () {
    toggleCategories.classList.toggle("translate-y-[100px]");
});
