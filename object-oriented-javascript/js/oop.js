// console.log("connected!")

// let user = {
//     fname: "colin",
//     lname: "rodney",
//     printName: function(){
//         console.log(this.fname +" "+ this.lname)
//     },
// };
// console.log(user.printName())

const myString = {
	string: "Programming with Treehouse is fun!",
  countWords(){
     let splitString = this.string.split(" ");
     return splitString.length
  },

}
console.log(myString.countWords());
