

// let newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved successfully!");
//     }, 2000);

// })

// newPromise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error("Promise rejected:", error);
// });



let resolve = food;

  food = "make the pizza now !";
 

let newPromise1 = new Promise((resolve, reject)=>{

    
    setTimeout(() =>{
        resolve("Promise 1 resolved!");

        reject("Promise 1 rejected!");

    }, 3000);
})
newPromise1
            .then((message) =>{
                console.log(message);
            })
            .catch((error) => {
                console.error("Error:", error);
            })