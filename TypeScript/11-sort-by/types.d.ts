declare module 'sort-by' {
    export function sortBy<T>(...args: Array<string | ((key: string, value: any) => any)>): (a: T, b: T) => number;
    
    export = sortBy;
}