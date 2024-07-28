// Функция, которая меняет местами ключи и значения в переданном объекте
function invertRecord<T extends Record<string, number>>(obj: T): Record<number, string> {
    // Создаем пустой объект для хранения результата
    //Record<number, string>, что означает, что ключи в возвращаемом объекте будут числами, а значения — строками.
    const invertedObj: Record<number, string> = {};

    // Перебираем все ключи исходного объекта
    for (const key in obj) {

        // Проверка if (obj.hasOwnProperty(key)) обеспечивает обработку только собственных свойств объекта,
        // исключая свойства из цепочки прототипов.
        if (obj.hasOwnProperty(key)) {
            // Получаем значение по текущему ключу
            const value = obj[key];
            // Устанавливаем значение как ключ и ключ как значение в новом объекте
            invertedObj[value] = key;
        }
    }

    return invertedObj;
}

// Пример использования
const original = { A: 1, B: 2 };
const inverted = invertRecord(original);
console.log(inverted); // { 1: 'A', 2: 'B' }
