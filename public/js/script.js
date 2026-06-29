const productBtn = document.querySelector('.item-btn');
const bagContainer = document.querySelector('.cart-content')
const bagBtn = document.querySelector('.bi-bag');
const bagOffScreen = document.querySelector('.shopping-section')





const bag = []

function addProduct(name, price) {
  for (let i = 0; i < bag.length; i++) {
    if (bag[i].name === name) {
      bag[i].quan += 1
      return
    }
  }
  const product = {
    name: name,
    price: price,
    quan: 1
  }
  bag.push(product)

 
}

function removeProductFromBag(name, quan = 0) {
  for(let i = 0; i < bag.length; i += 1){
    if (bag[i].name === name){
      if (quan > 0) {
        bag[i].quan -= quan
      }
      

      if (bag[i].quan < 1 || quan === 0 ) {
        bag.splice(i, 1)
      }
      return
    } 
  }
}



function updateBag() {
  let quan = 0;

  for (let i = 0; i < bag.length; i++) {
    quan += bag[i].quan
  }

  console.log(`i have ${bag.length} products in my bag`)

  let items = ''
  for (let i = 0; i < bag.length; i++) {
  //  console.log(`${bag[i].name} ${bag[i].price} x ${bag[i].quan}`)
   items += `
    <article class="bag-product-card">
      <div class="item-card-content">
        <img class="bag-item-img" src="">
      <div class="product-content-container">
        <h3>${bag[i].name}</h3>
        <p>${bag[i].price}</p>
        <span>x${bag[i].quan}</span>
      </div>
      </div>
    </article>
   `
  }

  bagContainer.innerHTML = items

 
  console.log(`total in bag is ${totalPrice()}`)
  
}

function totalPrice() {

   let total = 0

  for (let i = 0; i < bag.length; i++) {
    total += bag[i].price * bag[i].quan
    return
  }
  

}


function displayBag() {
  if (bagBtn.classList.toggle('enable')) {
    bagOffScreen.classList.toggle('enable')
  } else {
    bagOffScreen.classList.toggle('enable')
  }
}

  
  productBtn.addEventListener('click', function(){
  addProduct('Macbook', 899)
 
  addProduct('android', 399)
   addProduct('Macbook', 899)
   addProduct('Macbook', 899)
   addProduct('android', 399)
   updateBag()

    removeProductFromBag('Android', 1)
   removeProductFromBag('Macbook')


   console.log(bagContainer)
    updateBag()
  })


  bagBtn.addEventListener('click', function(){
    displayBag()
  })