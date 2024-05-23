<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>RAHVALIDEV - HOŞGELDİNİZ</title>
</head>
<body>

<p>
    Merhaba {{ $user->name }},
    <br>
    Hoşgeldiniz.
</p>

<p>
    Aşağıdaki butona tıklayarak mail adresinizi doğrulayınız.
</p>

<center>
    <a href="{{ route('verify',['token'=>$token]) }}">
        Mail adresimi doğrula
    </a>
</center>
</body>
</html>
