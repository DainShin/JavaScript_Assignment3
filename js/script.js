const stuNum = document.querySelector('#stuNum');
const stuNumBtn = document.querySelector('#stuNumBtn');
const form = document.querySelector('form');
const ordercheck = document.querySelector('#ordercheck');

stuNumBtn.addEventListener('click', function() {
   stuNum.textContent = '200535561';
});


form.addEventListener('submit', function (event) {

    event.preventDefault();  // Defend 

    var orderName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var pizzaSelect = document.getElementById('pizzaSelect').value;
    var size = document.querySelector('input[name="size"]:checked').value;
    var thoughSelect = document.getElementById('thoughSelect').value;
    
    var toppings = [];
    var toppingSelect = document.querySelectorAll('input[name="topping"]:checked');
    
    toppingSelect.forEach(function(selected) {
        toppings.push(selected.value);
    });

    
    var requirements = document.querySelector('textarea[name="msg"]').value;


    if (orderName === '') {
        alert('Please enter the name');
    } else if (phone === '' || isNaN(phone)) {
        alert('Pleae enter the valid phone number');
    } else if (pizzaSelect === '') {
        alert('Please choose the pizza');
    } else if (size === null) {
        alert('Please choose the size');
    } else if (thoughSelect === '') {
        alert('Please choose tough');
    } else {
        function Pizza(orderName, phone, pizzaSelect, size, thoughSelect, toppinglst, requirements) {
            this.orderName = orderName;
            this.phone = phone;
            this.pizzaSelect = pizzaSelect;
            this.size = size;
            this.thoughSelect = thoughSelect;
            this.toppings = toppings;
            this.requirements = requirements;
            this.confirmOrder = function () {
                ordercheck.innerHTML =
                    `== Order info == <br>
                 Customer name : ${orderName}<br>
                 Contact Number : ${phone}<br>
                 Pizza: ${pizzaSelect}<br>
                 Size: ${size}<br>
                 Though: ${thoughSelect}<br>
                 Toppings: ${toppinglst.join(', ')}<br>
                 Requirements: ${requirements}`
            };
        }

        var myPizza = new Pizza(orderName, phone, pizzaSelect, size, thoughSelect, toppings, requirements);
        myPizza.confirmOrder();
    }
});


//     || phone === '' || pizzaSelect === '' || size === null || thoughSelect === '')