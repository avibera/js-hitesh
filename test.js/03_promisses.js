const promiseOne = new Promise(function (resolve, reject) {
    //Do assync operations

    setTimeout(function () {
        console.log("Async function executed!!");
        resolve()
    }, 2000)
})

promiseOne.then(function () {
    console.log('PromiseOne consumed');
})

//********************************************************************* */

new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({ name: "Avinash", mail: "avibera141@gmail.com" })
    }, 2000)
}).then((user) => {
    console.log(user)
    return user.name
}).then((name) => {
    console.log(name)
})