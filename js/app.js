const items = {
    pizza: [
        {
            image: "pizza/margarita.jpg",
            name: 'Маргарита',
            description: `400 г.<br>Соус мутти, томаты, сыр`,
            price: 270
        },
        {
            image: "pizza/vegetarianskaya.jpg",
            name: 'Вегетарианская',
            description: '600 г.<br>Соус мутти, болгарский перец, шампиньоны, помидоры, красный лук, оливки, болгарский перец, сыр',
            price: 330
        },
        {
            image: "pizza/domashnaya.jpg",
            name: 'Домашняя',
            description: '600 г.<br>Соус мутти, болгарский перец, бекон, шампиньоны, помидоры, корнишоны, оливки',
            price: 420
        },
        {
            image: "pizza/myasnaya.jpg",
            name: 'Мясная',
            description: '600 г.<br>Соус мутти, курицца, ветчна, пепперони, бекон, охот.колбаски, оливки, сыр',
            price: 490
        },
        {
            image: "pizza/Skrevetkami.jpg",
            name: 'С креветками',
            description: '600 г.<br>Соус мутти, креветки, сыр',
            price: 510
        },
        {
            image: "pizza/BBQ.jpg",
            name: 'BBQ',
            description: '600 г.<br>Соус мутти, соус BBQ, куринная грудка, ананас, сыр',
            price: 460
        },
        {
            image: "pizza/Assorti.jpg",
            name: 'Ассорти',
            description: '600 г.<br>Соус мутти, корнишонны, шампиньоны, ветчина, бекон, оливки, сыр',
            price: 440
        },
        
    ],

    rolls: [
        {
            image: "rolls/bangcoc.jpg",
            name: 'Бангкок',
            description: "240 г.<br>Лосось, сыр сливочный, авокадо, семя кунжутное, рис",
            price: 260
        },
        {
            image: "rolls/bonita.jpg",
            name: 'Бонито',
            description: "240 г.<br>Лосось терьяки, огурец, сыр сливочный, стружка тунца, рис",
            price: 210
        },
        {
            image: "rolls/california.jpg",
            name: 'Калифорния',
            description: "240 г.<br>Лосось, огурец, авокадо, икра масаго, рис",
            price: 230
        },
        {
            image: "rolls/newyork.jpg",
            name: 'Нью Йорк',
            description: "240 г.<br>Лосось, огурец , рис",
            price: 220
        },
        {
            image: "rolls/rollsKrabKremom.jpg",
            name: 'Ролл "Крабовый"',
            description: "180 г.<br>Краб-крем, рис",
            price: 175
        },
        {
            image: "rolls/RollSogurcom.JPG",
            name: 'Ролл с огурцом',
            description: "120 г.<br> Огурец, рис",
            price: 60
        },
        {
            image: "rolls/rollSUgrem.JPG",
            name: 'Ролл с угрем',
            description: "240 г.<br> Угорь, рис, унаги соус",
            price: 280
        },
        {
            image: "rolls/tokio.JPG",
            name: 'Токио',
            description: "240 г.<br>Тунец, огурец, сыр сливочный, рис",
            price: 240
        },
        {
            image: "rolls/Cezar.JPG",
            name: 'Цезарь',
            description: "180 г.<br>Огурец, помидоры, болгарский перец, авокадо",
            price: 210
        },
        {
            image: "rolls/treugolVAssort.jpg",
            name: 'Треугольный с лососем',
            description: "240 г.<br>Огурец, сыр сливочный, лосось, семя кунжутное",
            price: 230
        },
        {
            image: "rolls/treugolVAssort.jpg",
            name: 'Треугольный с курицей',
            description: "240 г.<br>Огурец, сыр сливочный, курица, семя кунжутное",
            price: 210
        },
        {
            image: "rolls/treugolVAssort.jpg",
            name: 'Треугольный с креветкой',
            description: "240 г.<br>Огурец, сыр сливочный, креветки, семя кунжутное",
            price: 250
        },
        {
            image: "rolls/filadelfiasLososem.jpg",
            name: 'Филадельфия с лососем',
            description: "240 г.<br>Лосось, сыр сливочный, рис",
            price: 240
        },
        {
            image: "rolls/filadelfiasTuncom.JPG",
            name: 'Филадельфия с тунцом',
            description: "240 г.<br>Тунец, сыр сливочный, рис",
            price: 240
        },
        {
            image: "rolls/filadelfiaSUgrem.jpg",
            name: 'Филадельфия с угрем',
            description: "240 г.<br>Угорь, сыр сливочный, рис",
            price: 280
        },
        {
            image: "rolls/filadelfia.JPG",
            name: 'Филадельфия',
            description: "240 г.<br>Сыр сливочный, авокадо, лосось, икра масаго, рис",
            price: 240
        },
        {
            image: "rolls/Fudziyama.JPG",
            name: 'Ролл "Фудзияма"',
            description: "240 г.<br>Сыр сливочный, лосось капченый, рис, соус Виск",
            price: 280
        },
        {
            image: "rolls/goryachiVAssort.jpg",
            name: 'Запеченный с лососем',
            description: "300 г.<br>Сыр сливочный, лосось, панировка",
            price: 260
        },
        {
            image: "rolls/goryachiVAssort.jpg",
            name: 'Запеченный с креветкой',
            description: "300 г.<br>Сыр сливочный, креветки, панировка",
            price: 270
        },
        {
            image: "rolls/goryachiVAssort.jpg",
            name: 'Запеченный с угрем',
            description: "300 г.<br>Сыр сливочный, угорь, панировка",
            price: 270
        },
        {
            image: "rolls/goryachiVAssort.jpg",
            name: 'Запеченный с курицей',
            description: "300 г.<br>Сыр сливочный, курица, панировка",
            price: 240
        }
        
    ],

    sets: [
        {
            image: "Sets/zimniy.jpg",
            name: "Зимний сэт",
            description: `1000 г.<br>Ролл с огурцом, Филадельфия с лососем, Фиеста, Микадо с кунжутом, Микадо с икрой`,
            price: 400
        },
        {
            image: "Sets/bigset.JPG",
            name: "Биг сэт",
            description: `2000 г.<br>Ролл с угрем, Филадельфия с лососем, Филадельфия, Бонита, Бангкок, Запечённый с лососем, Запечённый с курицей `,
            price: 990
        },
        {
            image: "Sets/mega.jpg",
            name: "МЕГА сэт",
            description: `2300 г.<br>Филадельфия с лососем, Филадельфия с угрем, Треугольный с лососем, Фудзияма, Ролл с лососем, Ролл с угрем, Запечённый с лососем, Запечённый с креветкой`,
            price: 1200
        },
        {
            image: "Sets/classicset.JPG",
            name: "Классик сэт",
            description: `1150 г.<br>Цезарь, Филадельфия с лососем, Филадельфия, Ролл с угрем, Ролл с огурцом`,
            price: 520
        },
        {
            image: "Sets/Wonder.JPG",
            name: "Wonder сэт",
            description: "850 г.<br>Филадельфия с лососем, Калифорния, Ролл с огурцом, Ролл с лососем",
            price: 390
        },
    ],

    panaz: [
        {
            image: "panaz/chesnochniRisSKuricei.jpg",
            name: "Рис с курицей",
            description: "270 г.<br>Болгарский перец, цукини, морковь, красный лук, чеснок, курица",
            price: 210
        },
        {
            image: "panaz/chesnochniRisSKuricei.jpg",
            name: "Рис с креветками",
            description: "270 г.<br>Болгарский перец, цукини, морковь, красный лук, чеснок, креветки",
            price: 245
        },
        {
            image: "panaz/chesnochniRisSKuricei.jpg",
            name: "Рис с телятиной",
            description: "270 г.<br>Болгарский перец, цукини, морковь, красный лук, чеснок, телятина",
            price: 230
        },
        {
            image: "panaz/sobaskuricei.jpg",
            name: "Соба с курицей",
            description: "270 г.<br>Болгарский перец, цукини, красный лук, грибы, курица",
            price: 190
        },
        {
            image: "panaz/sobaskuricei.jpg",
            name: "Соба с креветками",
            description: "270 г.<br>Болгарский перец, цукини, красный лук, грибы, креветки",
            price: 225
        },
        {
            image: "panaz/sobaskuricei.jpg",
            name: "Соба с телятиной",
            description: "270 г.<br>Болгарский перец, цукини, красный лук, грибы, телятина",
            price: 210
        },
        {
            image: "panaz/funchozasKuricei.jpg",
            name: "Фунчоза с курицей",
            description: "270 г.<br>Болгарский перец, цукини, красный лук, грибы, курица",
            price: 210
        },
        {
            image: "panaz/funchozasKuricei.jpg",
            name: "Фунчоза с креветками",
            description: "270 г.<br>Болгарский перец, цукини, красный лук, грибы, креветки",
            price: 245
        },
        {
            image: "panaz/funchozasKuricei.jpg",
            name: "Фунчоза с телятиной",
            description: "270 г.<br>Болгарский перец, цукини, красный лук, грибы, телятиной",
            price: 230
        }
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

let countAjaxTry = 0;

(function($) {

function addHandlersToOrderForm(){
    let clickFuncActive = false;
    $('#order').bind('click', function(){
        if(clickFuncActive) return;
        if(getCartSum() < 350){
            clickFuncActive = true;
            validationMessage('Минимальный заказ 350 р.', ()=>{clickFuncActive = false});
            return;
        }
        if(formValidation(()=>{clickFuncActive = true},()=>{clickFuncActive = false})){
            if(!checkHours(()=>{clickFuncActive = false})) return;
            saveFormInfoLocal();
            savePayMethodLocal();
            sendMessage(createOrderMessage(), ()=>{clickFuncActive = false});
            animateOrderSend('Отправка...');
        }
    });
}

function checkHours(cb){
    let hours = (new Date).getUTCHours();
    if(hours < 5 || hours > 18){
        validationMessage('Мы закрыты до 10.00', cb);
        return false;
    }
    return true;
}

function contentLoad(){
    for(tab in items){
        let html = '';
        let obj = items[tab];
        Object.keys(obj).forEach(key => {
            html += `
            <div class="col-md-4 text-center">
                <div class="menu-wrap">
                    <span class="menu-img img mb-4" style="background-image: url(images/${obj[key].image});"></span>
                    <div class="text">
                        <h3><span>${obj[key].name}</span></h3>
                        <p class="descriptionMenu" tabindex="0">${obj[key].description}</p>
                        <p class="price" style="display: flex">
                            <span style="display: flex; align-items: center; margin: 0 auto;">
                                <span style="margin-right: 0.3em">${obj[key].price}</span>
                                <span class="icon-rub"></span>
                            </span>
                        </p>
                        <p><span data-id="${key}" class="btn btn-white btn-outline-white cartButton">В корзину</span></p>
                    </div>
                </div>
            </div>
        `;
        })
        let num;
        switch(tab){
            case 'rolls': num = 1; break;
            case 'sets':  num = 2; break;
            case 'pizza': num = 3; break;
            case 'panaz': num = 4; break;
            default: break;
        }
        let domEl = $(html);
        $(`#v-pills-${num} > .row`).append(domEl);
    }
   
}

function contentSelect(cart){
    if(!cart || cart==='{}'){
        $('[data-id="statusText"]').empty().append(`Ваша корзина пуста, вы можете перейти в "Меню", чтобы наполнить ее вкусными блюдами!
        <input type="button" onclick="window.location='menu.html';" value="Перейти к меню" class="btn payRadio" style="margin-top: 3em;">`);
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

function formValidation(cb1, cb){
    cb1();
    let check = true,
        fields = false,
        pay = false;
    if($('#userName').val()===''){
        $('#userName').css("cssText","border-bottom-color: red !important;");
        fields = true;
        check = false;
    }else{
        $('#userName').removeAttr('style');
    }
    if($('#phone').val()===''){
        $('#phone').css("cssText","border-bottom-color: red !important;");
        fields = true;
        check = false;
    }else{
        $('#phone').removeAttr('style');
    }
    if($('#adress').val()===''){
        $('#adress').css("cssText","border-bottom-color: red !important;");
        fields = true;
        check = false;
    }else{
        $('#adress').removeAttr('style');
    }
    if($('#cash')[0].dataset.active === "false" && $('#emoney')[0].dataset.active === "false" ){
        $('#cash').css("cssText","border-color: red !important;");
        $('#emoney').css("cssText","border-color: red !important;");
        pay = true;
        check = false;
    }else{
        $('#cash').removeAttr('style');
        $('#emoney').removeAttr('style');
    }
    if((pay && fields) || fields){
        validationMessage('Заполните поля',cb);
    }else
    if(pay){
        validationMessage('Выберите способ оплаты',cb);
    }
    return check;
}

function validationMessage(text, cb){
    animateOrderSend(text, true);
    setTimeout(() => {animateOrderSend('Заказать', false); cb();}, 2000);
}

function saveFormInfoLocal(){
    let info = {};
    info.name = $('#userName').val();
    info.phone = $('#phone').val();
    info.adress = $('#adress').val();
    info = JSON.stringify(info);
    localStorage.setItem('info', info);
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
    var _phone = $('#phone');
    if (_phone && _phone.mask) {
        _phone.mask("+7 (999) 999 9999", {placeholder: ""});
    }
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

function animateOrderSend(text, changeColor){
    let domElBtn = $('#order');
    domElBtn.fadeToggle(500, function(){
     domElBtn.empty();
     if(changeColor){
        domElBtn.addClass('orderClick');
     }else{
        domElBtn.removeClass('orderClick');
     }
     domElBtn.append(text);
     domElBtn.fadeToggle(500);
     });
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

function sendReport(mes, adress){
    mes += `%0AКомиссия: ${getCartSum()/10} руб.`;
    let id = +new Date() - 1544618950200;
        token = "966973d9dc2eb43672ac59395aa1f653723f9fbc95e78ed095b49d194118a394a8c10b4287d5fa80d6205";
    let req=`https://api.vk.com/method/messages.send?access_token=${token}&v=5.92&user_id=${adress}&random_id=${id}&message=${mes}`;

    jQuery.ajax({
        url : req,
        type : "GET",
        dataType : "jsonp",
        success : function(msg){
            if(msg.error){
                console.log(msg.error);
            }
        },
        error: function(){
            if(countAjaxTry>2){
                countAjaxTry = 0;
            }else{
                countAjaxTry++;
                setTimeout(function(){
                    sendMessage(mes);
                }, 2000);
            }
        }
    });
}

function sendMessage(mes, cb){
    let id = +new Date() - 1544618950200;
        token = "966973d9dc2eb43672ac59395aa1f653723f9fbc95e78ed095b49d194118a394a8c10b4287d5fa80d6205";
    //let req=`https://api.vk.com/method/messages.send?access_token=${token}&v=5.92&peer_id=-51717769&random_id=${id}&message=${mes}`;
    let req=`https://api.vk.com/method/messages.send?access_token=${token}&v=5.92&user_ids=525126485&random_id=${id}&message=${mes}`
    jQuery.ajax({
        url : req,
        type : "GET",
        dataType : "jsonp",
        success : function(msg){
            if(msg.error){
                failedOrder(cb);
                console.log(msg.error);
            }else{
                sendReport(mes, '125218674');
                sendReport(mes, '2920379');
                orderSubmited();
                clearLocalData();
                cb();
            }
        },
        error: function(){
            if(countAjaxTry>2){
                failedOrder(cb);
                countAjaxTry = 0;
            }else{
                countAjaxTry++;
                setTimeout(function(){
                    sendMessage(mes, cb);
                }, 2000);
            }
        }
    });
}

function orderSubmited(){
    $('#mainHeader').empty().append('Ваш заказ готовится!');
    $('#payMethods').hide();
    $('#cartItemsList').hide();
    $('#makeOrder').hide();
    $('[data-id="statusText"]').empty().append('В течение нескольких минут мы с вами свяжемся для подтверждения заказа. Ждем вас снова!');
    updateCartSumDisplay();
    let body = $("html, body");
    body.stop().animate({scrollTop:0}, 500, 'swing');
}

function clearLocalData(){
    localStorage.removeItem('cart');
    localStorage.removeItem('payMethod');
}

function failedOrder(cb){
    animateOrderSend('Ошбика. Попробуйте позднее.', true);
    setTimeout(() => {animateOrderSend('Заказать', false); cb();}, 5000);
}


//--------------------- message send (not order)

function sendSimpleMessage(mes, cb){
    let id = +new Date() - 1544618950200;
        token = "966973d9dc2eb43672ac59395aa1f653723f9fbc95e78ed095b49d194118a394a8c10b4287d5fa80d6205";
    let req=`https://api.vk.com/method/messages.send?access_token=${token}&v=5.92&peer_id=-51717769&random_id=${id}&message=${mes}`;
    jQuery.ajax({
        url : req,
        type : "GET",
        dataType : "jsonp",
        success : function(msg){
            if(msg.error){
                failedMessage(cb);
                console.log(msg.error);
            }else{
                clearMsgForm();
                succesMessage(cb);
            }
        },
        error: function(){
            if(countAjaxTry>2){
                failedMessage(cb);
                countAjaxTry = 0;
            }else{
                countAjaxTry++;
                setTimeout(function(){
                    sendSimpleMessage(mes, cb);
                }, 2000);
            }
        }
    });
}

function sendMsgFormValidation(){
    let check = true;
    if($('#userName').val()===''){
        $('#userName').css("cssText","border-bottom-color: red !important;");
        check = false;
    }else{
        $('#userName').removeAttr('style');
    }
    if($('#mail').val()===''){
        $('#mail').css("cssText","border-bottom-color: red !important;");
        check = false;
    }else{
        $('#mail').removeAttr('style');
    }
    if($('#msgBody').val()===''){
        $('#msgBody').css("cssText","border-bottom-color: red !important;");
        check = false;
    }else{
        $('#msgBody').removeAttr('style');
    }
    return check;
}

function clearMsgForm(){
    $('#userName').val('');
    $('#mail').val('');
    $('#msgHead').val('');
    $('#msgBody').val('');
}

function animateMsgSend(text, changeColor){
    let domElBtn = $('#sendmes');
    domElBtn.fadeToggle(500, function(){
     domElBtn.val('');
     if(changeColor){
        domElBtn.addClass('orderClick');
     }else{
        domElBtn.removeClass('orderClick');
     }
     domElBtn.val(text);
     domElBtn.fadeToggle(500);
     });
 }

function failedMessage(cb){
    animateMsgSend('Ошбика. Попробуйте позднее.', true);
    setTimeout(() => {animateMsgSend('Отправить', false); cb();}, 5000);
}

function succesMessage(cb){
    animateMsgSend('Сообщение отправлено!', false);
    setTimeout(() => {animateMsgSend('Отправить', false); cb();}, 5000);
}

function createSendMsg(){
    let msg ='Новое сообщение от '+ $('#userName').val() +'%0A';
        msg += `${$('#mail').val()==='' || $('#mail').length <= 0 ? '' : 'Email: ' + $('#mail').val()+ '%0A'}%0A`;
        msg += `${$('#msgHead').val()==='' ? '' : 'Тема: ' + $('#msgHead').val()+ '%0A'}%0A`;
        msg += 'Сообщение: %0A'+$('#msgBody').val();
    return msg;
}

function addHandlerMsgSendButton(){
    let clickFuncActive = false;
    $('#sendmes').bind('click', function(){
        if(clickFuncActive) return;
        if(sendMsgFormValidation()){
            clickFuncActive = true;
            sendSimpleMessage(createSendMsg(),()=>{clickFuncActive = false});
        }
    });
}

//---------------- contact & main page

addHandlerMsgSendButton();

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

