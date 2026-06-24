const productItem = document.getElementsByClassName('item-btn')
const cartBtn = document.querySelector('.bi-bag');
const bagContainer = document.querySelector('.cart-content');
const bagOffScreen = document.querySelector('.shopping-section')



const bag = []

 


function addProduct(i) {

   const product = {
    name: 'Macbook',
    price: 899,
    id: 0
  }

  
  bag.push(product)

  console.log(bag[0])

 
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


    // const productTitle = productItem[i].dataset.title
    // const itemId = productItem[i].dataset.itemId
    // const itemPrice = productItem[i].dataset.price
    // const cardImg = document.getElementsByClassName('card-image')[0].src