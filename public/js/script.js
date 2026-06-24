const productItem = document.getElementsByClassName('item-btn')
const cartBtn = document.querySelector('.bi-bag');
const bagContainer = document.querySelector('.cart-content');
const bagOffScreen = document.querySelector('.shopping-section')



const bag = []



function addProduct(i) {
  const productTitle = productItem[i].dataset.title
  const itemId = productItem[i].dataset.itemId
  const itemPrice = productItem[i].dataset.price
  const cardImg = document.getElementsByClassName('card-image')[0].src
  

  const ProductCard = bag.find(function(cardProduct){
    return cardProduct.id === itemId
  }) 

  // console.log(productTitle, itemId, itemPrice)
  console.log(ProductCard)
  


  

 
}

function displayBag() {
  if (cartBtn.classList.toggle('enable')){
    bagOffScreen.classList.toggle('enable');
  } else {
    bagOffScreen.classList.toggle('enable');
  }
}





for(let i = 0; i < productItem.length; i++){
  productItem[i].addEventListener('click', function(){
  addProduct(i)
  
  })
}

cartBtn.addEventListener('click', function(){
 displayBag()
})


