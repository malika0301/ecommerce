let path = new URLSearchParams(location.search);
let id = path.get("id");
let singleCards = document.getElementById("single-cards");

let carts = JSON.parse(localStorage.getItem("carts") || "[]");

let item = products.filter((el) => el.id == id);
let newCards = document.getElementById("new");
let newFourProducts = products.slice(products.length - 4, products.length);

function showSingleProducts(){
    singleCards.innerHTML = "";
    item.map((el) => {
        singleCards.innerHTML += `
    <div>
                <h1 class="font-bold text-[50px]">${el.description}</h1>
    </div>
    <div class="flex items-center w-[100px] gap-[15px] p-[10px]">
            <img class="w-[50px] object-cover" src="../images/sp3.png" alt="">
            <img class="object-cover" src="../images/sp2.png" alt="">
            <img src="../images/sp1.png" alt="">
        </div>
    <div class="flex gap-[20px]">
                <div class="w-[50%] flex gap-[5px]">
                    <div id="side-images" class="flex flex-col gap-[5px]">
                        <img class="w-[90px] h-[90px]" src=${el.images[0]}
                        <img class="w-[90px] h-[90px]" src=${el.images[1]}
                        <img class="w-[90px] h-[90px]" src=${el.images[2]}
                        <img class="w-[90px] h-[90px]" src=${el.images[3]}
                    </div>
                    <img id="main-img" class="max-w-[600px] w-full h-[375px] object-cover" src=${el.images[0]}
                        alt="">
                </div>
                <div>
                    <div class="flex justify-between mt-10 mb-5">
                   <div class="flex items-center justify-between gap-15">
                    <div>
                        <p class="flex flex-cols text-gray-600 text-[clamp(16px , 3vw,20px)] font-bold">Обычная </p>
                        <p class="flex flex-cols text-black-500 text-[clamp(16px , 3vw,20px)] font-bold">${el.price}₽</p>
                    </div>
                    <div>
                        <p class="text-gray-600 text-[clamp(16px,3vw,20px)] font-bold">С картой</p>
                        <p class="text-black-500 text-[clamp(16px,3vw,20px)] font-bold">${el.price - el.price * el.discount / 100}₽</p>
                    </div>
                    
                </div>
                ${carts.find((cart) => cart.id === el.id) ? `
                    <div class="w-full grid grid-cols-3 pt-[10px] gap-[10px]">
          <button
          onClick="decrease(${el.id})" class="bg-[green] p-[10px] rounded-[5px] flex items-center justify-center text-[18px] font-bold text-white">-</button>
          <span class="bg-white p-[10px] flex items-center justify-center text-[18px] font-bold">${cart.find((item) => item.id === el.id).numbers}</span>
          <button
          onClick ="increase(${el.id})" class="bg-[green] p-[10px] rounded-[5px] flex items-center justify-center text-[18px] font-bold text-white">+</button>
        </div>`
                : `<button onClick="addToCart(${el.id})" class=" border border-green-500 bg-transparent text-green-600 w-full mt-3 py-2 rounded hover:text-white hover:bg-orange-600 transition duration-200">В корзину</button>
                </div>`
            }
                    <div>
                        <img class=" p-[10px] object-cover" src="../images/sp4.svg" alt="">
                    </div>
                </div>
            </div>`;
    });
}

let sideImages = document.getElementById("side-images");
let mainImg = document.getElementById("main-img");
sideImages.addEventListener("click" , function(e){
    if(e.target.src){
        mainImg.src = e.target.src;
    }
});
function addToCart(id) {
    let item = products.find((el) => el.id === id)
    item.numbers = 1
    cart.push(item);
    badge.textContent = cart.length
    localStorage.setItem("carts", JSON.stringify(cart));
    showSingleProducts();
}
function increase(id) {
    cart = cart.map((item) => {
        if (item.id === id) {
            item.numbers += 1
        }
        return item
    });
    localStorage.setItem("carts", JSON.stringify(cart));
    showSingleProducts();
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
    badge.textContent = cart.length
    showSingleProducts();
}
function showProduct(content, data) {
    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML +=
            `<div class="w-full h-auto bg-white p-5 rounded-lg shadow hover:shadow-gray-700 transition duration-200">
            <div class="relative">
               <a href="../pages/single-page.html?id=${el.id}"><img src="${el.images[0]}" alt="Товар" class="rounded-md mb-3 h-[200px] w-full object-cover"></a>
               ${like.find((item) => item.id === el.id)
                ? `<img onClick="removeToLike(${el.id})" class="w-[30px] cursor-pointer h-[30px] p-[3px] rounded-[5px] absolute top-[5px] right-[5px]" src="./images/liker.svg" alt="">`
                : `<img onClick="addToLike(${el.id})" class="w-[30px] cursor-pointer h-[30px] p-[3px] bg-[gray]/80 rounded-[5px] absolute top-[5px] right-[5px]" src="./images/like.svg" alt="">`
            }               
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
                    <img class="h-5 w-5" src="./images/star yarm.svg" alt="">
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
                : `<button onClick="addToCart(${el.id})" class=" border border-green-500 bg-transparent text-green-600 w-full mt-3 py-2 rounded hover:text-white hover:bg-orange-600 transition duration-200">В корзину</button>
                </div> `}
                </div> `;

    });
};

showProduct(newCards, newFourProducts);