const Animals = {
    eats: true,
    eyes: true,
};

const Ribbet = {
    jumping: true,
    swim: false,

    name: function(name){
        this.id(name)
    },

    color: function(col){
        this.id(col)
    },

    names: function(){
        for(methods in this){
          this.id(methods);  
        }
    },

    id: function(id){
        console.log(id)
    },
};

Ribbet.prototype = Animals;
Ribbet.name("Banny");
Ribbet.name("Boby");
Ribbet.color("RED");
Ribbet.names();


