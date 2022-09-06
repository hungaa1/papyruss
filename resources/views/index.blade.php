<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="{{asset('assets/clients/css/index.css')}}" />
    <link rel="stylesheet" href="{{asset('assets/clients/css/body.css')}}" />
    <link rel="stylesheet" href="{{asset('assets/clients/css/product.css')}}" />
    <script src="{{asset('assets/clients/js/jquery-3.6.0.min.js')}}">
    </script>
    <script src="{{asset('assets/clients/js/bootstrap.min.js')}}"></script>
    <link rel="stylesheet" href="{{asset('assets/clients/css/bootstrap.min.css')}}" />
    <style>
    .carousel-item img {
        width: 100%;
        background-size: cover;
    }
    </style>
    <title>Document</title>
</head>

<body>
    <div class="header">
        <a href="/" class="logo"><img src="/assets/clients/images/logo1.png" alt="papyrus" /></a>
        <div class="auth">
            <a href="auth/login" id="login">Login</a><a href="auth/register">Register</a>
            <p id="logout"></p>
        </div>

        <div class="menu">
            <div class="home"><a>Home</a></div>
            <div class="product10">Products
                <ul class="children">
                    <li><a href="#product" type="all">All</a></li>
                    <li><a href="#product" type="BirthDay">Birth Date</a></li>
                    <li><a href="#product" type="Anniversary"> Anniversary</a></li>
                    <li><a href="#product" type="Friendship">Friendship</a></li>
                    <li><a href="#product" type="Newyear">New year</a></li>
                    <li><a href="#product" type="MotherDay">Mother's Day</a></li>
                </ul>
            </div>
            <div class="top">Top Selling Section</div>
            <div class="sale">Sales</div>
            <div class="gift">Gift Items</div>
            <div class="contact">Contact us</div>
            <div class="about">About us</div>
        </div>
        <div class=" search"></div>
        <div class="carts"><img src="/assets/clients/images/cart.webp" alt="Cart" />
            <p class="cartsNumber"></p>
            <div class="helloCart ">

            </div>
        </div>
        <div class="showUser"><img src="/assets/clients/images/user.png" alt="User" />
            <p>5</p>
        </div>
        <div class="down"></div>
        <div class="down1"></div>

    </div>

    <div id="body">
    </div>
    <div class='addProductBar'>
        <div class="productDetail">

        </div>
    </div>
    <div class="background"></div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>

</script>
<script src="{{asset('assets/clients/js/main.js')}}">
</script>

<script src="{{asset('assets/clients/js/carts.js')}}"></script>
<script src="{{asset('assets/clients/js/addProduct.js')}}">

</script>

</html>