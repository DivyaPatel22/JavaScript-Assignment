 function downloadFile(url, callback){
    setTimeout(()=>{
        console.log(`Download complete: ${[url]}`);
        callback();
    },3000)
 }

 downloadFile("https:/www.india.com./",()=>{
    console.log("Execution completed of download file");
 })
 
 