// Create FirstArgument<T> to extract first parameter type.
type FirstArgument<T> = T extends (arg1: infer A, ...args: any[]) => any ? A : never;

// Test it with a function that takes (id: string, active: boolean) .
function example(id: string, active: boolean) {
  return { id, active };
}

type ex = FirstArgument<typeof example> //ex : string

const a1 : ex = "d"
// const a2 : ex = 12 //Error : number is not assignable to type string