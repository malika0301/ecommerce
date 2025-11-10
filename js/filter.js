let filterCards = document.querySelector(".cards");
let like = JSON.parse(localStorage.getItem("likes") || "[]");
let cart = JSON.parse(localStorage.getItem("carts") || "[]");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let filteredProductsData = products;

function filterProducts(content, data) {
    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML += `
    <div
          class="dis-card relative bg-white shadow-lg shadow-[orangered] p-[20px] rounded-[5px] max-w-[400px] w-full"
        >
          ${like.find((item) => item.id === el.id)
                ? `
          <img
            onClick="removeToLike(${el.id})"
            class="w-[40px] h-[40px] cursor-pointer p-[3px] bg-[gray] rounded-[5px] absolute top-[20px] right-[20px]"
            src="../assets/images/like/minus-like.svg"
            alt=""
          />
          `
                : `
          <img
            onClick="addToLike(${el.id})"
            class="w-[40px] h-[40px] cursor-pointer p-[3px] bg-[gray] rounded-[5px] absolute top-[20px] right-[20px]"
            src="../assets/images/like/plus-like.svg"
            alt=""
          />
          `
            }
          <a href="../pages/single.html?id=${el.id}">
            <img
              src="${el.images[2]}"
              class="bg-[red] w-full h-[200px] object-cover"
              alt=""
            />
          </a>
          <div class="flex justify-between py-[5px]">
            <h2 class="text-[20px] font-bold">
              $${el.price - (el.price * el.discount) / 100}
            </h2>
            <h2 class="text-[20px] font-bold text-[gray] line-through">
              $${el.price}
            </h2>
          </div>
          ${cart.find((item) => item.id === el.id)
                ? `
          <div class="w-full grid grid-cols-3">
            <button
              onClick="decrease(${el.id})"
              class="bg-[red] flex p-[15px] rounded-[5px] items-center justify-center text-[18px] font-bold text-white"
            >
              -
            </button>
            <span
              class="bg-white flex p-[15px] items-center justify-center text-[18px] font-bold"
              >${cart.find((item) => item.id === el.id).numbers}</span
            >
            <button
              onClick="increase(${el.id})"
              class="bg-[green] flex p-[15px] rounded-[5px] items-center justify-center text-[18px] font-bold text-white"
            >
              +
            </button>
          </div>
          `
                : `
          <button
            onClick="addToCart(${el.id})"
            class="w-full p-[15px] bg-[orangered] text-[18px] font-bold text-white cursor-pointer rounded-[5px]"
          >
            Korzinaga qoshish</button
          >`
            }
        </div>
    `;
    });
}
filterProducts(filterCards, products);

input1.addEventListener("input", function (e) {
    let price = e.target.value;
    filteredProductsData = products.filter(
        (el) => el.price - (el.price * el.discount) / 100 > price
    );
    filterProducts(filterCards, filteredProductsData);
});

input2.addEventListener("input", function (e) {
    let price = e.target.value;
    console.log(filteredProductsData);
    let filteredProductsData2;
    if (price === "") {
        filteredProductsData2 = products;
    } else {
        filteredProductsData2 = filteredProductsData.filter(
            (el) => el.price < price
        );
    }

    filterProducts(filterCards, filteredProductsData2);
});
