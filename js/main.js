let cards = document.getElementById("cards")
let newCards = document.getElementById("new")
let vses = document.getElementById("vse")
let aksiyaProducts = products.filter((el) => el.discount > 0)

let aksiyaLastFourProducts = aksiyaProducts.slice(aksiyaProducts.length - 4, aksiyaProducts.length)
let newFourProducts = products.slice(products.length - 4, products.length)
let vseFourProducts = products.slice(products.length - 8, products.length - 4)
function showProducts(content, data) {
    data.map((el) => {
        content.innerHTML +=
            `<div class="w-full h-auto bg-white p-5 rounded-lg shadow hover:shadow-gray-700 transition duration-200">
               <div class="relative">
                <img src="${el.images[0]}" alt="Товар" class="rounded-md mb-3 h-[200px] w-full object-cover">
               <div class="absolute bottom-2 left-2 bg-red-500 text-white text-[clamp(12px,1.2vw,16px)] px-3 py-1 rounded">-${el.discount}%</div>
             </div>
                <div class="flex justify-between mt-10 mb-5">
                    <div class="flex justify-between gap-5">
                        <p class="text-black-500 text-[clamp(16px.3vw,20px)] font-bold">Обычная ${el.price}₽</p>
                        <p class="text-black-500 text-[clamp(16px.3vw,20px)] font-bold">С картой ${el.price - el.price * el.discount / 100}₽</p>
                    </div>
                    
                </div>
                <p class= "text-black-500 text-[clamp(16px.3vw,20px)] font-bold mb-2">${el.discount}%</p> 
                <p class="mt-2 font-medium mb-5">${el.description}</p>
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
                    </div>`
                                            : ""}
                <button class=" border border-green-500bg-transparent text-green-600 w-full mt-3 py-2 rounded hover:text-white hover:bg-orange-600 transition duration-200">В корзину</button>
                </div> `;

    });
}
function showProduct(content, data) {
    data.map((el) => {
        content.innerHTML +=
            `<div class="w-full h-auto bg-white p-5 rounded-lg shadow hover:shadow-gray-700 transition duration-200">
            <img src="${el.images[0]}" alt="Товар" class="rounded-md mb-3 h-[200px] w-full object-cover">
                <div class="flex justify-between mt-10">
                        <p class="text-black-500 text-[clamp(16px.3vw,20px)] font-bold" >Цена: ${el.price}₽</p>
                    
                </div> 
                <p class="mt-2 font-medium mb-5">${el.description}</p>
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
                    </div>`
                                            : ""}
                <button class=" border border-green-500bg-transparent text-green-600 w-full mt-3 py-2 rounded hover:text-white hover:bg-orange-600 transition duration-200">В корзину</button>
                </div> `;

    });
}
showProducts(cards, aksiyaLastFourProducts)
showProduct(newCards, newFourProducts)
showProduct(vses, vseFourProducts)
