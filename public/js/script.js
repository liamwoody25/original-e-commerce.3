const productBtn = document.querySelectorAll('.item-btn');
const cartBtn = document.querySelector('.bi-bag');
const quanBtn = document.querySelectorAll('.quantity-content');
const insertBtn = document.querySelectorAll('.increase-btn')
const bagOffScreen = document.querySelector('.shopping-section')
const bagContainer = document.querySelector('.cart-content');

const bagProducts = [
  {
    name: 'Macbook',
    price: 899,
    id: 1,
    image: './public/assets/images/pexels-dlxmedia-hu-maccbook.png',
  },
  {
    name: 'Android',
    price: 399,
    id: 2,
    image: './public/assets/images/andrey-matveev-msartwatch-unsplash.png',
  }
]

const bagData = [
  {itemId: 1, quantity: 1},
  {itemId: 2, quantity: 2},
  {itemId: 3, quantity: 3}
]

const bagOutput = [
  {bagQuan: 0,},
  {bagTotal: 0}
]



// this function sends the product to the cart when the purchase btn is clicked
function sendProductToBag(i) {
  const bagOutput = document.getElementById('bag-output');
  const displayQunatity = Number(bagOutput.innerText) + 1

  if (displayQunatity > 10 ) {
    displayQunatity = 0
  }

  quanBtn[i].style.display = 'block'
  bagOutput.innerText = displayQunatity
}




// this function is for adding multiple products to the cart
function AddProductToBag(i) {
  const product = bagProducts[i]
  const productQuantity = document.querySelectorAll('.card-output')[i];
  const quantityOutput = Number(productQuantity.innerText) + 1

 if (quantityOutput > 10) {
  quantityOutput = 0
 }

 productQuantity.innerText = quantityOutput
 document.getElementById('bag-output').textContent = quantityOutput

 const cardProduct = document.createElement('article')
 cardProduct.classList.add('product-item');

 cardProduct.innerHTML += `
  <img class="card-img" src="${product.image}" alt="card-image">
    <div class="product-content-container">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    </div>
    <div class="quantity-btn-content">
      <button class="decrease-btn"><i class="bi bi-dash-square"></i></button>
      <span ${bagData}>0</span>
      <button class="increase-btn"><i class="bi bi-plus-square"></i></button>
    </div>
 `
 
 


 bagContainer.appendChild(cardProduct)

}



// this function displays the shopping bag to the screen
function displayBag() {
  if (cartBtn.classList.toggle('enable')) {
    bagOffScreen.classList.toggle('enable')
  } else {
    bagOffScreen.classList.toggle('enable')
  }
}




// this code is for when the add to bag button is clicked
productBtn.forEach(function(btn,i){
  btn.addEventListener('click', function(){
    sendProductToBag(i)
    AddProductToBag(i)
  })
})


// this code is for when the the increase button is being clicked 
insertBtn.forEach(function(increase,i){
  increase.addEventListener('click', function(){
    AddProductToBag(i)
  })
})


// this event listener code is when the cart button is being clicked on 
cartBtn.addEventListener('click', function(){
  displayBag()
})

