const items = {
    pizza: [
        {
            image: "pizza-1.jpg",
            name: "Итальянская",
            description: `Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            `,
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
        },
        {
            image: "pizza-3.jpg",
            name: "Греческая",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 550
        },
        {
            image: "pizza-3.jpg",
            name: "Тесак",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 550
        },
        {
            image: "pizza-3.jpg",
            name: "Острая",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 550
        },
        {
            image: "pizza-3.jpg",
            name: "Демон",
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
                <span class="menu-img img mb-4" style="background-image: url(images/${items.pizza[key].image});"></span>
                <div class="text">
                    <h3><span>${items.pizza[key].name}</span></h3>
                    <p class="descriptionMenu" tabindex="0">${items.pizza[key].description}</p>
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

function contentSelect(cart){
    if(!cart || cart==='{}'){
        $('[data-id="statusText"]').empty().append('Ваша корзина пуста, вы можете перейти во вкладку "Меню", чтобы наполнить ее вкусными блюдами!');
        $('#makeOrder').hide();
        $('.coast').remove();
        $('#payMethods').hide();
    }
    else{
        $('[data-id="statusText"]').empty().append('Ваша корзина полна удовольствий, осталось оформить заказ!');
        displayOrderForm();
        $('#makeOrder').show();
        $('#payMethods').show();
    }
}

function displayCartItems(){
    let cart = localStorage.getItem('cart');
    contentSelect(cart);
    if(!cart || cart==='{}') return;
    cart = JSON.parse(cart);
    let html = '';
    for(const id in cart){
        const item = searchItemById(id);
        let nameAndCount = item.name;
        nameAndCount += +cart[id] > 1 ? ' x'+ cart[id] : '';
        html += `<div class="pricing-entry d-flex ftco-animate fadeInUp ftco-animated" id="${id}">
                    <div class="img" style="background-image: url(images/${item.image});"></div>
                    <div class="desc pl-3">
                        <div class="d-flex text align-items-center">
                            <h3><span>${nameAndCount}</span></h3>
                            <span class="price containerFlexAlignCenter pricePadding justContentCenter">
                                    <span class="justContentCenter">
                                            <span class="priceNumber goldColor" price="" data-id="${id}">${item.price * cart[id]}</span>
                                            <span class="icon-rub goldColor"></span>
                                    </span>
                                    <span class="icon-remove removeIcon" data-id="${id}"></span>
                            </span>
                            
                        </div>
                        <div class="containerFlexAlignCenter">
                                <div class="description" tabindex="0">
                                    <span>${item.description}</span>
                                </div>
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

    html += `<div class="coast">
        <h3>Итого:<span class="goldColor" data-id="coast">${' '+getCartSum() + ' руб.'}</span></h3>
    </div>`

    let domEl = $(html);
    $('#cartItemsList').append(domEl);
}

function formValidation(){

    let check = true;
    if($('#userName').val()===''){
        $('#userName').css("cssText","border-bottom-color: red !important;");
        check = false;
    }else{
        $('#userName').removeAttr('style');
    }
    if($('#phone').val()===''){
        $('#phone').css("cssText","border-bottom-color: red !important;");
        check = false;
    }else{
        $('#phone').removeAttr('style');
    }
    if($('#adress').val()===''){
        $('#adress').css("cssText","border-bottom-color: red !important;");
        check = false;
    }else{
        $('#adress').removeAttr('style');
    }
    if($('#cash')[0].dataset.active === "false" && $('#emoney')[0].dataset.active === "false" ){
        $('#cash').css("cssText","border-color: red !important;");
        $('#emoney').css("cssText","border-color: red !important;");
        check = false;
    }else{
        $('#cash').removeAttr('style');
        $('#emoney').removeAttr('style');
    }
    return check;
}

function saveFormInfoLocal(){
    let info = {};
    info.name = $('#userName').val();
    info.phone = $('#phone').val();
    info.adress = $('#adress').val();
    $('#userName').val('');
    $('#phone').val('');
    $('#adress').val('');
    info = JSON.stringify(info);
    localStorage.setItem('info', info);
}

function addHandlersToOrderForm(){
    $('#order').bind('click', function(){
        if(formValidation()){
            saveFormInfoLocal();
            savePayMethodLocal();
            sendMessage(createOrderMessage());
        }
        //sendMessage();
    });
}

function displayOrderForm(){
    let info = localStorage.getItem('info');
    let html;
    if(!info || info==='{}'){
        html = `
            <div class="col-md-7 ftco-animate fadeInUp ftco-animated">
                <div class="contact-form">
                    <div class="row">
                        <div class="col-md-6">
                        <div class="form-group">
                        <input type="text" id="userName" class="form-control" placeholder="Имя">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                        <input type="text" id="phone" class="form-control" placeholder="Телефон">
                        </div>
                        </div>
                </div>
                <div class="form-group">
                    <input type="text" id="adress" class="form-control" placeholder="Адрес">
                </div>
                <div class="form-group">
                    <textarea name="" id="comment" cols="30" rows="7" class="form-control" placeholder="Комментарий"></textarea>
                </div>
                <div class="form-group row justify-content-center">
                    <button id="order"  class="btn payRadio">Заказать</button>
                </div>
                </div>
            </div>
      `
    }else{
        info = JSON.parse(info);
        html = `
            <div class="col-md-7 ftco-animate fadeInUp ftco-animated">
                <div class="contact-form">
                    <div class="row">
                        <div class="col-md-6">
                        <div class="form-group">
                        <input type="text" class="form-control" id="userName" value="${info.name ? info.name : ''}" placeholder="Имя">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                        <input type="text" id="phone" class="form-control" value="${info.phone ? info.phone : ''}" placeholder="Телефон">
                        </div>
                        </div>
                </div>
                <div class="form-group">
                    <input type="text" id="adress" class="form-control" value="${info.adress ? info.adress : ''}" placeholder="Адрес">
                </div>
                <div class="form-group">
                    <textarea name="" id="comment" cols="30" rows="7" class="form-control" placeholder="Комментарий"></textarea>
                </div>
                <div class="form-group row justify-content-center">
                    <button id="order" class="btn payRadio">ЗАКАЗАТЬ</button>
                </div>
                </form>
            </div>
                `       
    }
    let domEl = $(html);
    $('#makeOrder').empty().append(domEl);
    $('#phone').mask("+7 (999) 999 9999", {placeholder: ""});
    addHandlersToOrderForm();
}

function addHandlersToItems(){
    $('.icon-remove').bind('click', function(){
        removeItemById($(this)[0].dataset.id);
        updateCartSumDisplay(getCartSum(), true);
        updateFinallyCoast(getCartSum());
    });
    $('.icon-plus').bind('click', function(){
        countIncrement($(this)[0].dataset.id);
        updateCartSumDisplay(getCartSum(), true);
        updateItemCountDisplay($(this)[0].dataset.id);
        updateItemSumDisplay($(this)[0].dataset.id);
        updateFinallyCoast(getCartSum());
    });
    $('.icon-minus').bind('click', function(){
        countDicrement($(this)[0].dataset.id);
        updateCartSumDisplay(getCartSum(), true);
        updateItemCountDisplay($(this)[0].dataset.id);
        updateItemSumDisplay($(this)[0].dataset.id);
        updateFinallyCoast(getCartSum());
    });
}

function addHandlerPayMethodsButtons(){
    $('#cash').bind('click', function(){
        togglePayMethod($(this));
        savePayMethodLocal();
    });
    $('#emoney').bind('click', function(){
        togglePayMethod($(this));
        savePayMethodLocal();
    });
}

function togglePayMethod(button){
    $('#cash')[0].dataset.active = 'false';
    $('#emoney')[0].dataset.active = 'false';
    $('#cash').removeClass('payActive');
    $('#emoney').removeClass('payActive');
    button.addClass('payActive');
    button[0].dataset.active = 'true';
}

function savePayMethodLocal(){
    let method = $('[data-active="true"]').val();
    localStorage.setItem('payMethod', method);
}

function removeItemById(id){
    let cart = localStorage.cart;
    $(`#${id}`).remove();
    if(!cart) return;
    cart = JSON.parse(cart);
    delete cart[id];
    localStorage.setItem('cart', JSON.stringify(cart));
    if(JSON.stringify(cart)==='{}'){
        displayCartItems();
    }
}

function updateFinallyCoast(coast){
    $(`[data-id="coast"]`).empty().append(' '+coast+ ' руб.');
}

function updateItemCountDisplay(id){
    let cart = localStorage.cart;
    if(!cart) return;
    cart = JSON.parse(cart);
    let count = cart[id];
    let item = searchItemById(id);
    let nameAndCount = item.name;
        nameAndCount += +cart[id] > 1 ? ' x'+ cart[id] : '';
    $(`#${id} h3 span`).empty().append(nameAndCount);
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
    if(cart[id]>=99) return;
    cart[id] = ++cart[id];
    localStorage.setItem('cart', JSON.stringify(cart));
}

function countDicrement(id){
    let cart = localStorage.cart;
    if(!cart) return;
    cart = JSON.parse(cart);
    if(cart[id] <= 1) return;
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
    domElBtn.append('Готово!');
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

function createOrderMessage(){
    let msg = `*** НОВЫЙ ЗАКАЗ *** %0A%0A`;
    if(localStorage.info === '{}' && !localStorage.info){
        return 'Ошибочный заказ.';
    }
    let info = JSON.parse(localStorage.info),
        payMethod = localStorage.payMethod;
    msg += `Имя: ${info.name}%0AТелефон: ${info.phone} %0AАдрес: ${info.adress}%0AСпособ оплаты: ${payMethod}%0A
${$('#comment').val() === '' ? '' : 'Комментарий: '+$('#comment').val()}%0A%0A`;

    msg += getItemsString();
    return msg;
}

function getItemsString(){
    if(localStorage.cart === '{}' && !localStorage.cart){
        return 'Пустая корзина'
    }
    let cart = JSON.parse(localStorage.cart);
    let str = '';
    for(const id in cart){
        let item = searchItemById(id);
        str += `- ${item.name} ${cart[id]} шт.  = ${item.price * cart[id]} р.%0A`;
    }
    str += `%0AСумма заказа: ${getCartSum()} руб.`;
    return str;
}

function sendMessage(mes){
    let id = +new Date() - 1544618950200;
        token = "78a563a763ce7932ca9cba7e77915bfad464e7a2a974c1b3b0c687c62b8eba87a195c7cba1715f790468b";
    let req=`https://api.vk.com/method/messages.send?access_token=${token}&v=5.92&domain=anton_vostroknutov&random_id=${id}&message=${mes}`;
    
    jQuery.ajax({
        url : req,
        type : "GET",
        dataType : "jsonp",
        success : function(msg){
        
        console.log(msg);
        }
    });
}
//------------------------- menu
contentLoad();
updateCartSumDisplay(getCartSum(), false);
addHandlersToCartButton();
//------------------------- cart
displayCartItems();
addHandlersToItems();
addHandlerPayMethodsButtons();


})(jQuery);

//78a563a763ce7932ca9cba7e77915bfad464e7a2a974c1b3b0c687c62b8eba87a195c7cba1715f790468b

