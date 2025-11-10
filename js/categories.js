
let categoryCards = document.getElementById("categories-cards")
let like = JSON.parse(localStorage.getItem("likes") || "[]");
let cart = JSON.parse(localStorage.getItem("carts") || "[]");

function showCategories(content, data) {
    data.map((el) => {
        content.innerHTML += `
<a href="../pages/category.html?categoryName=${el.name}"
              class="dis-card relative bg-white shadow-lg shadow-[orangered] p-[20px] rounded-[5px] max-w-[400px] w-full"
            >
            <img class="absolute w-full h-full top-0 object-cover" src=${el.imageUrl} alt="" />
            <h1 class="absolute bottom-[20px] left-[20px] text-[20px] font-bold text-white">${el.name}</h1>
        </a>
`;
    });
}

showCategories(categoryCards, categoriesData);