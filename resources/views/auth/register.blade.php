<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{asset('assets/clients/css/bootstrap.min.css')}}" />

    <title>Document</title>
</head>

<body>
    <div class="container text-center">
        @error('messageR')
        <span class="alert alert-danger">{{messageR}}</span>
        @enderror
        <h3>Register</h3>

        <form class="mt-4" method="post" action="">
            @csrf
            <div class="form-group m-4"><input type="text" class="form-control " placeholder="full name" name="name" />
                @error('name')
                <span style="color:red">{{$message}}</span>
                @enderror
            </div>
            <div class="form-group m-4"><input type="text" class="form-control " placeholder="phone" name="phone" />
                @error('phone')
                <span style="color:red">{{$message}}</span>
                @enderror
            </div>
            <div class="form-group m-4"><input type="text" class="form-control " placeholder="email" name="email" />
                @error('email')
                <span style="color:red">{{$message}}</span>
                @enderror
            </div>
            <div class="form-group m-4"><input type="text" class="form-control " placeholder="password"
                    name="password" />
                @error('password')
                <span style="color:red">{{$message}}</span>
                @enderror
            </div>
            <div class="form-group m-4"><input type="text" class="form-control " placeholder="re-type Password"
                    name="retypePassword" />
                @error('retypePassword')
                <span style="color:red">{{$message}}</span>
                @enderror
            </div>
            <input type="submit" class="btn btn-primary " value="Login" />
        </form>
    </div>
    <script src="{{asset('assets/clients/js/bootstrap.min.js')}}"></script>

</body>

</html>