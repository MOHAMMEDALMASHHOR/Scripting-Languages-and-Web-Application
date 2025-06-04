const items = document.querySelectorAll('.items');
const cart = document.querySelector('.cart');
const ul = document.getElementById('ul');
const exit = document.querySelector('.exit');
let food_cart = [];

if (localStorage.food_cart) {
  food_cart = JSON.parse(localStorage.food_cart);
  showCart();
}

items.forEach((btn) => {
  btn.onclick = (e) => {
    let itemName = e.target.dataset.item;
    let price = parseFloat(e.target.dataset.price);
    addToCart(itemName, price);
    showCart();
    cart.style.display = "block";
  };
});

exit.onclick = () => {
  cart.style.display = "none";
};

function addToCart(itemName, price) {
  for (let item of food_cart) {
    if (item.Product === itemName) {
      item.Qty += 1;
      saveCart();
      return;
    }
  }
  food_cart.push({ Product: itemName, Price: price, Qty: 1 });
  saveCart();
}

function saveCart() {
  localStorage.food_cart = JSON.stringify(food_cart);
}

function deleteItem(index) {
  food_cart.splice(index, 1);
  saveCart();
  showCart();
}

function showCart() {
  ul.innerHTML = "";
  food_cart.forEach((item, index) => {
    ul.innerHTML += `
      <li>
        ${item.Product} x ${item.Qty} = ${item.Qty * item.Price}
        <button onclick="deleteItem(${index})">🗑️</button>
      </li>
    `;
  });
}