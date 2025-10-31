let search = document.getElementById("input")
let searchCards = document.getElementById("search-cards")


input.addEventListener("input", function (e) {
    let searchValue = e.target.value;

    if(searchValue){
        searchCards.classList.remove("hidden");
    }else{
        searchCards.classList.add("hidden");
    }

    let searchedProducts = products.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()));
    
    searchCards.innerHTML = "";

    searchedProducts.length > 0 ?
    searchedProducts.map((el) => {
        searchCards.innerHTML += `
        <div class="flex gap-[20px] border-[2px] border-[green] rounded-[5px] p-[10px]">
                                <img width="70px" height="70px" 
                                src=${el.images[0]} 
                                alt=""
                                />
                                <div class="flex flex-col justify-between">
                                    <h3>${el.name}</h3>
                                    <p>${el.description}</p>
                                </div>
                            </div>`;
    }) : searchCards.innerHTML = `<h4>Bunday mahsulot mavjud emas!</h4>`

});