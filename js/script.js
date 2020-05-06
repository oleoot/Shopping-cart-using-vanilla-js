
let rmBtn = document.querySelectorAll('.btn-danger');

rmBtn.forEach((cartItem) => {
    cartItem.addEventListener('click', (event) => {
        let btnClicked = event.target;
        btnClicked.parentElement.parentElement.remove();
        updateCartTotal()
    })
})

let quantityInput = document.querySelectorAll('.cart-quantity-input')
quantityInput.forEach((input) => {
    input.addEventListener('change', (event) => {
        let inputValue = event.target
        if (isNaN(inputValue.value) || inputValue.value <= 0) {
            inputValue.value = 1
        }
        updateCartTotal();
    })

})


updateCartTotal = () => {
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
