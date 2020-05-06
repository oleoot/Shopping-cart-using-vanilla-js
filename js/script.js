if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    let rmBtn = document.querySelectorAll('.btn-danger');
    rmBtn.forEach((cartItem) => {
        cartItem.addEventListener('click', removeCartItem)
    })

    let quantityInput = document.querySelectorAll('.cart-quantity-input')
    quantityInput.forEach((input) => {
        input.addEventListener('change', quantityChanged)
    })


    let addToCartBtn = document.querySelectorAll(".shop-item-button")
    addToCartBtn.forEach((button) => {
        button.addEventListener('click', addItemToCartClicked)
    })
    document.querySelectorAll('.btn-purchase')[0].addEventListener('click', purchaseClicked)


}
function purchaseClicked() {
    alert('Thank you for your purchase')
    let cartItems = document.querySelectorAll('.cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}


function removeCartItem(event) {
    let btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove();
    updateCartTotal()
}
function quantityChanged(event) {
    let inputValue = event.target
    if (isNaN(inputValue.value) || inputValue.value <= 0) {
        inputValue.value = 1
    }
    updateCartTotal();
}
function addItemToCartClicked() {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.querySelectorAll('.shop-item-title')[0].innerText
    let price = shopItem.querySelectorAll('.shop-item-price')[0].innerText
    let imgSrc = shopItem.querySelectorAll('.shop-item-image')[0].src
    addItemToCart(title, price, imgSrc)
    updateCartTotal();
}
function addItemToCart(title, price, imgSrc) {
    let cartRow = document.createElement('div');
    cartRow.classList.add("cart-row")
    let cartItems = document.querySelectorAll('.cart-items')[0];
    let cartItemNames = cartItems.querySelectorAll('.cart-item-title')
    cartItemNames.forEach((item) => {
        if (item.innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    })
    let cartRowContents = `
    <div class="cart-item cart-column">
    <img class="cart-item-image" src=${imgSrc} width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="2">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.querySelectorAll('.btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.querySelectorAll('.cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    let cartItemContainer = document.querySelectorAll('.cart-items')[0];
    let cartRows = cartItemContainer.querySelectorAll('.cart-row')
    let total = 0;
    cartRows.forEach((cartRows) => {
        let priceElement = cartRows.querySelectorAll('.cart-price')[0];
        let quantityElement = cartRows.querySelectorAll('.cart-quantity-input')[0];
        let price = +priceElement.innerText.replace('$', '')
        let quantity = quantityElement.value
        total += price * quantity
        console.log(total)
    })
    document.querySelectorAll('.cart-total-price')[0].innerText = '$' + Math.round(total * 100) / 100;

}
