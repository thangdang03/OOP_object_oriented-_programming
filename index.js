class person {
    //properties
    name ; age 
    // private properties
    #salary = Number
    constructor({name,age,salary}){
        this.name = name
        this.age = age
        this.#salary = salary
        
    }
    callName (){
        return this.name
    }


    getSalary (salary) {
        return this.#salary
    }

}
const thang = new person({name: 'dang van thang' , age: '20' , salary: 3000000});
console.log({thang})

class developer extends person{
    skill ;
    constructor({name,age,salary,skill}){
        super({name,age,salary})
        this.skill = skill
    }
    // 
    callName(){
        return {
            name: super.callName(),
            salary: super.getSalary(),
            age: this.age,
            skill: this.skill,

        }
    }
}

class manager extends person{
    skill ;
    constructor({name,age,salary,skill}){
        super({name,age,salary})
        this.skill = skill
    }
    callName(){
        return {
            name: super.callName(),
            salary: super.getSalary(),
            age: this.age,
            skill: this.skill,

        }
    }
}

const backend = new developer({name: 'thang',age: 20 , salary: 300000000,skill: 10})
console.log(backend.callName())