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
        return `${time_now.getHours()}:${time_now.getMinutes()}`;
    }

    // Methods should be added OUTSIDE the constructor class!
    speak(){
        return this.sound
    }
}

/**
 * Instantiate a Pet object
 */

let voneric = new Pet("bird", 1, "parrot", "voneric wants a cracker!");
console.log(voneric, voneric.activity)














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
    