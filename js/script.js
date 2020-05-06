let cartRow = document.querySelectorAll('.cart-row');
let rmBtn = document.querySelectorAll('.btn-danger');
console.log(rmBtn)



rmBtn.forEach((cartItem) => {
    cartItem.addEventListener('click', (event) => {
        let btnClicked = event.target;
        btnClicked.parentElement.parentElement.remove();
    })
})
