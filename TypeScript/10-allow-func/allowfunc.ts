// class User {
//     @allowFunc((a: number) => a > 0)
//     age: number = 30;
// }

// const person = new User();
// console.log(person.age);

// person.age = 0;
// console.log(person.age);

// person.age = 20;
// console.log(person.age);




// function allowFunc(validator: (value: any) => boolean) {
//     return function (target: any, context: ClassFieldDecoratorContext) {
//         return function (initialValue: any) {
//             let _value = initialValue;

//             return {
//                 get() {
//                     return _value;
//                 },
//                 set(newValue: any) {
//                     if (validator(newValue)) {
//                         _value = newValue;
//                     }
//                 }
//             };
//         };
//     };
// }


class User {
    // @allowFunc((a: number) => a > 0)
    @allowFunc((a: number) => a > 0)
    age: number = 30;
    constructor() { }
}

function allowFunc(validator: (value: any) => boolean) {
    return function (target: any, propertyKey: string | symbol) {
        let _value = target[propertyKey];

        const getter = function() {
            return _value;
        };

        const setter = function(newVal: any) {
            if (validator(newVal)) {
                _value = newVal;
            }
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}

const person = new User();
console.log(person.age);  // 30

person.age = 0;
console.log(person.age);  // 30, так как 0 не прошел проверку

person.age = 20;
console.log(person.age);  // 20, так как 20 прошло проверку

