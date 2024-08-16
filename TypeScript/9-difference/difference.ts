interface IA {
    a: number;
    b: string;
}

interface IB {
    a: number;
    c: boolean;
}

let a: IA = {a: 5, b: ''};
let b: IB = {a: 10, c: true};

interface IDifference {
    b: string;
}

// let v0: IDifference = difference(a, b);

function removeKeys<T extends object, U extends object>(obj1: T, obj2: U): Partial<IDifference> {
    let result: Partial<IDifference> = {};

    for (let key in obj1) {
        if (!(key in obj2)) {
            // result[key as keyof IDifference] = obj1[key];
            result[key as keyof IDifference] = obj1[key] as string | undefined;
        }
    }

    return result;
}

// let a: IA = { a: 5, b: '' };
// let b: IB = { a: 10, c: true };

let difference = removeKeys(a, b);
console.log(difference); // Вывод: { b: '' }
