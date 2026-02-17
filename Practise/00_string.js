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






