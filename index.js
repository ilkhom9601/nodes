// then/catch
// Async/Await
// CALLBACK


// Async/Await
// Promise
// CALLBACK


execute().then().catch();

async function execute() {

    try {
        console.log('passed here 1');
        const car = await getMyCar('21A:7180');
        console.log('Car :: ', car);
        const card = await getMyCard(car.owner);
        console.log('INFO: ', card);
    } catch (err) {
        console.log(err);
    }


};

async function getMyCar(number) {
    try {
        await delay();
        console.log('Fulfilled getMyCar');
        return {number: number, name: 'ferrari', year: 1989, color: "red", owner: "ilkhom"};
    } catch (err) {
        throw err;
    }
}

async function getMyCard(owner) {
    try {
        await delay();
        console.log('Fulfilled getMyCard');
        return {owner: "ilkhom", card_id: 45445544, amount: 2000000000};
    } catch (err) {
        throw err;
    }
}




function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 5000);
    })
}
