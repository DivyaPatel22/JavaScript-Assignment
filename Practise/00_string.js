// Reverse a string without using reverse()

// Example:
// Input: "hello"
// Output: "olleh"

        const str1 = "hello"
        // let str2 =""
        // for (let index = str1.length-1; index >= 0; index--) {
        //          str2 += str1[index];
        // }
        // console.log(str2);

        let str2 = str1.split("")
        console.log(str2.reverse().join(""));  //olleh


// Check if a string is palindrome
// "madam" → true
// "hello" → false

        const str3 = "madam"
        const str4 = "hello"
        console.log((check_palin(str3)));   //true
        console.log((check_palin(str4)));  //false

        function check_palin(str){
            for(let i = 0 ; i < str.length ; i++){
                
                if(str[i] != str[str.length-1-i]){
                    return false
                }
                }
                return true
            }



// Count vowels in a string
// "javascript"

        console.log(chek_vowel("javascript"));  //3
        console.log(chek_vowel("apple"));  //2

        // function chek_vowel(str){
        //     let count = 0;
        //      for(let i = 0 ; i<str.length ; i++){
        //         if(str[i]=="a" || str[i]=="e" || str[i]=="i" ||str[i]=="o"|| str[i]=="u"){
        //              count++;
        //         }
        //     }
        //     return count
        // }

        function chek_vowel(str) {
            let count = 0;
            let vowels = "aeiou";

            for (let i = 0; i < str.length; i++) {
                if (vowels.includes(str[i].toLowerCase())) {
                    count++;
                }
            }
            return count;
        }





//String Based Questions (VERY COMMON)
// These are frequently asked.

// Reverse a string (without using .reverse())
const str11 = "Hello"
const r1 = str1.split("").reverse().join("")
console.log(r1)

// Check if a string is palindrome
const str12 = "aba"
function check_palin(str){
    let start = 0
    let end = str.length-1
    while(start<=end){
        if(str[start]!==str[end]){
            return false
        }
        start++;
        end--;
    }
    return true
}
console.log(check_palin(str2))
console.log(check_palin(str1))

// Find first non-repeating character
function find(str){
    let result = {}
    for(let char of str){
        result[char] = (result[char]||0)+1
    }
    for(let char of str){
        if(result[char]===1){
            return char
        }
        return false
    }
}
console.log(find(str2))
console.log(find(str1))

// Count frequency of characters
function count(str){
    let result = {};
    for(let c of str){
        result[c] = (result[c]||0)+1;
    }
    return result
}
console.log(count(str1))
console.log(count(str2))

// Check if two strings are anagrams
let str13 = "aba"
let str14 = "baa"

function check_Anagram(str1,str2){
    let r1 = str1.toLowerCase().split("").sort().join("")
    let r2 = str2.toLowerCase().split("").sort().join("")
    
    if(r1 === r2){
        return true
    }
    return false
}
console.log(check_Anagram(str3,str4))
console.log(check_Anagram(str1,str2))

// Group anagrams
const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat', 'listen', 'silent'];
function group(arr){
    let result = {}
    
    for(let s of arr){
        let s1 = s.split("").sort().join("")
        
        if(!result[s1]){
            result[s1] = []
        }
        result[s1].push(s)
    }
    return Object.values(result)
}
console.log(group(words))

// Longest substring without repeating characters
// let str5 = "aaabbcc"
// function sbr(str){
//     let result = str[0]
//     let start = 1
//     for(let i of str){
//         if(!result.includes(i)){
//             result[start] = i
//             start++
//         }
//     }
//     return result
// }
// console.log(sbr(str5))


// String compression (aaabbcc → a3b2c2) 
function comp(str){
    let result = {}
    let ans = ""
    for(let s of str){
        result[s] = (result[s]||0)+1
    }
    for(let i in result){
        ans += i+result[i]
    }
    return ans
}
console.log(comp(str5))


// Reverse words in a sentence
const str6 = "hello Chhota Bheem"
function rev(str){
    let result = str.split(" ")
    let ans = []
    for(let i of result){
         ans.push(i.split("").reverse().join(""))
    }
    return ans.join(" ")
}
console.log(rev(str6))


