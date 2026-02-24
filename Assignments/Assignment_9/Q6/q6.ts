// Create a type UserPublicProfile without email and isActive .

type UserPublicProfile = Omit<user, "email" | "isActive">



// Create a Record that maps user IDs (string) to User objects.
type u = Record<string, user> ;

const user_1 : u = {
    "user1": {
        id: 1,
        name: "A",
        age : 15
    }
}

