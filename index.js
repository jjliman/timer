class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };
    pause = () => {
        clearInterval(this.interval);
    };
    onDurationChange() {

    }
    tick = () => {
        this.timeRemaining = this.timeRemaining - 1;
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }

}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);

// class MyClass {
//     constructor(a) {
//         this.a = a;
//     }
//     normalFunc() {
//         console.log(this);
//     }
//     normalFunc2 = function() {
//         console.log(this);
//     }
//     arrowFunc = () => {
//         console.log(this);
//     }
// }

// const myObject = {
//     a: 1,
//     normalFunc() {
//         console.log(this);
//     },
//     normalFunc2: function() {
//         console.log(this);
//     },
//     arrowFunc: () => {
//         console.log(this);
//     }

// };


// myObject.normalFunc();
// myObject.normalFunc2();
// myObject.arrowFunc();

// const normal = myObject.normalFunc;
// const normal2 = myObject.normalFunc2;
// const arrow = myObject.arrowFunc;
// normal();
// normal2();
// arrow();

// setTimeout(myObject.normalFunc, 1000);
// setTimeout(myObject.normalFunc2, 1000);
// setTimeout(myObject.arrowFunc, 1000);

// setTimeout(normal, 1000);
// setTimeout(normal2, 1000);
// setTimeout(arrow, 1000);

// const startButton = document.querySelector('#start');
// startButton.addEventListener('click', myObject.arrowFunc);

// const myClass = new MyClass(1);
// myClass.normalFunc();
// myClass.normalFunc2();
// myClass.arrowFunc();

// const normal = myClass.normalFunc;
// const normal2 = myClass.normalFunc2;
// const arrow = myClass.arrowFunc;
// normal();
// normal2();
// arrow();

// setTimeout(myClass.normalFunc, 1000);
// setTimeout(myClass.normalFunc2, 1000);
// setTimeout(myClass.arrowFunc, 1000);

// setTimeout(normal, 1000);
// setTimeout(normal2, 1000);
// setTimeout(arrow, 1000);

// const startButton = document.querySelector('#start');
// startButton.addEventListener('click', arrow);





// class User {
 
//     constructor(first, last){
//         this.first = first;
//         this.last = last;
//     }
//     set first(value){
//         console.log("IN FIRST SETTER!");
//         this.firstName = value.toUpperCase();
//     }
//     set last(value){
//         console.log("IN LAST SETTER!");
//         this.lastName = value.toUpperCase();
//     }
//     get fullName() {
//         console.log("IN GETTER!");
//         return this.firstName+" "+this.lastName;
//     }
// };

// let user1 = new User("spongebob", "squarepants");
// let user2 = new User("patrick", "star");

// console.log(user1.fullName);
// console.log(user2.fullName);


// class Employee {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
// }

//     //no setter method
// }

// let employee = new Employee("Stephen Edward");
// console.log(employee.name);

// employee.name = 'Paul Smith';

// console.log(employee.name);