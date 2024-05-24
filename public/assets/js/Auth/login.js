document.addEventListener('DOMContentLoaded',function () {
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let btnLogin = document.querySelector('#btnLogin');
    let loginForm = document.querySelector('#loginForm');
    btnLogin.addEventListener('click',function () {
        // geçerli email girilmediğinde
        if (!validateEmail(email.value)){
            Swal.fire({
                title: "Uyarı",
                text: "Geçerli mail adresi giriniz.",
                icon: "warning"
            });

        }
        // parola alanı 8 karakten küçük ise
        else if(password.value.length<8){
            Swal.fire({
                title: "Uyarı",
                text: "Geçerli parola giriniz - en az 8 karakter.",
                icon: "warning"
            });
        }
        // tüm koşullar sağlanıyor ise
        else{
            loginForm.submit();
        }
    });


    function validateEmail(email){
        // ^ Başlar
        // $ Biter
        // () - @ e kadar olan parantez
        // . - @ ile . arasını kontrol et
        // () - .'dan sonrasını kontrol et
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email) // gönderilen emaili kontrol et
    }
});
