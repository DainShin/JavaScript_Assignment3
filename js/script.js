// The variables
const stuNum = document.querySelector('#stuNum');
const stuNumBtn = document.querySelector('#stuNumBtn');
const form = document.querySelector('form');
const ordercheck = document.querySelector('#ordercheck');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const quantity = document.getElementById('quantity');

// Creating an instance of the Pizza class. It will take variables according to the user selection
class Pizza {
    // Constructor will initialize the object's properties when it's created
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


    // When user click the "Order" button, this method will be called after creating the instance.
    // This message will be shown in the ordercheck section.
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

        // I added the style for the ordercheck here, becuase I couldn't add them in the css file.
        ordercheck.style.margin = '10px 0 50px 50px';
        ordercheck.style.fontSize = '16px';
    }
} // Pizza class


// This num variable is for counting the quantity of the pizza.
var num = 0;

// EventListener
// When the user clicks + button, it will add the num.
plus.addEventListener('click', function () {
    console.log('plus')
    num += 1;
    quantity.innerText = num;
});

// When the user clicks - button, it will reduce the num.
minus.addEventListener('click', function () {
    num -= 1;
    num = Math.max(num, 0);
    quantity.innerText = num;
});

// In the quantity section, the number will be shown.
quantity.innerText = num;


// Dynamically added my student id and name
stuNumBtn.addEventListener('click', function () {
    stuNum.textContent = '200535561 Dain Shin';
});


// If user click the submit button, this function will work.
form.addEventListener('submit', function (event) {
    // To prevent the default action of the submit button in formtag(reloading the page), I used preventDefault method.
    event.preventDefault();

    // The variables for taking the values that user choose.
    var orderName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    // Check for null or empty values and show alert if necessary
    if (!orderName.trim()) {
        alert('Please enter the name');
        return;
    }

    if (!phone.trim() || isNaN(phone)) {
        alert('Please enter a valid phone number');
        return;
    }

    var pizzaSelect = document.getElementById('pizzaSelect');
    var pizzaName = pizzaSelect.options[pizzaSelect.selectedIndex].innerText;

    var sizeInput = document.querySelector('input[name="size"]:checked');
    var size = sizeInput ? sizeInput.nextElementSibling.innerText : null;
    if (!size) {
        alert('Please choose the size');
        return;
    }

    var sauceInput = document.querySelector('input[name="sauce"]:checked');
    var sauce = sauceInput ? sauceInput.nextElementSibling.innerText : null;
    if (!sauce) {
        alert('Please choose the sauce');
        return;
    }

    var thoughSelect = document.getElementById('thoughSelect');
    var thoughName = thoughSelect.options[thoughSelect.selectedIndex].innerText;

    var selectedToppings = document.querySelectorAll('input[name="topping"]:checked');
    var toppings = [];
    selectedToppings.forEach(function (selected) {
        toppings.push(selected.nextElementSibling.innerText);
    });

    var requirements = document.querySelector('textarea[name="msg"]').value;

    // Create an instance of the Pizza class with validated data
    var pizzaOrder = new Pizza(orderName, phone, pizzaName, quantity, size, sauce, thoughName, toppings, requirements);

    // Show the order details
    pizzaOrder.confirmOrder();
   
});
