function simulateTask(name, delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`${name} in ${delay} ms`);
            resolve(name);
        },delay)
    })
}

async function seq(){
    console.time("sequential")
    let start = Date.now()
    
    await simulateTask("t1",1000)
    await simulateTask("t2",1000)
    await simulateTask("t3",1000)

    console.timeEnd("sequential")
    console.log(Date.now()-start+" SQENTIAL TIME")
}

seq()

async function sim(){
    console.time("sim")
    let start = Date.now()
    
    await Promise.all([simulateTask("T1",1000), simulateTask("T2",1000),
      simulateTask("T3",1000)
  ])

    console.timeEnd("sim")
    console.log((Date.now()-start)+" SIMULTANOUS TIME ")
}

sim()