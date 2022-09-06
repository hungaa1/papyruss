<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="{{asset('assets/clients/css/bootstrap.min.css')}}" />
    <script src="{{asset('assets/clients/js/jquery-3.6.0.min.js')}}"></script>
    <title>Document</title>
</head>

<body>
    <div class="container text-center">
        <h3>Login</h3>
        <form class=" mx-md-4 " method="POST" action="{{route('login')}}">
            <div class="form-group m-4 "><input class="form-control" type="text" name="email" placeholder="email" />
                <p style="color: red" class="email"></p>
            </div>
            <div class="form-group m-4"><input class="form-control" type="text" placeholder="password"
                    name="password" />
                <p style="color: red" class="password"></p>

            </div>
            <p class="check" style="color: red"></p>
            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <input type="submit" class="btn btn-primary " value="Login" />
                <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">
            </div>
        </form>
    </div>
    <script src="{{asset('assets/clients/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('assets/clients/js/login.js')}}"></script>


</body>


</html>