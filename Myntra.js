let bagItems;
onLoad();

function onLoad()
{
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHomePage();
displayBagItemCount()
}
function addToBag(itemId)
{
     bagItems.push(itemId);
     localStorage.setItem('bagItems' , JSON.stringify(bagItems));
     displayBagItemCount();
}

function displayBagItemCount()
{
  let bagItemsCountElement = document.querySelector('.bag-item-count');
  if(bagItems.length > 0)
    {
      bagItemsCountElement.style.visibility = 'visible';
      bagItemsCountElement.innerHTML = bagItems.length;
    }
    else{
      bagItemsCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage()
{
let itemContainerElements = document.querySelector('.items-container');
if(! itemContainerElements)
  {
    return;
  }
let innerHTML = '';
items.forEach(item => {
  innerHTML += ` 
<div class="item-container">
        <img class="item-img" src="${item.image}" alt="item image">
        <div class="ratings">
           ${item.rating.stars}⭐|${item.rating.count}
       </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs${item.current_price}<span>
          <span class="original-price">Rs${item.original_price} </span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick = "addToBag(${item.id})">Add to Bag</button>
      </div>   `
  
});

itemContainerElements.innerHTML = innerHTML ;
}

