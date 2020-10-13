export class Person{
    private _name:string
    private _age:number


    public constructor(name:string,age:number=0) {
        this._name=name
        this._age=age
    }

    public set name(name:string){this._name=name}
    public set age(age:number){this._age=age}

    public get name(){return this._name}
    public get age(){return this._age}

    public printInfo(){
        console.log(this._name)
        console.log(this._age)
    }

    public canVote(){
        if(this._age>=18){
        console.log('eligible')
        }
        else{
        console.log(' not eligible')
        }
    }
}