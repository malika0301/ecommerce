let cards = document.getElementById("cards")
let newCards = document.getElementById("new")
let vses = document.getElementById("vse")
let loading = document.getElementById("loading")
let aksiyaProducts = products.filter((el) => el.discount > 0)
let cart = JSON.parse(localStorage.getItem("carts") || "[]");
let like = JSON.parse(localStorage.getItem("likes") || "[]");
let likeBages = document.getElementById("like-bages")
let badge = document.getElementById("badge")
localStorage.setItem("carts", JSON.stringify(cart));
localStorage.setItem("likes", JSON.stringify(like));
likeBages.textContent = like.length
let aksiyaLastFourProducts = aksiyaProducts.slice(aksiyaProducts.length - 4, aksiyaProducts.length)
let newFourProducts = products.slice(products.length - 4, products.length)
let vseFourProducts = products.slice(products.length - 8, products.length - 4);

function showProducts(content, data) {
    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML +=
            `<div class="w-full h-auto bg-white p-5 rounded-lg shadow hover:shadow-gray-700 transition duration-200">
               <div class="relative">
                <img src="${el.images[0]}" alt="Товар" class="rounded-md mb-3 h-[200px] w-full object-cover">
               <div class="absolute bottom-2 left-2 bg-red-500 text-white text-[clamp(12px,1.2vw,16px)] px-3 py-1 rounded">-${el.discount}%</div>
               ${
        like.find((item) => item.id === el.id) ? `
        <img onClick="addToLike(${el.id})"
               class="w-[30px] cursor-pointer h-[30px] p-[3px] bg-[red] rounded-[5px] absolute top-[5px] right-[5px]" src="./images/like.svg" alt="">
                ` : `<img 
               onClick="addToLike(${el.id})"
               class="w-[30px] cursor-pointer h-[30px] p-[3px] bg-[gray] rounded-[5px] absolute top-[5px] right-[5px]" src="./images/like.svg" alt="">
                `
               }
               
             </div>
                <div class="flex justify-between mt-10 mb-5">
                <div class="flex items-center justify-between gap-15">
                    <div>
                        <p class="flex flex-cols text-gray-600 text-[clamp(16px.3vw,20px)] font-bold">Обычная </p>
                        <p class="flex flex-cols text-black-500 text-[clamp(16px.3vw,20px)] font-bold">${el.price}₽</p>
                    </div>
                    <div>
                        <p class="text-gray-600 text-[clamp(16px.3vw,20px)] font-bold">С картой</p>
                        <p class="text-black-500 text-[clamp(16px.3vw,20px)] font-bold">${el.price - el.price * el.discount / 100}₽</p>
                    </div>
                    
                </div>
            </div>
                <p class="mt-2 font-medium mb-5 line-clamp-2">${el.description}</p>
                ${el.rating === 5 ? `
                    <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    </div>
                    ` : el.rating === 4.5 ? `
                    <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star yarm.svg" alt="">
                    </div>`
                : el.rating === 4 ? `
                <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                 </div>`
                    : el.rating === 3.5 ? `
                 <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star yarm.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                 </div>`
                        : el.rating === 3 ? `
                <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                 </div>`
                            : el.rating === 2.5 ? `
                <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src=" src="./images/star yarm.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                 </div>`
                                : el.rating === 2 ? `
                 <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    </div>`
                                    : el.rating === 1.5 ? `
                    <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star yarm.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    </div>`
                                        : el.rating === 1 ? `
                    <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    </div>` : ""}

        ${cart.find((item) => item.id === el.id) ? `
         <div class="w-full grid grid-cols-3 gap-[10px]">
          <button 
          onClick="decrease(${el.id})" class="bg-[green] p-[10px] rounded-[5px] flex items-center justify-center text-[18px] font-bold text-white">-</button>
          <span class="bg-white p-[10px] flex items-center justify-center text-[18px] font-bold">${cart.find((item) => item.id === el.id).numbers}</span>
          <button
          onClick ="increase(${el.id})" class="bg-[green] p-[10px] rounded-[5px] flex items-center justify-center text-[18px] font-bold text-white">+</button>
        </div>`
                : `<button onClick="addToCart(${el.id})" class=" border border-green-500bg-transparent text-green-600 w-full mt-3 py-2 rounded hover:text-white hover:bg-orange-600 transition duration-200">В корзину</button>
                </div> `}
                </div> `;

    });
}
function showProduct(content, data) {
    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML +=
            `<div class="w-full h-auto bg-white p-5 rounded-lg shadow hover:shadow-gray-700 transition duration-200">
            <div class="relative">
               <img src="${el.images[0]}" alt="Товар" class="rounded-md mb-3 h-[200px] w-full object-cover">
                              <img 
                              onClick="addToLike(${el.id})"
                              class="w-[30px] cursor-pointer h-[30px] p-[3px] bg-[gray] rounded-[5px] absolute top-[5px] right-[5px]" src="./images/like.svg" alt="">
            </div>
                <div class="flex justify-between mt-10">
                        <p class="text-black-500 text-[clamp(16px.3vw,20px)] font-bold" >Цена: ${el.price}₽</p>
                    
                </div> 
                <p class="mt-2 font-medium mb-5 line-clamp-2">${el.description}</p>
                 ${el.rating === 5 ? `
                    <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    </div>
                    ` : el.rating === 4.5 ? `
                    <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star yarm.svg" alt="">
                    </div>`
                : el.rating === 4 ? `
                <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                 </div>`
                    : el.rating === 3.5 ? `
                 <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star yarm.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                 </div>`
                        : el.rating === 3 ? `
                <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                 </div>`
                            : el.rating === 2.5 ? `
                <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src=" src="./images/star yarm.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                 </div>`
                                : el.rating === 2 ? `
                 <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    </div>`
                                    : el.rating === 1.5 ? `
                    <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star yarm.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    </div>`
                                        : el.rating === 1 ? `
                    <div class="flex justify-between w-27 h-5 mb-5">
                    <img class="h-5 w-5" src="./images/star.svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    <img class="h-5 w-5" src="./images/star (1).svg" alt="">
                    </div>`: ""}
                       ${cart.find((item) => item.id === el.id) ? `
         <div class="w-full grid grid-cols-3 gap-[10px]">
          <button 
          onClick="decrease(${el.id})" class="bg-[green] p-[10px] rounded-[5px] flex items-center justify-center text-[18px] font-bold text-white">-</button>
          <span class="bg-white p-[10px] flex items-center justify-center text-[18px] font-bold">${cart.find((item) => item.id === el.id).numbers}</span>
          <button
          onClick ="increase(${el.id})" class="bg-[green] p-[10px] rounded-[5px] flex items-center justify-center text-[18px] font-bold text-white">+</button>
        </div>`
                : `<button onClick="addToCart(${el.id})" class=" border border-green-500bg-transparent text-green-600 w-full mt-3 py-2 rounded hover:text-white hover:bg-orange-600 transition duration-200">В корзину</button>
                </div> `}
                </div> `;

    });
};

showProducts(cards, aksiyaLastFourProducts);
showProduct(newCards, newFourProducts);
showProduct(vses, vseFourProducts);
badge.textContent = cart.length
window.addEventListener("load", function () {
    loading.classList.add("hidden")
});


function addToCart(id) {
    let item = products.find((el) => el.id === id)
    item.numbers = 1
    cart.push(item);
    badge.textContent = cart.length
    localStorage.setItem("carts", JSON.stringify(cart));
    showProducts(cards, aksiyaLastFourProducts);
    showProduct(newCards, newFourProducts);
    showProduct(vses, vseFourProducts);
}
function increase(id) {
    cart = cart.map((item) => {
        if (item.id === id) {
            item.numbers += 1
        }
        return item
    });
    localStorage.setItem("carts", JSON.stringify(cart));
    showProducts(cards, aksiyaLastFourProducts);
    showProduct(newCards, newFourProducts);
    showProduct(vses, vseFourProducts);
}
function decrease(id) {
    let item = cart.find((el) => el.id === id)
    cart = cart.map((item) => {
        if (item.id === id) {
            item.numbers -= 1
        }
        return item
    });

    if (item.numbers === 0) {
        cart = cart.filter((el) => el.id !== id);
    }

    localStorage.setItem("carts", JSON.stringify(cart));
    showProducts(cards, aksiyaLastFourProducts);
    showProduct(newCards, newFourProducts);
    showProduct(vses, vseFourProducts);
    badge.textContent = cart.length
}
function addToLike(id) {
    let likeItem = products.find((el) => el.id === id);
    like.push(likeItem);
    likeBages.textContent = like.length
    localStorage.setItem("likes", JSON.stringify(like));
}

