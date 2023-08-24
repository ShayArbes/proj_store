let section = document.querySelector("#section");
const productPage = (element)=>{
    
    let divCard = document.createElement("div");
    divCard.classList.add("divCard");
    let imgProducts = document.createElement("img");
    imgProducts.src = element.image;
    imgProducts.classList.add("imgProd");

     let divData = document.createElement("div");
     divData.classList.add("divData");

    let title = document.createElement("h3");
    title.classList.add("title");
    title.innerText ="Title";
    let titleProducts = document.createElement("p");
    titleProducts.classList.add("titleProducts");
    titleProducts.innerText = element.title;

    let titleDescription = document.createElement("h3");
    titleDescription.classList.add("titleDescription");
    titleDescription.innerText ="Description";
    let description = document.createElement("p");
    description.classList.add("description");
    description.innerText = element.description;

    let titleCategory = document.createElement("h3");
    titleCategory.classList.add("titleCategory");
    titleCategory.innerText ="Category";
    let category = document.createElement("p");
    category.classList.add("category");
    category.innerText = element.category;

    let titlePrice = document.createElement("h3");
    titlePrice.classList.add("titlePrice");
    titlePrice.innerText ="Price";
    let price = document.createElement("p");
    price.classList.add("price");
    price.innerText = element.price;

    let titleQuantity = document.createElement("h3");
    titleQuantity.classList.add("titleQuantity");
    titleQuantity.innerText ="Quantity";
    let quantity = document.createElement("p");
    quantity.classList.add("quantity");
    quantity.innerText = element.quantity;

    section.appendChild(divCard);
    
    divCard.appendChild(imgProducts);
    divCard.appendChild(divData);

    divData.appendChild(title);
    divData.appendChild(titleProducts)
    divData.appendChild(titleDescription)
    divData.appendChild(description)
    divData.appendChild(titleCategory)
    divData.appendChild(category)
    divData.appendChild(titlePrice)
    divData.appendChild(price)
    divData.appendChild(titleQuantity)
    divData.appendChild(quantity)

}

const data = JSON.parse(localStorage.getItem('data'));
const params = window.location.search;
const searchParams = new URLSearchParams(params);
const productId = Number(searchParams.get('productId'));
let element =  data.find((ele)=>{ return ele.id== productId})
console.log(element);
productPage(element)
const back = document.querySelector("#back")
back.addEventListener("click",()=>{
    history.back()
})

