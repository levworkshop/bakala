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

const products = [
    {
        id: 1,
        price: 15,
        name: 'yellow cheese',
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        description: 'great product really!',
    },
    {
        id: 2,
        price: 3,
        name: 'ice cream',
        image: 'https://cdn.pixabay.com/photo/2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        description: 'be careful - very cold',
    },
];

function displayProduct() {
    const container = document.getElementById('products-container');

    container.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg"
        class="card-img-top" alt="description of the product">
    <div class="card-body">
        <h5 class="card-title">Yellow Cheese</h5>
        <p class="card-text">
            $15.00</p>
        <a href="#" class="btn btn-primary">View Details</a>
    </div>
</div>`;
}
