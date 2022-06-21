function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('Nothing is for free! please supply a price');
    }

    const vat = 1.17; // = maam
    const total = (price * vat).toFixed(2);
    return total;
}

class Product {
    constructor(productPrice, productName, productImage, productDescription) {
        this.price = productPrice;
        this.name = productName;
        this.image = productImage;
        this.description = productDescription;
        this.id = this.generateId();
    }

    // for inner use - inside the class
    generateId() {
        const time = new Date().getTime();
        return Math.floor(Math.random() * time);
    }

    // for outer user - outside the class
    getPrice() {
        return `$${this.price}`;
    }

    getName() {
        return this.name;
    }

    getImage() {
        const IMG_PATH = 'https://cdn.pixabay.com/photo/'; // configuration of the project
        return `${IMG_PATH}${this.image}`;
    }

    getDescription() {
        return this.description;
    }

    getId() {
        return this.id;
    }
}

const products = [
    new Product(
        15,
        'Yellow cheese',
        '2016/03/05/19/24/cheese-1238395_960_720.jpg',
        'great product really!'
    ),
    new Product(
        3,
        'Ice cream',
        '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        'be careful - very cold'
    ),
    new Product(
        55,
        'aaa',
        '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        '',
    ),
];


function searchProduct() {
    const searchField = document.getElementById('search-field');
    const searchTerm = searchField.value.trim(); // ' tab '.trim() => 'tab'

    const searchResult = products.filter(prod => {
        return prod.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    });

    displayProducts(searchResult);
}


function getTotalProducts() {
    const total = document.getElementById('total-products');
    total.innerHTML = products.length;
}


// take products data and add it into the html of each card
function displayProducts(productData) {
    const container = document.getElementById('products-container');
    let html = '';

    productData.forEach(prod => {
        html +=
            `<div class="card" style="width: 18rem;">
                <img src="${prod.getImage()}"
                    class="card-img-top" alt="${prod.getDescription()}">
                <div class="card-body">
                    <h5 class="card-title">${prod.getName()}</h5>
                    <p class="card-text">
                        ${prod.getPrice()}
                    </p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>`;
    })

    container.innerHTML = html;
    getTotalProducts();
}

// call the first function
displayProducts(products);
