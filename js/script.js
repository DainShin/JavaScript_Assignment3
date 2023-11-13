// The variables
const stuNum = document.querySelector('#stuNum');
const stuNumBtn = document.querySelector('#stuNumBtn');
const form = document.querySelector('form');
const ordercheck = document.querySelector('#ordercheck');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const quantity = document.getElementById('quantity');

class Pizza {
    constructor(orderName, phone, pizzaName, quantity, size, sauce, thoughName, toppings, requirements) {
        this.orderName = orderName;
        this.phone = phone;
        this.pizzaName = pizzaName;
        this.quantity = quantity;
        this.size = size;
        this.sauce = sauce;
        this.thoughName = thoughName;
        this.toppings = toppings;
        this.requirements = requirements;
    }

    // method
    confirmOrder() {
        ordercheck.innerHTML =
            `<ul>
            <li>Customer name : ${this.orderName} </li>
            <li>Pizza: ${this.pizzaName}</li>
            <li>  Quantity : ${this.quantity}</li>
            <li>Size: ${this.size}</li>
            <li>Sauce: ${this.sauce}</li>
            <li>Though: ${this.thoughName}</li>
            <li> Toppings: ${this.toppings.join(', ')}</li>
            <li>Requirements: ${this.requirements}</li>
        </ul>`;

        // style
        ordercheck.style.margin = '10px 0 50px 50px';
        ordercheck.style.fontSize = '16px';
    }
} // Pizza class


var num = 0;

// EventListener
plus.addEventListener('click', function () {
    console.log('plus')
    num += 1;
    quantity.innerText = num;
});

minus.addEventListener('click', function () {
    num -= 1;
    num = Math.max(num, 0);
    quantity.innerText = num;
});

quantity.innerText = num;


// Dynamically added my student id and name
stuNumBtn.addEventListener('click', function () {
    stuNum.textContent = '200535561 Dain Shin';
});


// If user click the submit button, this function will work
form.addEventListener('submit', function (event) {
    // To prevent the default action of the submit button in formtag(reloading the page), I used preventDefault method
    event.preventDefault();

    // The variables for taking the values user enter
    var orderName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    var pizzaSelect = document.getElementById('pizzaSelect');
    var pizzaName = pizzaSelect.options[pizzaSelect.selectedIndex].innerText;

    var size = document.querySelector('input[name="size"]:checked').nextElementSibling.innerText;
    var sauce = document.querySelector('input[name="sauce"]:checked').nextElementSibling.innerText;


    var thoughSelect = document.getElementById('thoughSelect');
    var thoughName = thoughSelect.options[thoughSelect.selectedIndex].innerText;

    var quantity = document.getElementById('quantity').innerText;

    // The checked values will be stored in this list
    var toppings = [];
    var toppingSelect = document.querySelectorAll('input[name="topping"]:checked');

    // The selected values will be stored in the toppings list through forEach statement
    toppingSelect.forEach(function (selected) {
        toppings.push(selected.nextElementSibling.innerText);
    });


    var requirements = document.querySelector('textarea[name="msg"]').value;

    // Validation for the user input values
    if (orderName === '') {
        alert('Please enter the name');
    } else if (phone === '' || isNaN(phone)) {
        alert('Pleae enter the valid phone number');
    } else if (pizzaSelect === '') {
        alert('Please choose the pizza');
    } else if (quantity === 0) {
        alert('Please select the quanity');
    } else if (size === null) {
        alert('Please choose the size');
    } else if (sauce === null) {
        alert('Please choose the sauce');
    } else if (thoughSelect === '') {
        alert('Please choose tough');
    } else {
        var myPizza =  new Pizza(orderName, phone, pizzaName, quantity, size, sauce, thoughName, toppings, requirements);
        myPizza.confirmOrder();
        console.log(myPizza.confirmOrder());
    }
});
