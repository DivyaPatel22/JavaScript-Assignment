// Create abstract class Service<T> with abstract method execute() .
// Extend it with UserService .

abstract class  Service<T> {
    abstract execute(name : string) : T
}

type human1 = {
    id : number,
    name : string,
    email : string
}
class UserService extends Service<human1>{
    execute(name: string) : human1 {
        return {
            id : 1,
            name ,
            email : "g@gmail.com"
        }
    }
}
