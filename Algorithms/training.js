function Person(name, dob){
    this.name = name;
    this.berthday = new Date(dob);
    this.calculaterAge = function(){
        const diff = Date.now() - this.berthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const brad = new Person('Aleksandr', '12-02-1986');
console.log(brad.calculaterAge());