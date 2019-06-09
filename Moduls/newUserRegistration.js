//const Modul = {};
// (function () {
//     if (window.addEventListener) window.addEventListener("load", init, false);
//     else if (window.attachEvent) window.attachEvent("onload", init);
// })();

if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

function init() {
    registration.Fname.onchange = nameOnChange;
    registration.Lname.onchange = nameOnChange;
    registration.login.onchange = logOnChange;
    registration.pass.onchange = passOnChang;
    registration.againPass.onchange = againPassOnChang;
    registration.email.onchange = emailOnChang;
    registration.onsubmit = onsubmiHandler;
};
function validate(elem, pattern) {
    var res = elem.value.search(pattern);
    if (res == -1) elem.className = "invalid"; // установка CSS класса 
    else elem.className = "valid";
};

function nameOnChange() {
    var pattern = /[a-z]/;
    validate(this, pattern);
};
function logOnChange() {
    var pattern = /[a-z]/;
    validate(this, pattern);
};
function passOnChang() {
    var pattern = /[a-z0-9]{6,}/;
    validate(this, pattern);
};
function againPassOnChang() {
    var pass1 = registration.pass.value,
        pass2 = registration.againPass.value;
    var pattern = /[a-z0-9]{6,}/;
    validate(this, pattern);
    if (pass1 === pass2 && pass1.length != 0) {
        print("Пароль подтвержден!");
    } else if (pass1 !== pass2) {
        print("Пароль не совпадает!");
        this.className = "invalid";
    };
};
function emailOnChang() {
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(this, pattern);
};
function onsubmiHandler() {
    var invalid = false,
        radios = document.getElementsByName("sex"),
        cheked = false;
    for (var i = 0; i < registration.elements.length; ++i) {
        var e = registration.elements[i];
        // проверка типа элемента и наличия обработчика события onchange.
        if (e.type == "text" && e.onchange) {
            e.onchange(); // запуск события onchanhe
            if (e.className == "invalid") invalid = true;
        };
        if (e.type == "password" && e.onchange) {
            e.onchange(); // запуск события onchanhe
            if (e.className == "invalid") invalid = true;
        };
        if (e.type == "email" && e.onchange) {
            e.onchange(); // запуск события onchanhe
            if (e.className == "invalid") invalid = true;
        };
    };
    for (var i = 0; i < radios.length; i++) {
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                cheked = true;
                print("Пол " + radios[j].value);
                i += 1;
                break;
            };
        };
        if (!cheked) {
            print("Укажите свой пол!");
            break;
        };
    };
    if (invalid) {
        print("Допущены ошибки при заполнении формы.");
        return false; // отмена отправки формы.
    };
};
function getID(id) {
    return document.getElementById(id);
};
function print(message) {
    getID("errTex").innerHTML += message + "<br />";
}