// Problem 2: User Activity & Action Aggregation
// Objective
// Process user activity logs and user action records to generate a summarized report per user, aggregating time spent and counting repeated activity/action types.
// Input
// You are given an array of user activity logs. Each log contains:
// userId
// type (activity/action type)
// duration (in minutes – optional for some actions)


const activities = [
  { userId: 1, type: "login", duration: 5 },
  { userId: 2, type: "browse", duration: 20 },
  { userId: 1, type: "browse", duration: 15 },
  { userId: 3, type: "login", duration: 3 },
  { userId: 2, type: "logout", duration: 2 },
  { userId: 1, type: "logout", duration: 1 },
  { userId: 1, type: "login", duration: 4 }
];

const activityProcessor = { aggregate(data) {
    return data.reduce((acc, { userId, type, duration = 0 }) => {

      if (!acc[userId]) {
        acc[userId] = {
          totalTime: 0
        };
      }

      acc[userId].totalTime += duration;
      acc[userId][type] = (acc[userId][type] || 0) + 1;

      return acc;

    }, {});
  }
};

const result = activityProcessor.aggregate(activities);

console.log(result);

// {
//   '1': { totalTime: 25, login: 2, browse: 1, logout: 1 },
//   '2': { totalTime: 22, browse: 1, logout: 1 },
//   '3': { totalTime: 3, login: 1 }
// }



// Problem 5: Normalize Inconsistent API Responses
// Objective
// Convert inconsistent API data into a normalized structure.

const apiResponse = [
  { id: 1, name: "A", tags: "x,y,z" },
  { id: 2, name: "B", tags: ["x", "y"] },
  { id: 3, name: "C" }
];
const q = {}
const r = apiResponse.map(({ id, name, tags }) => ({
    id,
    name,
    tags: Array.isArray(tags) ? tags
        : typeof tags === "string"
            ? tags.split(",")
            : []
}));
console.log(r);

r[2].tags.push("hiii")
console.log(apiResponse);
console.log(r);



// Problem 7: Role-Based Permission Checker
// Objective
// Implement a generic role-based access control utility.
// Input
const roles = {
  admin: ["READ", "WRITE", "DELETE"],
  editor: ["READ", "WRITE"],
  viewer: ["READ"]
};

function canAccess(role, permission){
    if(role == "admin" && permission == "READ" || role == "admin" && permission == "WRITE" || role == "admin" && permission == "DELETE"){
        return true
    }
    else if (role == "editor" && permission == "READ" || role == "editor" && permission == "WRITE"){
        return true
    }
    else if(role == "viewer" && permission == "READ" ){
        return true
    }
    else{
        return false
    }
}

console.log(canAccess("admin", "DELETE")); // true
console.log(canAccess("viewer", "WRITE")) // false
console.log(canAccess("unknown", "READ")); // false




// Problem 8: Convert Object Keys to Uppercase
// Objective
// Transform object keys without mutating the original object.
// Function
// convertKeysToUpperCase(obj)
// Requirements
// Convert only top-level keys

// Preserve values
// Return a new object
// Do not mutate original object
// Expected Outcome
// { name: "A", age: 30 } → { NAME: "A", AGE: 30 }

function convertKeysToUpperCase(obj){
    const result = {}
    for (const k in obj) {
        result[k.toUpperCase()]=obj[k]
    }
    return result;
}

const o = {name : "A" , age:30}
console.log(convertKeysToUpperCase(o))   //{ NAME: 'A', AGE: 30 }
