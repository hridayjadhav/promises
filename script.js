const proObj = new Promise( ( resolve , reject ) =>{  //'const proObj': Declares a constant variable named proObj.
//new Promise((resolve, reject) => {: Creates a new Promise with a callback function that takes two parameters: resolve and reject.

    setTimeout (()=>{  //setTimeout(() => {: Delays the execution of the code within this function by 2000 milliseconds (2 seconds).
        
        let rollNo = [1,2,3,4,5]; //let rollNo = [1, 2, 3, 4, 5];: Initializes an array named rollNo with roll numbers.

        resolve(rollNo);  //resolve(rollNo);: Calls the resolve function to fulfill the promise with the rollNo array.
        // reject('Error');    //it would call the reject function to reject the promise with an error.
    }, 2000);
} );

const getData = (indexData) => {   //const getData = (indexData) => {: Defines an arrow function named getData that takes indexData as a parameter.

    return new Promise ( (resolve, reject) =>{  //return new Promise((resolve, reject) => {: Creates a new Promise within the getData function.

        setTimeout ( (indexData) => {  //setTimeout((indexData) => {: Delays the execution of the code within this function by 2000 milliseconds (2 seconds).

            let bioData = {   //let bioData = { ... };: Initializes an object named bioData with name, age, and job information.

                name : 'Hriday',
                age : 21,
                job : 'Software Engineer'
            }
            resolve(`  
            My employ ID is ${indexData}, 
            My name is ${bioData.name} 
            and I am ${bioData.age} years old 
            and I work as an ${bioData.job}
            `) // resolve(/* Template string containing bioData */);: Calls the resolve function to fulfill the promise with a template string that includes indexData and bioData.
        }, 2000, indexData );
    } );
}

proObj.then((roll_no)=>{  //proObj.then((roll_no) => {: Attaches a then handler to the proObj Promise.
    console.log(roll_no);  //console.log(roll_no);: Logs the roll_no array received from the resolved promise.
    return getData(roll_no[1]);  //return getData(roll_no[1]);: Returns a getData promise for the second element of the roll_no array.
}).then ((kuchbhi)=>{  //.then((kuchbhi) => {: Attaches another then handler to the getData Promise.
    console.log(kuchbhi); //console.log(kuchbhi);: Logs the template string containing kuchbhi data (bio data).
})
.catch((error)=>{  //.catch((error) => {: Attaches a catch handler to catch and log any errors that occurred in the promise chain.
    console.log(error);
})









const Student = new Promise( (resolve, reject) =>{
    setTimeout(()=>{
        let serialNumber = [1,2,3,4,5,6,7,8,9,10];
        resolve(serialNumber);
        // reject('error');
    }, 2000);
} );

const addData  =  (addOn) => {
    return new Promise ((resolve, reject)=>{
        setTimeout((addOn)=>{
            let details = {
                name : 'Hriday',
                surname : 'Jadhav',
                age : 21,
                contact : 9689516884
            }
            let {name, surname, age, contact} = details;
            resolve(`
            My serial number is ${addOn}
            I am ${name} ${surname}
            I am ${age} years old
            And my number is ${contact}
            `);
        },3000, addOn)
    })
} 
const addSec = (addSecond) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let sec = {
                gender : 'Male',
            }
            reject('Oops, error! You cannot add more.')
        },3000), addSecond;
    });
}

Student.then((studd)=>{
    console.log(studd);
    return addData(studd[1]);
}).then((data)=>{
    console.log(data);
    return addSec(data[1])
    
}).then((section)=>{
    console.log(section);
})
.catch((err)=>{
    console.log(err);
}).catch((secErr)=>{
    console.log(secErr);
})

