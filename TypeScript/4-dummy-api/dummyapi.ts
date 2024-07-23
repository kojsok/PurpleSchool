/// <reference lib="es2015" />

enum Gender {
    Male,
    Female
  }

enum Role {
    Admin,
    Moderator,
    User
}


export interface Root {
    users: User[]
    total: number
    skip: number
    limit: number
  }
  
  export interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: Gender
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: Hair
    ip: string
    address: Address
    macAddress: string
    university: string
    bank: Bank
    company: Company
    ein: string
    ssn: string
    userAgent: string
    crypto: Crypto
    role: Role
  }
  
  export interface Hair {
    color: string
    type: string
  }
  
  export interface Address {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: Coordinates
    country: string
  }
  
  export interface Coordinates {
    lat: number
    lng: number
  }
  
  export interface Bank {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
  }
  
  export interface Company {
    department: string
    name: string
    title: string
    address: Address2
  }
  
  export interface Address2 {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: Coordinates2
    country: string
  }
  
  export interface Coordinates2 {
    lat: number
    lng: number
  }
  
  export interface Crypto {
    coin: string
    wallet: string
    network: string
  }

const url: string = "https://dummyjson.com/users";

async function getData(link: string): Promise<any> {
    // получаем данные из API - запрос response, преобразуем в JSON
    const response = await fetch(link);
    const data = await response.json();
    return data;
}

getData(url).then(myData => {
    console.log(myData);
}).catch(error => {
    console.error('Error:', error);
});


const myData = getData(url);
console.log(myData);


