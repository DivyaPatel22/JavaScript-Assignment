function tossCoin(){
    return new Promise((resolve,reject)=>{
        const rd = Math.random(0,1);
        if(rd > 0.5){
            resolve("head")
        }
        else{
            reject("tail")
        }
    })
}

tossCoin()
    .then(result =>{
        console.log(result);})
    .catch(error=>{
        console.log(error)});
