function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('Nothing is for free! please supply a price');
    }

    const vat = 1.17;
    const total = (price * vat).toFixed(2);
    return total;
}

function generateId() {
    // const rand = Math.random();
    // console.log(`rand: ${rand}`);
    // const num = rand * 100000;
    // console.log(`num: ${num}`);
    // const floor = Math.floor(num);
    // console.log(`floor: ${floor}`);
    // return floor;
    
    const time = new Date().getTime();
    return Math.floor(Math.random() * time);
}
