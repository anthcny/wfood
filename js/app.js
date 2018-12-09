const items = {
    pizza: [
        {
            image: "pizza-1.jpg",
            name: "Итальянская",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 410
        },
        {
            image: "pizza-2.jpg",
            name: "Черная",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 390
        },
        {
            image: "pizza-3.jpg",
            name: "BBQ",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 420
        },
        {
            image: "pizza-1.jpg",
            name: "Веганская",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 310
        },
        {
            image: "pizza-2.jpg",
            name: "Ассорти",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 440
        },
        {
            image: "pizza-3.jpg",
            name: "Мясная",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 550
        }
    ],

    rolls: [
        {
            image: "burger-1.jpg",
            name: "Ролл1",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 490
        },
        {
            image: "burger-2.jpg",
            name: "Ролл2",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 440
        },
    ],

    drinks: [
        {
            image: "drink-1.jpg",
            name: "Компот",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 130
        },
        {
            image: "drink-2.jpg",
            name: "Содовая",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 150
        },
    ]
}

function generateId(items){
    let id = 0;
    Object.keys(items).forEach(key => {
        let arr = items[key];
        items[key] = {};
        for(let i=0; i< arr.length; i++){
            items[key][id++] = arr[i];
        }
    });
}

generateId(items);



(function($) {

function contentLoad(){
    let html = '';
    Object.keys(items.pizza).forEach(key => {
        html += `
        <div class="col-md-3 text-center">
            <div class="menu-wrap">
                <a href="#" class="menu-img img mb-4" style="background-image: url(images/${items.pizza[key].image});"></a>
                <div class="text">
                    <h3><a href="#">${items.pizza[key].name}</a></h3>
                    <p>${items.pizza[key].description}</p>
                    <p class="price" style="display: flex">
                        <span style="display: flex; align-items: center; margin: 0 auto;">
                            <span style="margin-right: 0.3em">${items.pizza[key].price}</span>
                            <span class="icon-rub"></span>
                        </span>
                    </p>
                    <p><span data-id="${key}" class="btn btn-white btn-outline-white cartButton">В корзину</span></p>
                </div>
            </div>
        </div>
    `;
    })
    domEl = $(html);
    $('#v-pills-1 > .row').append(domEl);
}

function addHandlersToCartButton(){
    $('.cartButton').bind('click', function(){
        //console.log($(this)[0].dataset.id);
        saveItemInLocalStorage($(this)[0].dataset.id)
        updateCartSumDisplay();
    })
}

function saveItemInLocalStorage(id){
    let storage = localStorage.getItem('cart')
    if(storage){
        let cart = JSON.parse(storage);
        if(cart[id]){
            cart[id] = ++cart[id];
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        else{
            cart[id] = 1;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    else{
        let cart = {};
        cart[id] = 1;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    //console.log(localStorage.cart)
}

function updateCartSumDisplay(){
    let cart = localStorage.cart;
    if(!cart){
        return;
    }
    //console.log(cart);
    let sum = 0;
    cart = JSON.parse(cart);
    Object.keys(cart).forEach(key => {
        Object.values(items).forEach(obj => {
            if(obj[key]){
                sum += obj[key].price * cart[key];
            }
        })
    })
    if(sum <= 0){
        $('#cartSum').empty();     
        $('#iconRubNearCart').remove();
        return;
    }
    $('#cartSum').empty();
    $('#iconRubNearCart').remove();
    $('#cartSum').append(sum);
    $('#shopcart').append('<span class="icon-rub" id="iconRubNearCart"></span>');


}

contentLoad();
addHandlersToCartButton();


})(jQuery);