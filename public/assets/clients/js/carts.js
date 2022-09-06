const background = query(".background");
const cart = query('.helloCart')







$('.carts').on('click', () => {
    background.classList.toggle("show", !checkBackground);
    cart.classList.add('resultCarts')
})
$('.background').on('click', function () {
    cart.classList.remove('resultCarts')
    background.classList.remove("show");
});
