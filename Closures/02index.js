window.onload = function () {

    function changeSize(size) {
        return function () {
            document.body.style.fontSize = size + "px";
        };
    };
    
    let size16 = changeSize(16);
    let size20 = changeSize(20);
    let size24 = changeSize(24);

    getId('size-16').onclick = size16;

    getId('size-20').onclick = size20;

    getId('size-24').onclick = size24;

    function getId(id) {
        return document.getElementById(id);
    };
};