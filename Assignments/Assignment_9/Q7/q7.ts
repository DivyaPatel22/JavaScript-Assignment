// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
// Create a utility NonNullableFields<T> that removes null and undefined from all properties.
// Apply both to User and test different scenarios.


type ReadonlyByKeys<T, K extends keyof T> = Omit<T,K> & Readonly<Pick<T,K>> ;

type NonNullableFields<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

type User = {
  id: number;
  name: string | null;
  email?: string | null;
  age: number | undefined;
};

type ReadonlyUser = ReadonlyByKeys<User, "id" | "email">;
const user: ReadonlyUser = {
  id: 1,
  name: "Alice",
  email: "alice@test.com",
  age: 25,
};
user.name = "Bob";     
user.age = 30;         
// user.id = 2;         Error
// user.email = "new";     Error


type NotnullUser = NonNullableFields<User>;
const cleanUser: NotnullUser  = {
  id: 1,
  name: "Alice",
  email: "alice@test.com",
  age: 25,
};
cleanUser.id = 2
// cleanUser.name = null;       Error
// cleanUser.age = undefined;   Error