//The 1 + 1 doesnt work because eventually you will get a negative number which the functions are not programed for

// slowMath.add(6, 2) 
// .then(results => {
//     console.log(results);  
//     return slowMath.multiply(results, 2); 
// })
// .then(results => { 
//     console.log(results);
//     return slowMath.divide(results, 4);
// })
// .then(results => { 
//     console.log(results);
//     return slowMath.subtract(results, 3);
// })
// .then(results => { 
//     console.log(results);
//     return slowMath.add(results, 98);
// })
// .then(results => { 
//     console.log(results);
//     return slowMath.remainder(results, 2);
// })
// .then(results => { 
//     console.log(results);
//     return slowMath.multiply(results, 50);
// })
// .then(results => { 
//     console.log(results);
//     return slowMath.remainder(results, 40);
// })
// .then(results => { 
//     console.log(results);
//     return slowMath.add(results, 32);
// })
// .then(results => { 
//     console.log(results);
//     return console.log(`the final result is ${results}... aka, the meaning of life`)
// })
// .catch((err) => {

//     return console.log("Oopsie"+ err);
// })

async function meaningOfLife() {
    try {
        let results = await slowMath.add(6, 2);
        console.log(results);
        results = await slowMath.multiply(results,2)
        console.log(results);
        results = await slowMath.divide(results, 4)
        console.log(results);
        results = await slowMath.subtract(results, 3)
        console.log(results);
        results = await slowMath.add(results, 98)
        console.log(results);
        results = await slowMath.remainder(results, 2)
        console.log(results);
        results = await slowMath.multiply(results, 50)
        console.log(results);
        results = await slowMath.remainder(results, 40)
        console.log(results);
        results = await slowMath.add(results, 32)
        console.log(results);
        console.log(`the final result is ${results}... aka, the meaning of life `)

    } catch (err) {

        console.log("Oopsie"+ err);

    }
}

meaningOfLife()