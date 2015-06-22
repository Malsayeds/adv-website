<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ elixir('css/app.css') }}" rel="stylesheet">
        <title>@yield('title')</title>
</head>
<body>
<div class="container">
    @yield('content')
</div>
@yield('footer')
</body>
</html>