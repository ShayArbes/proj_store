const data = JSON.parse(localStorage.getItem('data'));
const params = window.location.search;
const searchParams = new URLSearchParams(params);
const productId = Number(searchParams.get('productId'));
let index =  data.findIndex((ele)=>{ return ele.id== productId})


let section = document.querySelector("#section");
const back = document.querySelector("#back")
back.addEventListener("click",()=>{
    history.back()
})

let arrayData = localStorage.getItem("data");
arrayData = JSON.parse(arrayData);

if (!arrayData) {
  arrayData = [...data];
  localStorage.setItem("data", JSON.stringify(arrayData));
}

let butAdd = document.querySelector("#butAdd")

const editProduct = ()=>{
    let title = document.querySelector("#title");
    let category = document.querySelector("#category");
    let price = document.querySelector("#Price");
    let Image = document.querySelector("#Image");
    let quantity = document.querySelector("#quantity");
    let Description = document.querySelector("#Description");

    let obj = {}
    arrayData[index].id = (arrayData.length+1);
    title.value?arrayData[index].title = title.value:null;
    category.value?arrayData[index].category=category.value:null;
    price.value?arrayData[index].price = price.value:null;
    Description.value?arrayData[index].description = Description.value:null;
    Image.value?arrayData[index].image = Image.value:null;
    quantity.value?arrayData[index].quantity = quantity.value:null;

    localStorage.setItem("data", JSON.stringify(arrayData));
}
butAdd.addEventListener("click",()=>{
    editProduct();
    window.location.assign("index.html");
})