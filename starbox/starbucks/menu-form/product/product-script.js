const drinksData = {
    1: {
        name: 'Iced Energy',
        image: 'https://globalassets.starbucks.com/digitalassets/products/bev/TropicalCitrusEnergyDrink.jpg?impolicy=1by1_wide_topcrop_630',
        description: '250calories',
        price: '8$'
    },
    2: {
        name: 'Milk, Juice & More',
        image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_SignatureHotChocolate.jpg?impolicy=1by1_wide_topcrop_630',
        description: '370calories',
        price: '9.9999$'
    },
    3: {
        name: 'Cold Coffee',
        image: 'https://globalassets.starbucks.com/digitalassets/products/bev/PumpkinCreamColdBrew.jpg?impolicy=1by1_wide_topcrop_630" alt="Pumpkin Cream Cold Brew',
        description: '250calories',
        price: '6$'
    },
    4: {
        name: 'Starbucks Refreshers® Beverages',
        image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SummerBerryRefreshersLemonade.jpg?impolicy=1by1_wide_topcrop_630',
        description: 'bi khiale',
        price: '10$'
    }
};
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const id = getQueryParam('id');
const drink = drinksData[id];

if (drink) {
    document.getElementById('product-title').innerText = drink.name;
    document.getElementById('product-img').src = drink.image;
    document.getElementById('product-description').innerText = drink.description;
    document.getElementById('product-price').innerText = drink.price;
    document.getElementById('newspan').innerHTML = drink.name
} else {
    document.getElementById('product-details').innerText = 'the drink not founded';
}


let span = document.querySelector('.add_to_card')
let bodys = document.querySelector('.body_reg')
span.addEventListener('mouseover',function() {
    bodys.style.filter = 'blur(10px)'
})
span.addEventListener('mouseout',function() {
    bodys.style.filter = 'blur(0px)'
})
