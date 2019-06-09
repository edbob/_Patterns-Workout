
class doIdo {
    constructor(model, controller){
        this.model = model;
        this.controller = controller;

        this.onLoad();
    };

    onLoad(){
        if(window.addEventListener){
            window.addEventListener('load', this.init.bind(this), false);
        }else if(window.AttachEvent){
            windows.AttachEvent('onload', this.init.bind(this));
        };
    };

    init(){
        this.form = document.contForm;
        this.addWords = this.form.ttitle;

        if (this.fstart.addEventListener) this.fstart.addEventListener("click", this.start.bind(this), false);
        if (this.fstart.attachEvent) this.fstart.attachEvent("onclick", this.start);


    }

    action(e) {
        let test = e;
        console.log(test);
    };
}
