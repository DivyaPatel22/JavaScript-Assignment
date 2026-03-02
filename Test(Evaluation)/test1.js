//1. ChunkArray() :
function chunkArray(arr, size) {

  if (arr.length === 0) {
    return [];
  }

  const chunk = arr.slice(0, size);
  const remain = arr.slice(size);

  return [chunk, ...chunkArray(remain, size)];
}

console.log(chunkArray([1,2,3],2))


//2.
function transformTags(a) {
  const result = {};

  a.forEach(({ id, tags }) => {
    tags.forEach(tag => {
      if (!result[tag]) {
        result[tag] = new Set();
      }

      result[tag].add(id);
    });
  });

  Object.keys(result).forEach(tag => {
    result[tag] = [...result[tag]].sort((a, b) => a - b);
  });

  return result;
}
const input = [
  { id: 3, tags: ["a", "b"] },
  { id: 1, tags: ["b", "c"] },
  { id: 2, tags: ["a", "c", "d"] },
  { id: 2, tags: ["d", "e"] }
];

console.log(transformTags(input));



//3.

async function fetchWithRetry(url, retries) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return await response.json();

  }catch (error) {
    if (retries > 0) {
      console.log(`Retrying... Attempts left: ${retries}`);
      return fetchWithRetry(url, retries - 1);
    } else {
      throw new Error("retry failed");
    }
  }
}
fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1", 3)
  .then(data => console.log("Success:", data))
  .catch(err => console.error("Failed:", err.message));


/// 4. 
function fetchUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json());
}

function fetchPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(res => res.json());
}

function fetchComments(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(res => res.json());
}

function getUserSummary(userId) {
  fetchUser(userId)
    .then(user => {
      return fetchPosts(user.id)
        .then(posts => {
          return fetchComments(posts[0].id)
            .then(comments => {
              return {
                user: user,
                firstPost: posts[0],
                comments: comments
              };
            });
        });
    })
    .then(summary => {
      console.log(summary);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

getUserSummary(1);
