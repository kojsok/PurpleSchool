const user = {
    name: 'John',
    age: 30,
    skills: ['typescript', 'javascript']
};

//напишем тип для принимаемого объекта учитывая что поля могут быть любыми массивами
type PickObjectKeys<T, K extends keyof T> = {
    [P in K]: T[P];  //mapped type P in K берем тип свойства P из объекта T {[P in K]: T[P]}
};

function pickObjectKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): PickObjectKeys<T, K> {
    const result = {} as PickObjectKeys<T, K>;
    keys.forEach(key => {
        if (key in obj ) {  //можно еще явно проверять obj.hasOwnProperty(key) Метод hasOwnProperty помогает точно определить, принадлежит ли свойство самому объекту, а не его прототипу.
            result[key] = obj[key];
        }
    });
    return result;
}


const res = pickObjectKeys(user, ['name', 'skills']);

console.log(res); // { name: 'John', skills: ['typescript', 'javascript'] }