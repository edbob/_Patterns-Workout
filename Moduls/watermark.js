var Modul = {};
Modul.watermark = function (form, name, value) {
    var watermark = value,
        input = form[name];
    initInput();

    input.onfocus = function () {
        if (input.value == watermark) {
            input.value = "";
            input.style.color = "black";
            input.style.fontStyle = "normal";
        }
    }
    input.onblur = function () {
        if (input.value == "") {
            initInput();
        }
    }

    function initInput() {
        input.value = watermark;
        input.style.color = "gray";
        input.style.fontStyle = "italic";
    }
};
window.onload = function () {
    var form = document.forms[0];
    var login = form.login.dataset.watermark;
    var pass = form.pass.dataset.watermark;
    var AgPass = form.AgPass.dataset.watermark;
    Modul.watermark(form, "login", login);
    Modul.watermark(form, "pass", pass);
    Modul.watermark(form, "AgPass", AgPass);
}