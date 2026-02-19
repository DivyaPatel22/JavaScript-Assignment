const input = [
  { id: 1, tag: "mam" },
  { id: 1, status: true },
  { id: 2, tag: "teacher" }
];

function mergeById(arr) {
    const result = arr.reduce((acc, obj) => {
        if (!acc[obj.id]) {
            acc[obj.id] = {};
        }

        acc[obj.id] = { ...acc[obj.id], ...obj };

        return acc;
    }, {});
    return Object.values(result);
}

const output = mergeById(input);
console.log(output);





// async function getUserPostTitles(userId) {
//     const userResponse = await fetch(`/users/${userId}`);
//     const user = await userResponse.json();

//     const postsResponse = await fetch(`/posts?userId=${user.id}`);
//     const posts = await postsResponse.json();

//     return posts.map(p => p.title);
// }




