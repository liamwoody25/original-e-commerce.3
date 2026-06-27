const productBtn = document.querySelector('.item-btn');

const bag = []

function addProduct(name, price) {
  const product = {
    name: name,
    price: price,
    quan: 1
  }
  bag.push(product)
 
}

function updateBag() {

  console.log(`i have ${bag.length} products in my bag`)

  for (let i = 0; i < bag.length; i++) {
   console.log(`${bag[i].name} ${bag[i].price} x ${bag[i].quan}`)
  }
  
}


  
  productBtn.addEventListener('click', function(){
  addProduct('Macbook', 899)
  addProduct('Macbook', 899)
  addProduct('android', 399)
  updateBag()
  })
