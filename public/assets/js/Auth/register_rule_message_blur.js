document.addEventListener('DOMContentLoaded',function () {
    let btnRegister = document.querySelector('#btnRegister');
    let registerFrom = document.querySelector('#registerFrom');
    // registerform altındaki inputları getir.
    let registerFormInputs = document.querySelectorAll('#registerFrom input');

    // projelerde iki tip validation kural tipi vardır.
    // 1. validation kuralı : inputun içerisindeyken diğer inputa geçişte verilen uyarı
    // 2. validation kuralı : kayıt ol butonuna tıklandığında verilen uyarı

    let validation = {
        // Form kurallarımız
        rules :{
            // input id
            name:{
                // input isterleri
                required:true,
                minLength:2,
                maxLength:125,
            },
            // input id
            email:{
                // input isterleri
                required:true,
                minLength:2,
                maxLength:125,
                email: true,
            },
            // input id
            password:{
                // input isterleri
                required:true,
                minLength:8,
                maxLength:125,
                password: true,
            },
            // input id
            password_confirmation:{
                // input isterleri
                required:true,
                minLength:8,
                maxLength:125,
                password: true,
                // hangi elementi - password isimli karşılaştıracak
                compareElementId : "password",
            },
        },
        messages:{
            // input id
            name:{
                // input isterleri uyuşmadığında kullanıcıya açıklamaları
                required:"isim soyisim alanı zorunludur.",
                minLength:"isim soyisim alanı en az 2 karakter olmalıdır.",
                maxLength:"isim soyisim alanı en fazla 125 karakter olmalıdır.",
            },
            // input id
            email:{
                // input isterleri
                required:"email alanı zorunludur.",
                minLength:"email alanı en az 2 karakter olmalıdır.",
                maxLength:"email alanı en fazla 125 karakter olmalıdır.",
                email: "geçerli e-mail adresi giriniz.",
            },
            // input id
            password:{
                // input isterleri
                required:"parola alanı zorunludur.",
                minLength:"parola alanı en az 8 karakter olmalıdır.",
                maxLength:"parola alanı en fazla 125 karakter olmalıdır.",
                password: "En az 1 büyük karakter, 1 küçük karakter, 1 rakam, 1 özel karakter kullanınız.",
            },
            // input id
            password_confirmation:{
                // input isterleri
                required:"parola alanı zorunludur.",
                minLength:"parola alanı en az 8 karakter olmalıdır.",
                maxLength:"parola alanı en fazla 125 karakter olmalıdır.",
                password: "En az 1 büyük karakter, 1 küçük karakter, 1 rakam, 1 özel karakter kullanınız.",
                // hangi elementi - password isimli karşılaştıracak
                compareElementId : "parolalar eşleşmemektedir.",
            },
        },
    };

    let validationRules = validation.rules;
    let validationMessages = validation.messages;

    // V1 : form içerisindeki input değiştiğinde yapılacak işlemler
    // foreach ile her bir inputu sürekli dinliyoruz.
    registerFormInputs
        .forEach(function (input) {
            // input değişkenine dinleyici ekleyelim.
            // blur-ilgili input başka yere tıkladığında
            // yani ilgili inputun odağı gittiğinde
            // for each döndükçe registerdeki inputları logtaki gibi ele alacağız ve dinliyeceğiz
            input.addEventListener("blur",function (event) {

                // elementimiz : form input
                let element = event.target;
                // elementimizin divi - divin içerisine eleman ekleyebiliriz.
                let parentElement = element.parentElement;
                // elementin idsi
                let elementID = element.id;
                // elementin bir sonraki elemanı
                let nextElement = element.nextElementSibling;

                // uyarıları sildirme işlemleri
                let feedbackList = parentElement.querySelectorAll(".invalid-feedback");
                feedbackList.forEach(element => element.remove())

                // uyarı veren kırmızı çerçeve
                if (element.className.includes("is-invalid")){
                    element.classList.remove("is-invalid");
                }

                // property rules içerisinde var mı
                // herseferinde inputları gezdik idlerini aldık
                // inputun id'si kurallarımızda varmı
                // çünkü id le kurallarımızın isimleri aynı

                // ElementinIDsi kuralların (ValidationRules) içerisinde ekli mi ?
                if (validationRules.hasOwnProperty(elementID)){

                    // email, password ve password_confirmation dışında kalan validation işlemleri
                    // inputların required, minLength, maxLength... gibi kuralları
                    let elementValue = element.value.trim();

                    // bir objenin içerisine girip dönelim.
                    for(let fieldKey in validationRules[elementID]){
                        // kuralların içerisine girdikten sonra
                        // fieldkey değişkeni : name, email, password, password_confirmation olur.
                        // value'sunu da almak istersek  ör: name'in içindeki require,minlength ve değerini alırız.

                        let fieldKeyValue = validationRules[elementID][fieldKey]

                        // kuralımız required
                        // kuralımızın değeri true
                        // inputa birşey yazılmamış ise
                        if (fieldKey === "required" && fieldKeyValue && elementValue.length < 1){

                            // 3 kural uygumuyorsa - invalid class name'i gir. - etrafını kırmızı yapar
                            element.classList.add("is-invalid");

                            // 4 kural uymuyorsa mesaj gösterelim.
                            let invalidElementInfo = document.createElement("div");
                            invalidElementInfo.className = "invalid-feedback";
                            // oluşturtuğumuz mesaj divine id verelim.
                            invalidElementInfo.id = elementID+"-feedback-"+fieldKey;
                            // hata içeriği - geçerli mail adresi girin uyarısı
                            invalidElementInfo.textContent = validationMessages[elementID].required;
                            // elementin neresine ekleyecek - bitimine
                            // yeni oluşturduğumuz elementi, elementimizin sonuna ekleyecek.
                            // mesaj inputun altında görünecek
                            element.insertAdjacentElement("afterend",invalidElementInfo);
                        }

                            // HATA TEMIZLEME
                            // kuralımız required
                            // kuralımızın değeri true
                        // inputa birşey yazılmış ise
                        else if(fieldKey === "required" && fieldKeyValue && elementValue.length>=1){
                            let invalidElementInfo = document.querySelector("#"+elementID+"-feedback-"+fieldKey);

                            if (invalidElementInfo){
                                invalidElementInfo.remove();
                            }
                        }

                        // kuralımız minLength
                        // kuralımızın değeri true
                        // inputa birşey yazılmamış ise
                        if (fieldKey === "minLength" && fieldKeyValue && elementValue.length < fieldKeyValue){
                            // 3 kural uygumuyorsa - invalid class name'i gir. - etrafını kırmızı yapar
                            element.classList.add("is-invalid");


                            // 4 kural uymuyorsa mesaj gösterelim.
                            let invalidElementInfo = document.createElement("div");
                            invalidElementInfo.className = "invalid-feedback";
                            // oluşturtuğumuz mesaj divine id verelim.
                            invalidElementInfo.id = elementID+"-feedback-"+fieldKey;
                            // hata içeriği - geçerli mail adresi girin uyarısı
                            invalidElementInfo.textContent = validationMessages[elementID].minLength;
                            // elementin neresine ekleyecek - bitimine
                            // yeni oluşturduğumuz elementi, elementimizin sonuna ekleyecek.
                            // mesaj inputun altında görünecek
                            element.insertAdjacentElement("afterend",invalidElementInfo);
                        }

                            // HATA TEMIZLEME
                            // kuralımız minLength
                            // kuralımızın değeri true
                        // inputa birşey yazılmış ise
                        else if(fieldKey === "minLength" && fieldKeyValue && elementValue.length >= fieldKeyValue){
                            let invalidElementInfo = document.querySelector("#"+elementID+"-feedback-"+fieldKey);

                            if (invalidElementInfo){
                                invalidElementInfo.remove();
                            }
                        }

                        // kuralımız minLength
                        // kuralımızın değeri true
                        // inputa birşey yazılmamış ise
                        if (fieldKey === "maxLength" && fieldKeyValue && elementValue.length > fieldKeyValue){
                            // 3 kural uygumuyorsa - invalid class name'i gir. - etrafını kırmızı yapar
                            element.classList.add("is-invalid");


                            // 4 kural uymuyorsa mesaj gösterelim.
                            let invalidElementInfo = document.createElement("div");
                            invalidElementInfo.className = "invalid-feedback";
                            // oluşturtuğumuz mesaj divine id verelim.
                            invalidElementInfo.id = elementID+"-feedback-"+fieldKey;
                            // hata içeriği - geçerli mail adresi girin uyarısı
                            invalidElementInfo.textContent = validationMessages[elementID].maxLength;
                            // elementin neresine ekleyecek - bitimine
                            // yeni oluşturduğumuz elementi, elementimizin sonuna ekleyecek.
                            // mesaj inputun altında görünecek
                            element.insertAdjacentElement("afterend",invalidElementInfo);
                        }

                            // HATA TEMIZLEME
                            // kuralımız minLength
                            // kuralımızın değeri true
                        // inputa birşey yazılmış ise
                        else if(fieldKey === "maxLength" && fieldKeyValue && elementValue.length <= fieldKeyValue){
                            let invalidElementInfo = document.querySelector("#"+elementID+"-feedback-"+fieldKey);

                            if (invalidElementInfo){
                                invalidElementInfo.remove();
                            }
                        }
                    }

                    // EMAIL INPUT KONTROL ve HATA GOSTERIMI
                    // 1. kontrol : element email ise
                    // 2. kontrol : email elementinin email kuralı var ise
                    // 3. kontrol : geçerli bir email adresi girilmediyse
                    if (validationRules[elementID].hasOwnProperty("email")
                        && validationRules[elementID].email
                        && !validateEmail(element.value.trim())){
                            // 3 kural uygumuyorsa - invalid class name'i gir. - etrafını kırmızı yapar
                            element.classList.add("is-invalid");


                            // 3 kural uymuyorsa mesaj gösterelim.
                            let invalidElementInfo = document.createElement("div");
                            invalidElementInfo.className = "invalid-feedback";
                            // oluşturtuğumuz mesaj divine id verelim.
                            invalidElementInfo.id = elementID+"-feedback";
                            // hata içeriği - geçerli mail adresi girin uyarısı
                            invalidElementInfo.textContent = validationMessages[elementID].email;
                            // elementin neresine ekleyecek - bitimine
                            // yeni oluşturduğumuz elementi, elementimizin sonuna ekleyecek.
                            // mesaj inputun altında görünecek
                            element.insertAdjacentElement("afterend",invalidElementInfo);


                    }
                    // PASSWORD INPUT KONTROL ve HATA GOSTERIMI
                    // 1. kontrol : element parola ise
                    // 2. kontrol : parola elementinin parola kuralı var ise
                    // 3. kontrol : geçerli bir parola girilmediyse
                    else if (validationRules[elementID].hasOwnProperty("password")
                        && validationRules[elementID].password
                        && !validatePassword(element.value.trim())) {

                        // 3 kural uygumuyorsa - invalid class name'i gir. - etrafını kırmızı yapar
                        element.classList.add("is-invalid");


                        // 3 kural uymuyorsa mesaj gösterelim.
                        let invalidElementInfo = document.createElement("div");
                        invalidElementInfo.className = "invalid-feedback";
                        // oluşturtuğumuz mesaj divine id verelim.
                        invalidElementInfo.id = elementID+"-feedback";
                        // hata içeriği - geçerli mail adresi girin uyarısı
                        invalidElementInfo.textContent = validationMessages[elementID].password;
                        // elementin neresine ekleyecek - bitimine
                        // yeni oluşturduğumuz elementi, elementimizin sonuna ekleyecek.
                        // mesaj inputun altında görünecek
                        element.insertAdjacentElement("afterend",invalidElementInfo);
                    }
                    // PASSWORD_CONFIRMATION INPUT KONTROL ve HATA GOSTERIMI
                    // 1. kontrol : element PASSWORD_CONFIRMATION ise
                    // 2. kontrol : PASSWORD_CONFIRMATION elementinin password kuralı var ise
                    // 3. kontrol : PASSWORD_CONFIRMATION elementinin eşleşmne kuralı var ise

                    else if (validationRules[elementID].hasOwnProperty("compareElementId")
                        && validationRules[elementID].password
                        && validationRules[elementID].compareElementId) {

                        // 4. kontrol : geçerli bir parola girilmediyse
                        if (!validatePassword(element.value.trim())){
                            // 3 kural uygumuyorsa - invalid class name'i gir. - etrafını kırmızı yapar
                            element.classList.add("is-invalid");


                            // 4 kural uymuyorsa mesaj gösterelim.
                            let invalidElementInfo = document.createElement("div");
                            invalidElementInfo.className = "invalid-feedback";
                            // oluşturtuğumuz mesaj divine id verelim.
                            invalidElementInfo.id = elementID+"-feedback-1";
                            // hata içeriği - geçerli mail adresi girin uyarısı
                            invalidElementInfo.textContent = validationMessages[elementID].password;
                            // elementin neresine ekleyecek - bitimine
                            // yeni oluşturduğumuz elementi, elementimizin sonuna ekleyecek.
                            // mesaj inputun altında görünecek
                            element.insertAdjacentElement("afterend",invalidElementInfo);
                        }

                        // parola elementin değerini alallım.
                        let passwordValue = document
                            .querySelector("#"+validationRules[elementID]
                                .compareElementId).value;

                        if (!checkPasswordsMatch(passwordValue, element.value.trim())){

                            // 3 kural uygumuyorsa - invalid class name'i gir. - etrafını kırmızı yapar
                            element.classList.add("is-invalid");


                            // 4 kural uymuyorsa mesaj gösterelim.
                            let invalidElementInfo = document.createElement("div");
                            invalidElementInfo.className = "invalid-feedback";
                            // oluşturtuğumuz mesaj divine id verelim.
                            invalidElementInfo.id = elementID+"-feedback-2";
                            // hata içeriği - geçerli mail adresi girin uyarısı
                            invalidElementInfo.textContent = validationMessages[elementID].compareElementId;
                            // elementin neresine ekleyecek - bitimine
                            // yeni oluşturduğumuz elementi, elementimizin sonuna ekleyecek.
                            // mesaj inputun altında görünecek
                            element.insertAdjacentElement("afterend",invalidElementInfo);
                        }
                    }

                }
            });
        });

    function validateEmail(email){
        // ^ Başlar
        // $ Biter
        // () - @ e kadar olan parantez
        // . - @ ile . arasını kontrol et
        // () - .'dan sonrasını kontrol et

        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // gönderilen emaili kontrol et
        return regex.test(email)
    }

    function validatePassword(password) {
        //const minLength = validationRules['password']['minLength'];
        const minLength = validationRules.password.minLength;
        const maxLength = validationRules.password.maxLength;
        const containsUppercase = /[A-Z]/.test(password);
        const containsLovercase = /[a-z]/.test(password);
        const containsNumber = /\d/.test(password);
        const containsSpecialChar = /[!@#$%^&*(),.?"!'{}|<>]/.test(password);
        return password.length >= minLength &&
               password.length <= maxLength &&
               containsUppercase &&
               containsLovercase &&
               containsNumber &&
               containsSpecialChar;
    }

    function checkPasswordsMatch(password,confirmPassword) {
        return password === confirmPassword;
    }
});
