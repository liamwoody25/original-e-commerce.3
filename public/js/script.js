const productItem = document.getElementsByClassName('item-btn')



function addProduct(i) {
  const productTitle = productItem[i].dataset.title
  const itemId = productItem[i].dataset.itemId
  const itemPrice = productItem[i].dataset.price

  
  console.log(productTitle, itemId, itemPrice)
}


for(let i = 0; i < productItem.length; i++){
  productItem[i].addEventListener('click', function(){
  addProduct(i)

  })
}
