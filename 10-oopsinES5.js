function Employee(name, age){
    //data member
    this.name = name
    this.age = age
    //member function
    showData = function(){
        console.log(this.name,this.age)
    }
}
var emp1 = new Employee("Priyanka",25)
emp1.showData()