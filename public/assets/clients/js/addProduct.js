const check = false
if (JSON.parse(localStorage.getItem('auth'))) {
    console.log(JSON.parse(localStorage.getItem('auth')).admin);
    if (JSON.parse(localStorage.getItem('auth')).checked == true) {
        $('#login').text(JSON.parse(localStorage.getItem('auth')).name)
        if (JSON.parse(localStorage.getItem('auth')).admin == 1) {
            console.log(JSON.parse(localStorage.getItem('auth')).admin);
            const div = '<div class="addProduct">Add Product</div>'
            $('.menu').append(div)
        }
    }
}
if ($('#login').text() == JSON.parse(localStorage.getItem('auth')).name) {
    $('#login').addClass('hoverLogin')
    $('#logout').addClass('logout')
    $('#logout').text('Logout')
    $('.logout').on('click', function () {
        localStorage.setItem('auth', false)
        window.location.reload()
    })

} else {
    $('#login').removeClass('hoverLogin')
    $('#logout').removeClass('logout')
    $('#logout').text('')
}
scroll()
function scroll() {
    document.onscroll = () => {
        console.log(window.scrollY);
        const scrollY = window.scrollY || document.documentElement.scrollTop
        if (scrollY >= 148) {
            $('.header').addClass('up')
            $('.down').addClass('pull');
            $('.down').text('Pull Down')
            $('.pull').on('click', function () {
                $('.header').css('top', '0px')
                $('.down1').addClass('check')
                $('.check').text('Pull Up')
                $('.down').removeClass('pull');
                $('.check').on('click', () => {
                    $('.down').addClass('pull')
                    $('.down1').removeClass('check');
                    $('.header').css('top', '-148px')
                })
            })
        } else {
            $('.header').removeClass('up')
            $('.down').removeClass('pull');
            $('.down1').removeClass('check');
            $('.down1').text('')
            $('.header').css('top', '-148px')
            $('.down').text('')
        }
    }
}
$('.showUser').on('click', () => {
    if (JSON.parse(localStorage.getItem('auth')) == false || !localStorage.getItem('auth')) {
        window.location.href = 'auth/login';
    }
})
productDetail.classList.remove("showDetails");

const addProduct = query('.addProduct');
const addBar = query('.addProductBar')
if (addProduct) {
    $('.addProduct').on('click', function () {

        addBar.classList.add("showAddProduct");
        const div = `
            <div class="adds">
                <h3>Add Product</h3>
                <div class="formAdd">
                    <form method="post" action="">
                        <div class="formAddProduct"><input type="text" name="name" placeholder="Name" /></div>
                        <div class="formAddProduct"><input type="text" name="price" placeholder="Price" /></div>
                        <div class="formAddProduct"><input type="text" name="currentPrice" placeholder="currentPrice" /></div>
                        <div class="formAddProduct"><input type="text" name="image" placeholder="Image" /></div>
                        <div class="formAddProduct"><input type="text" name="type" placeholder="Type" /></div>
                        <div class="formAddProduct"><input type="number" name="inumber" placeholder="Inventory Number" /></div>
                        <div class="formAddProduct"><input type="number" name="qSold" placeholder="Quantity Sold" /></div>
                        <div class="formAddProduct"><input type="text" name="sale" placeholder="Sale" /></div>
                        <div class="formAddProduct"><textarea placeholder="Description"></textarea></div>
                        <button class="btnAdd">Add</button>
                        <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">

                    </form>
                </div>
            </div>
        `
        addBar.insertAdjacentHTML('beforeend', div)
        const background = query(".background");
        background.classList.toggle("show", !checkBackground);
        background.onclick = function () {
            background.classList.remove("show");
            addBar.innerHTML = ''
        };
        $('.formAdd form').on('submit', (e) => {
            e.preventDefault();
            const name = $('input[name="name"]').val()
            const price = $('input[name="price"]').val()
            const currentPrice = $('input[name="currentPrice"]').val()
            const image = $('input[name="image"]').val()
            const type = $('input[name="type"]').val()
            const inumber = $('input[name="inumber"]').val()
            const qSold = $('input[name="qSold"]').val()
            const sale = $('input[name="sale"]').val()
            const description = $('textarea').val()
            const token = $('#token').val()
            console.log(token);
            $.ajax({
                url: '/addProduct',
                type: 'POST',
                headers: {
                    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                },
                data: {
                    name: name,
                    price: price,
                    currentPrice: currentPrice,
                    image: image,
                    type: type,
                    inventoryNumber: inumber,
                    quantitySold: qSold,
                    sale: sale,
                    description: description

                },
                success: function (data) {
                    if (data) {
                        alert('Add Successfully')
                    } else {
                        alert('Add Failed')
                    }
                }
            })
        })

    })


}
