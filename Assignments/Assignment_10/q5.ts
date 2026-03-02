// Create a constructor type for UserRepository .

type Constructor = new (connection: string) => UserRepository;
// type Constructor<T> = new (...args: any[]) => T

type User = {
  id: string;
  name: string;
};

class UserRepository {
  constructor(connection : string){}

  findById(id : string) : User | null{
    return {id,name:"Abcd"}
  }
}

const example1 : Constructor = UserRepository;
const e = new example1("ab")

console.log(e)





// Create a callable type that formats User name.

type FormatUserName = (user: User) => string;

const formatUserName: FormatUserName = (user) => {
  return `User: ${user.name}`;
};

const user = e.findById("1")
if(user){
  console.log(formatUserName(user))
}