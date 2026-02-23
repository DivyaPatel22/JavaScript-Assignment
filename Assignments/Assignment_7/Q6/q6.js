// function step1(cb1){
//       setTimeout(()=>{
//          step2(()=>{
//             console.log("call back of step2");
//          })
//          console.log("one completed");
//          cb1();
//       },1000)
// }

// function step2(cb2){
//     setTimeout(()=>{
//          step3(()=>{
//             console.log("call back of step3");
//          })
//          console.log("two completed");
//          cb2();
//       },1000)
// }

// function step3(cb3){
//      setTimeout(()=>{
//         console.log("Three completed");
//         cb3();
//         console.log("all completed");
//      },1000)
// }

// step1(()=>{
//     console.log("call back of step1");   
// })

// one completed
// call back of step1
// two completed
// call back of step2
// Three completed
// call back of step3
// all completed



function step1(cb1){
    setTimeout(()=>{
        console.log("step-1 completed");
        cb1();
    },1000)
}

function step2(cb2){
    setTimeout(()=>{
        console.log("step-2 completed");
        cb2();
    },1000)
}

function step3(cb3){
    setTimeout(()=>{
        console.log("step-3 completed");
        cb3();
    },1000)
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("all steps finished !");
        })
    })
})

// step-1 completed
// step-2 completed
// step-3 completed
// all steps finished !
