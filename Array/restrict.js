
(function () {
    if (window.addEventListener)
        window.addEventListener("load", init, false);
    else if (window.attachEvent)
        window.attachEvent("onload", init);
    //Event click 
    function init() {
        let fSearch = _getId("restrict").innerHTML;
        //let caunt
        const Arr = [];
        Arr.push(fSearch.split(' '));
        if (Arr[0].length > 15) {
            _getId("restrict").innerHTML = Arr[0].slice(0, 15);
        };

    };

    function _getId(id) {
        return document.getElementById(id);
    };

})();