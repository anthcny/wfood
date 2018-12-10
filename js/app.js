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
    let domEl = $(html);
    $('#v-pills-1 > .row').append(domEl);
}

function displayCartItems(){
    let cart = localStorage.getItem('cart');
    if(!cart){
        return;
    }
    cart = JSON.parse(cart);
    let html = '';
    for(const id in cart){
        const item = searchItemById(id);
        html += `<div class="pricing-entry d-flex ftco-animate fadeInUp ftco-animated" id="${id}">
                    <div class="img" style="background-image: url(images/${item.image});"></div>
                    <div class="desc pl-3">
                        <div class="d-flex text align-items-center">
                            <h3><span>${item.name + " x" + cart[id]}</span></h3>
                            <span class="price containerFlexAlignCenter pricePadding">
                                    <span class="containerFlexAlignCenter">
                                            <span class="priceNumber goldColor" price="" data-id="${id}">${item.price * cart[id]}</span>
                                            <span class="icon-rub goldColor"></span>
                                    </span>
                                    <span class="icon-remove removeIcon" data-id="${id}"></span>
                            </span>
                            
                        </div>
                        <div class="containerFlexAlignCenter">
                                <p>${item.description.slice(0, 110) + "..."}
                                </p>
                                <span class="price containerFlexAlignCenter countNav">
                                        <span class="icon-minus plusMinusIcon" data-id="${id}"></span>
                                        <span class="countItems" number="" data-id="${id}">${cart[id]}</span>
                                        <span class="icon-plus plusMinusIcon" data-id="${id}"></span>
                                </span>
                        </div>
                    </div>
                </div>
        `
    }
    let domEl = $(html);
    $('#cartItemsList').append(domEl);
}

function addHandlersToItems(){
    $('.icon-remove').bind('click', function(){
        removeItemById($(this)[0].dataset.id);
        updateCartSumDisplay(getCartSum(), true);
    });
    $('.icon-plus').bind('click', function(){
        countIncrement($(this)[0].dataset.id);
        updateCartSumDisplay(getCartSum(), true);
        updateItemCountDisplay($(this)[0].dataset.id);
        updateItemSumDisplay($(this)[0].dataset.id);
    });
    $('.icon-minus').bind('click', function(){
        countDicrement($(this)[0].dataset.id);
        updateCartSumDisplay(getCartSum(), true);
        updateItemCountDisplay($(this)[0].dataset.id);
        updateItemSumDisplay($(this)[0].dataset.id);
    });
}

function removeItemById(id){
    let cart = localStorage.cart;
    $(`#${id}`).remove();
    if(!cart) return;
    cart = JSON.parse(cart);
    delete cart[id];
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateItemCountDisplay(id){
    let cart = localStorage.cart;
    if(!cart) return;
    cart = JSON.parse(cart);
    let count = cart[id];
    let item = searchItemById(id);
    $(`#${id} h3 span`).empty().append(item.name + " x" + count);
    $(`span[number][data-id="${id}"]`).empty().append(count);
}

function updateItemSumDisplay(id){
    let cart = localStorage.cart;
    if(!cart) return;
    cart = JSON.parse(cart);
    let count = cart[id];
    let item = searchItemById(id);
    $(`span[price][data-id="${id}"]`).empty().append(item.price * count);
}

function countIncrement(id){
    let cart = localStorage.cart;
    if(!cart) return;
    cart = JSON.parse(cart);
    cart[id] = ++cart[id];
    localStorage.setItem('cart', JSON.stringify(cart));
}

function countDicrement(id){
    let cart = localStorage.cart;
    if(!cart) return;
    cart = JSON.parse(cart);
    cart[id] = --cart[id];
    localStorage.setItem('cart', JSON.stringify(cart));
}

function searchItemById(id){
    let values = Object.values(items);
    for(let i=0; i<values.length; i++){
        if(values[i][id])
            return values[i][id];
    }
}

function addHandlersToCartButton(){
    let clickFuncActive = false;
    let id = '';
    $('.cartButton').bind('click', function(){
        if(clickFuncActive){
            if(id === $(this)[0].dataset.id)
                    return;
        }
        id = $(this)[0].dataset.id;
        clickFuncActive = true;
        saveItemInLocalStorage($(this)[0].dataset.id)
        animateAddToCartBtn($(this), ()=>{clickFuncActive =  false});
        updateCartSumDisplay(getCartSum(), true);
    })
}

function animateAddToCartBtn(domElBtn, cb){
   domElBtn.fadeToggle(200, function(){
    domElBtn.empty();
    domElBtn.addClass('addToCartClicked');
    domElBtn.append('Добавлен');
    domElBtn.fadeToggle(200, function(){
        setTimeout(() => {
            domElBtn.fadeToggle(200, function(){
                domElBtn.removeClass('addToCartClicked');
                domElBtn.empty();
                domElBtn.append('В корзину');
                domElBtn.fadeToggle(200);
                cb();
                });
            }, 700);
        });
    });
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
}

function getCartSum(){
    let cart = localStorage.cart;
    if(!cart){
        return cart;
    }
    let sum = 0;
    cart = JSON.parse(cart);
    Object.keys(cart).forEach(key => {
        Object.values(items).forEach(obj => {
            if(obj[key]){
                sum += obj[key].price * cart[key];
            }
        })
    })
    return sum;
}

function updateCartSumDisplay(sum, animation){
    if(sum <= 0 || !sum){
        $('#cartSum').remove();     
        $('#iconRubNearCart').remove();
        return;
    }
        let cur = Number($('#cartSum').text());
        $('#cartSum').remove();     
        $('#iconRubNearCart').remove();
        $('#shopcart').append(`<span id="cartSum"></span><span class="icon-rub" id="iconRubNearCart"></span>`);
        if(animation){
            animateCart(cur, sum);
        }
        else{
            $('#cartSum').append(sum);
        }
}

function animateCart(cur, next){
    if(next >= 10000){
        $('#cartSum').css({
            'min-width': '3.2em'
        });
    }
    if(cur >=10000 && next <= 10000){
        $('#cartSum').css({
            'min-width': '2.5em'
        });
    }
    $('#cartSum')
            .prop('number', cur)
            .animateNumber(
                {
                number: next,
                },
                350
            );
}
//------------------------- menu
contentLoad();
updateCartSumDisplay(getCartSum(), false);
addHandlersToCartButton();
//------------------------- cart
displayCartItems();
addHandlersToItems();


})(jQuery);