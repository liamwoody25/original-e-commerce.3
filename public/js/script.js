const bagBtn = document.querySelector('.bi-bag');
const bagOffScreen = document.querySelector('.shopping-section');
const productBtn = document.querySelectorAll('.item-btn');
const bagContainer = document.querySelector('.cart-content');

const products = [
  {
    name: 'Macbook',
    image: './public/assets/images/pexels-dlxmedia-hu-maccbook.png',
    price: 899,
    id: 0
  },
  {
    name: 'Android',
    image: './public/assets/imagesandrey-matveev-msartwatch-unsplash.png',
    price: 399,
    id: 0
  }
]

const bagOutput = [
  {bagQuan: 0, bagTotal: 0}
]

// this function sends the product to the cart when the purchase btn is clicked
function sendProductToBag(product, i) {
  const bagOutput = document.getElementById('bag-output');
  const displayQuantity = Number(bagOutput.innerText) + 1;

  if (displayQuantity > 10) {
    displayQuantity = 0;
  }

  bagOutput.innerText = displayQuantity

  addProduct(product, i)
}


// this function is for adding multiple products to the cart
function addProduct(product) {
  
  product.id += 1
  
  let productCard = {
    [product.name]: product
  }

  productCard[product.name].id
  
  console.log(productCard)
}




function displayBag() {
  if (bagBtn.classList.toggle('enable')) {
     bagOffScreen.classList.toggle('enable');
  } else {
    bagOffScreen.classList.toggle('enable');
  }
} 



for (let i = 0; i < productBtn.length; i++) {
   productBtn[i].addEventListener('click', function(){
    sendProductToBag(products[i], [i])
    
  })
}

bagBtn.addEventListener('click', function(){
  displayBag()
})