class Pet {
    constructor(animal, age, breed, sound){
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    // Getter / Setter methods (should not be set in constructor method as these values are DYNAMIC and will change!)
    get activity(){
        let time_now = new Date();
        // let time_min= new Date();
        if (time_now.getHours() >= 8 && time_now.getHours() <= 20){
            return `awake ${time_now.getHours()}`
        }
        else{
            return `sleeping ${time_now.getHours()}`
        }
    }

    get owner(){
        return this._owner;
    }

    // owner class
    

    /*
    Purpose of setter method is to set a property and value to its
    owning object!
    */ 
    set owner(owner){
        this._owner = owner;
    }

        
    // Methods should be added OUTSIDE the constructor class!
    speak(){
        return this.sound
    }
}

class Owner{
    constructor(name, address){
        this.name = name;
        this. address = address;
    }

    get phoneNum(){
        return this._phoneNum;
    }

    set phoneNum(phoneNum){
        this._phoneNum = phoneNum.replace(/[^0-9]/g,"");
    }

    get info(){
        return (
        `${this.name},
         ${this.address},
         ${this._phoneNum}`
        )
    }
}


/**
 * Instantiate a Pet object
 */

let voneric = new Pet("bird", 1, "parrot", "voneric wants a cracker!");

// Instantiate voneric.owner as object of Owner class
voneric.owner = new Owner("colin", "123 Mint St");
voneric.owner.phoneNum = `(225) 555 5512`;

console.log(voneric, voneric.owner.info)

// voneric.owner = new Owner("Colin", "950 S. Foster Dr #45 Baton Rouge, La 70806")
// voneric.owner.phoneNum = `225 747 2370`;
// console.log (voneric.owner)


// let testOwner = new Owner("edward", "2545 Lula Ave. Baton ROuge, La 70802");
// testOwner.phoneNum = `225 747 2370`;
// console.log(testOwner.info, testOwner["phoneNum"]);













// class D9_ladies {
//     constructor(name, sorority_name, year_pledged, pledge_type, chapter_name, school="none"){
//         this.name = name;
//         this.sorority_name = sorority_name;
//         this.year_pledged = year_pledged;
//         this.pledge_type = pledge_type;
//         this.sorority_name = sorority_name;
//         this.school = `University: ${school}`;
//     }

//     // method
//     info(){
//         return this;
//     }

// }


// Instantiate D9_ladies object
// let jayadra = new D9_ladies("Jayadra Rodney","Alpha Kappa Alpha", 2021, "Grad", "Phi Sigma Omega", "Southern University")
// console.log(jayadra.info())
// console.log(jayadra.school)




// THIS IS FOR REACT PROJECT!
// class Expense {
//     constructor(billName, amount){
//         this.billName = billName;
//         this.amount = amount;
//     }
// 
// Instantiate an expense object
// let rent = new Expense("rent", 950);

// console.log(rent.billName, rent.amount)
    