class MapDublicate {
    private buckets: Array<Array<[string, any]>>;
    private size: number;

    constructor(initialCapacity: number = 16) {
        this.buckets = new Array(initialCapacity).fill(null).map(() => []);
        this.size = 0;
    }

    private hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) - hash + key.charCodeAt(i);
            hash |= 0; // Преобразовать в 32-битное целое число
        }
        return hash;
    }

    private getBucketIndex(key: string): number {
        const hash = this.hash(key);
        return Math.abs(hash) % this.buckets.length;
    }

    add(key: string, value: any): void {
        const index = this.getBucketIndex(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
        this.size++;
    }

    get(key: string): any {
        const index = this.getBucketIndex(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }

        return undefined;
    }

    remove(key: string): void {
        const index = this.getBucketIndex(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                return;
            }
        }
    }

    clear(): void {
        this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
        this.size = 0;
    }

    getSize(): number {
        return this.size;
    }
}

// Пример использования
let weatherMap = new MapDublicate();
weatherMap.add('London', 20);
weatherMap.add('Berlin', 25);

console.log(weatherMap.get('London')); // Выведет 20
console.log(weatherMap.get('Berlin')); // Выведет 25

weatherMap.remove('London');
console.log(weatherMap.get('London')); // Выведет undefined

weatherMap.clear();
console.log(weatherMap.get('Berlin')); // Выведет undefined

