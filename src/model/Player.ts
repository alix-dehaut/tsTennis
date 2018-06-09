export class Player {

    private name: string;
    private age: number;
    private score: number;


    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }

    getName(): string {
        return this.name;
    }
}