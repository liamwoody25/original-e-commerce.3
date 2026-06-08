const productBtn = document.getElementsByClassName('item-btn');
const bagBtn = document.querySelector('.bi-bag');
const bagOffScreen = document.querySelector('.shopping-section')
const bagContainer = document.querySelector('.cart-content');

// const bagProducts = [
//   {
//     name: 'Macbook',
//     price: 899,
//     id: 0,
//     image: './public/assets/images/pexels-dlxmedia-hu-maccbook.png'
//   },
//   {
//     name: 'Android',
//     price:399,
//     id: 0,
//     image: './public/assets/images/andrey-matveev-msartwatch-unsplash.png'
//   }

// ]

let bagOutput = [
  {bagQuan: 0},
  {bagTotal: 0}
];


// this function sends the product to the cart when the purchase btn is clicked
function sendProductToBag(i){
  const bagOutput = document.getElementById('bag-output');
  let displayQuantity = Number(bagOutput.innerText) + 1

  if (displayQuantity > 10 ) {
    displayQuantity = 0;
  }

  bagOutput.innerText = displayQuantity
}




function addProduct(i) {
  const itemName = document.getElementsByClassName('product-title')[i].textContent
  const itemPrice = document.getElementsByClassName('product-price')[i].textContent
  const productImg = document.getElementsByClassName('card-image')[i].src
  
  

  const cardProduct = document.createElement('article');
  cardProduct.classList.add('product-item');

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img');
  cardImg.src = productImg

  const productContent = document.createElement('div');
  productContent.classList.add('product-content-container');

  const productName = document.createElement('h3');
  productName.textContent = itemName

  const cardPrice = document.createElement('p');
  cardPrice.textContent = `${itemPrice}`

  const quantityBtn = document.createElement('div')
  quantityBtn.classList.add('quantity-btn-content')

  const decreaseBtn = document.createElement('button');
  decreaseBtn.classList.add('decrease-btn');
  decreaseBtn.innerHTML = '<i class="bi bi-dash-square"></i>'

  const cardOutput = document.createElement('span');
  cardOutput.classList.add('card-output');
  cardOutput.innerHTML

  const insertBtn = document.createElement('button');
  insertBtn.classList.add('increase-btn');
  insertBtn.innerHTML = '<i class="bi bi-plus-square"></i>'


  

  insertBtn.addEventListener('click', function(){
    const productQuantity = document.getElementsByClassName('.card-output')[i];
    const quantityOutput = Number(productQuantity.innerText) + 1

    if (quantityOutput > 10 ){
      quantityOutput = 0
    }

    quantityOutput.innerText = productQuantity
  })


  quantityBtn.append(decreaseBtn, cardOutput, insertBtn )
  productContent.append(productName, cardPrice)
  cardProduct.append(cardImg, productContent, quantityBtn)
  bagContainer.appendChild(cardProduct)
  console.log(cardProduct)


}



// this function displays the shopping bag to the screen
function displayBag() {
  if (bagBtn.classList.toggle('enable')) {
    bagOffScreen.classList.toggle('enable');
  } else {
    bagOffScreen.classList.toggle('enable');
  }
}

for (let i = 0; i < productBtn.length; i++) {
   productBtn[i].addEventListener('click', function(){
    sendProductToBag(i)
    addProduct(i)
  })
}

bagBtn.addEventListener('click', function(){
 displayBag()
})