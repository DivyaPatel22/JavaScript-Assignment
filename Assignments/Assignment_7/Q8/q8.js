
Promise.resolve(5)
     .then(result =>{
        return result*2
     })
     .then(r=>{
        return r+20
     })
     .then(ra=>{
        console.log(ra);
     })

