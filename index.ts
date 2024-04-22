import PromptSync from 'prompt-sync';
import os from 'node:os';

const prompt = PromptSync();

// // // let email:string = "brighterdayscodelab@gmail.com";
// // // let emailLenght: number = email.length;
// // // let sliceEmail: string = email.slice(0, 4);
// // // let knowwhereToSlice: number = email.indexOf("@") - 3;
// // // let sliceTheEmail: string = email.slice(knowwhereToSlice);

// // // let res = (a: number, b: number): number => {
// // //     return Math.floor(Math.random() * (a - b + 1) + b);
// // // };
// // // console.log(res(100, 40));

// // // let rre = () => {
// // //     return [12, 22, 44]
// // // }
// // // // const ress = () => {
// // // //     arr.sort((a: number, b: number) => {

// // // //     })
// // // // }

// // // let arr = [
// // //     {name: "obi",},
// // //     {score: 40 <= 98},
// // //     {age: 17 <= 25}

// // // const mmm = (p:number, t:number) => {
// // //     return ((p * 22 * t) / 100)
// // // }
// // // console.log(mmm(2000, 1))

// // // const sss = ( t:number) => {
// // //     return ((2000 * 22 * t) / 100)
// // // }
// // // console.log(sss(150))

// // let endd:number = 200000000;
// // let r:number = 22;
// // let t:number = 0;

// // const mmm = (endd:number, t:number) => {
// //      let final:number = ((endd / r * t) / 100);
// //     return Math.floor(final)
// // }
// // console.log(mmm(endd, 3));

// // let time:number = 0;
// // let intial:number = 2000;
// // let endPoint:number = 300000;

// // const ajo = (intial:number) => {
// //     return endPoint / intial

// // }
// // console.log(ajo(intial))

// // let arr = [
// //     {name: "shoes", price: 0, initialPrice: 100, quantity: 1},
// //     {name: "bags", price: 0, initialPrice: 200, quantity: 2},
// //     {name: "jewelry", price: 0, initialPrice: 300, quantity: 3},
// //     {name: "clothes", price: 0, initialPrice: 400, quantity: 4},
// //     {name: "glassess", price: 0, initialPrice: 500, quantity: 5}
// //    ]

// //    arr.map((el) => {
// //     return el.price = el.initialPrice * el.quantity;
// //    })

// //    let maxPrice = Math.max(...arr.map((el) => {
// //     return el.price
// //    }))

// //    let maxQuantity = Math.max(...arr.map((el) => {
// //     return el.quantity
// //    }))

// //    console.log(arr.filter((el) => {
// //     return el.quantity === maxQuantity;
// //    }))
// //    console.log(maxPrice)
// //    console.log(maxQuantity)

// //   //   console.log(arr.filter((el) => {
// //   //   return el.quantity === maxPrice
// //   //  }))

// // // const timeFormule = (time:number) => {
// // //     return ((time * 22) / 100)
// // // }
// // console.log(timeFormule(7))

// // let arr = [
// //         {name: "shoes", price: 0, initialPrice: 100, quantity: 1},
// //         {name: "bags", price: 0, initialPrice: 200, quantity: 2},
// //         {name: "jewelry", price: 0, initialPrice: 300, quantity: 3},
// //         {name: "clothes", price: 0, initialPrice: 400, quantity: 4},
// //         {name: "glassess", price: 0, initialPrice: 500, quantity: 5}
// //        ]

// //        const myfun = () => {
// //         return arr
// //     }
// //     const myfun2 = () =>{
// //         return myfun().p
// //     }

// //     console.log(myfun2())

// // class Person {
// //     constructor(name: number, num:number = 6) {
// //         console.log(`Contructor called with name = ${name + num}`)
// //     }
// // }

// // const personInstance = new Person(1, 4);

// // class User {
// //     name: string;
// //     constructor(name: string) {
// //       this.name = name;
// //     }
// //   }

// //   class Student {
// //     private name: string;
// //     static score: number;

// //     constructor(name: string) {
// //       this.name = name;
// //     }

// //     studentName() {
// //       return this.name;
// //     }

// //     set changeName(value: string) {
// //       this.name = value;
// //     }

// //     get getName() {
// //       return this.name;
// //     }
// //   }
// //   // function name(){}
// //   // const name = () => {}

// //   // let user = new User("Peter");
// //   let student = new Student("Peter");
// //   // student.name = "James";
// //   // // console.log(user)
// //   // console.log(student.name);
// //   // console.log(Student)
// //   // console.log(student);

// //   // console.log((student.changeName = "James"));
// //   // console.log(student.getName);

// //   // console.log(
// //   //   [0, 7, 9].map((el) => {
// //   //     return el;
// //   //   })
// //   // );

// //   console.clear();

// //   class DoMath {
// //     x: number;
// //     y: number;

// //     constructor(x: number, y: number) {
// //       this.x = x;
// //       this.y = y;
// //     }

// //     addition() {
// //       return this.x + this.y;
// //     }

// //     division() {
// //       return this.x / this.y;
// //     }

// //     subtraction() {
// //       return this.x - this.y;
// //     }

// //     multiplication() {
// //       return this.x * this.y;
// //     }

// //     accesssFn() {
// //       if (
// //         this.addition() >= 10 ||
// //         this.subtraction() >= 10 ||
// //         this.multiplication() >= 10 ||
// //         this.division() >= 10
// //       ) {
// //         return "awesome";
// //       } else {
// //         return "Very Bad";
// //       }
// //     }

// //     compare() {
// //       if (this.addition() >= 10) {
// //         return "I am the One: addition";
// //       } else if (this.subtraction() >= 10) {
// //         return "I am the One: subtraction";
// //       } else if (this.division() >= 10) {
// //         return "I am the One: division";
// //       } else if (this.multiplication() >= 10) {
// //         return "I am the One: multiplication";
// //       } else {
// //         return "no match";
// //       }
// //     }
// //   }

// //   let doMath = new DoMath(5, 2);

// //   console.log(doMath.compare());
//   // console.log(doMath.subtraction());
//   // console.log(doMath.multiplication());
//   // console.log(doMath.division());

// // class Person{
// //     name: string;
// //     age: number;
// //     instantiatedAt = new Date();

// //     constructor(name: string, age:number) {
// //         this.name = name;
// //         this.age = age;
// //         console.log(`Contructor called with time = ${this.instantiatedAt}`)
// //         console.log(`Contructor called with name = ${name}`)
// //         console.log(`Contructor called with age = ${age}`)
// //     }
// // }
// // const personInstance = new Person("odi", 10);

//  let colors:string[] = ["yello", "black", "blue", "red"];

//  let computerChoice:string = colors[Math.floor(Math.random() * ( colors.length - 1))]
//  console.clear()
// console.log(computerChoice)

// let first = prompt("Enter choice: ")

//  function RandomColor (){
//   if(first === computerChoice){
//     console.log();

//   }else{
//     return
//   }
//  }
//  console.log(RandomColor());

// let userchoice : string[] = ["red","blue","green","orange","black","white"]
// let get:number =  Math.floor(Math.random()* (2- 0 + 1) + 0)
// let choice : number= random(2,0);

// // console.log("choice",userchoice[choice]);

// // let myuserchoice: string = prompt("This is my choice :")

// // while(userchoice[choice] !== myuserchoice){
// //     myuserchoice = prompt("pleas gusse me right :")
// // }

// // while(true){
// //     let computer = userchoice[random(2,0)];
// //     console.log("computer choice",computer);
// //     myuserchoice = prompt("This is choice :");

// //     if (computer === myuserchoice){
// //         console.log("it correct");
// //         break;
// //     }
// // }

class games {
  randomColor() {
    let colors: string[] = ['yellow', 'orange', 'black', 'blue', 'white'];
    console.clear();
    let checkCpu: number = os.cpus().length;

    while (true) {
      let computerChoice =
        colors[Math.floor(Math.random() * colors.length + 0)];
      let userChoice = prompt('Enter color choice: ')
        .toLocaleLowerCase()
        .trim();
      // console.log(computerChoice);
      let index = colors.indexOf(userChoice);

      if (colors.includes(userChoice) && computerChoice !== userChoice) {
        colors.splice(index, 1);
        console.log(`${userChoice} is not correct`);
        console.log(`correct answer is ${computerChoice}`);
      } else if (!colors.includes(userChoice)) {
        console.log('Not an option');
      } else {
        console.log('Hurray you won');
        break;
      }
      console.log(colors);
    }
  }

  drinkWaterApplication() {
    let standardAmount = 60;
    let litre = 0;

    while (true) {
      let userAmount = parseInt(
        prompt('how many litres have you taken today: ')
      );
      if (userAmount > standardAmount) {
        console.log(`you can't take above`);
      } else if (userAmount === standardAmount) {
        console.log("you can't take 60cl at once");
      } else if (userAmount < standardAmount) {
        litre += userAmount;
        if (litre === 60) {
          console.log('hurray');
        } else {
          console.log(
            `you've taken ${userAmount} and you have ${
              standardAmount - litre
            } to go`
          );
        }
      }
    }
  }

  startGame() {
    while (true) {
      console.log('press 1, press 2,');
      let userGame = parseInt(prompt(''));
      if (userGame === 1) {
        return this.drinkWaterApplication();
      } else {
        return this.randomColor;
      }
    }
  }
}

let Ngame = new games();
console.log(Ngame.startGame());

// const colorGuessingGame = () => {
//   console.clear();
//   let balls = ['red', 'blue', 'yellow', 'green', 'purple', 'gray', 'indigo'];

//   while (true) {
//     let comp = balls[Math.floor(Math.random() * balls.length)];
//     console.log(comp);
//     let guess = prompt('What is your guess color: ');

//     console.log(balls);

//     if (!balls.includes(guess)) {
//       console.log("Sorry that's not an option");
//     } else if (comp !== guess) {
//       console.log("Sorry that's not the correct");
//       let theN = balls.indexOf(guess);
//       balls.splice(theN, 1);
//     } else {
//       console.log("Confirm you're correct");
//       break;
//     }
//   }
// };

// colorGuessingGame();

// function multiplication() {
//   const numRows = 15;
//   const numCols = 12;

//   for (let i = 1; i <= numRows; i++) {
//     for (let j = 1; j <= numCols; j++) {
//       const product = `${i} x ${j} = ${i * j}\n`;
//       console.log(product);
//     }
//   }
// }
// multiplication();

// function drinkWaterApplication() {
//   while (true) {
//     let standardAmount = 60;
//     let userAmount = parseInt(prompt('how many litres have you taken today: '));

//     if (userAmount < standardAmount) {
//       console.log(
//         `You have taken ${userAmount} and you have ${
//           standardAmount - userAmount
//         }cl to go`
//       );
//       console.log((userAmount += userAmount));
//     } else if (userAmount > standardAmount) {
//       console.log("You can't take more than 60cl a day");
//       continue;
//     } else if (standardAmount === userAmount) {
//       console.log('You have reach the total of 60cl per day');
//       break;
//     }
//   }
// }
// console.clear();

// drinkWaterApplication();
