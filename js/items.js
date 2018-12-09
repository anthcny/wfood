items = {
    pizza: [
        {
            image: "pizza-1",
            name: "Итальянская",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 410
        },
        {
            image: "pizza-2",
            name: "Черная",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 390
        },
        {
            image: "pizza-3",
            name: "BBQ",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 420
        },
        {
            image: "pizza-1",
            name: "Веганская",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 310
        },
        {
            image: "pizza-2",
            name: "Ассорти",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 440
        },
        {
            image: "pizza-3",
            name: "Мясная",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 550
        }
    ],

    rolls: [
        {
            image: "burger-1",
            name: "Ролл1",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 490
        },
        {
            image: "burger-2",
            name: "Ролл2",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 440
        },
    ],

    drinks: [
        {
            image: "drink-1",
            name: "Компот",
            description: "Состав: Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
            price: 130
        },
        {
            image: "drink-2",
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



