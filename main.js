import { products } from "./products.js";

const searchInput = document.getElementById("search")
const categorySelect = document.getElementById("category")
const fromInput = document.getElementById("from")
const toInput = document.getElementById("to")
const resultDiv = document.getElementById("results")
const searchBtn = document.getElementById("searchBtn")

displayResult(products)

searchInput.addEventListener("input", search)
categorySelect.addEventListener("change", select)
categorySelect.addEventListener("click", (event) => {
    const fromVal = fromInput || 0
    const toVal = toInput || Infinity
    const filteredProducts = products.filter((product) => product.calories > fromVal && product.calories < toVal)
    displayResult(filteredProducts)
})
//logic
function search() {
    const filteredProducts = products
        .filter((produc) => produc.name.toLowerCase().startsWith((searchInput.value.toLowerCase())))

    displayResult(filteredProducts)
}

function select() {
    const filteredProducts = products.filter(
        (products) => products.category === categorySelect.value
    );


    displayResult(filteredProducts)
    if (categorySelect.value === "all") {
        displayResult(products)
    }
}


//     const fromVal = fromInput || 0
//     const toVal = toInput || Infinity

//     const filteredProducts = products.filter((product) => product.calories > fromVal && product.calories < toVal)
// }
// displayResult(filteredProducts)


function displayResult(products) {
    resultDiv.innerHTML = products.map((product) => {

        return `
        <div class="result" style="--color: ${product.color === "wihte" ? "black" : product.color}">
            <h2>${product.name}</h2>
            <p>Category -${product.category} </p>
            <p>Calories -${product.calories} </p>
            <p>Vitamins -${product.vitamins.join(",")} </p>
            <p>Color - ${product.color}</p>
        </div>
        `;
    }).join("")
}