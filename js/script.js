let rmBtn = document.querySelectorAll('.btn-danger');



rmBtn.forEach((cartItem) => {
    cartItem.addEventListener('click', (event) => {
        let btnClicked = event.target;
        btnClicked.parentElement.parentElement.remove();
        updateCartTotal()
    })
})

updateCartTotal = () => {
    let cartItemContainer = document.querySelectorAll('.cart-items')[0];
    let cartRows = cartItemContainer.querySelectorAll('.cart-row')
    cartRows.forEach((cartRows) => {
        let priceElement = cartRows.querySelectorAll('.cart-price')[0];
        let quantityElement = cartRows.querySelectorAll('.cart-quantity-input')[0];
        let price = +priceElement.innerText.replace('$', '')
        let quantity = quantityElement.value
        console.log(price, quantity)
    })
}
