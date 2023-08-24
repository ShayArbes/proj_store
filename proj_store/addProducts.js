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

const pushProduct = ()=>{
    let title = document.querySelector("#title");
    let category = document.querySelector("#category");
    let price = document.querySelector("#Price");
    let Image = document.querySelector("#Image");
    let quantity = document.querySelector("#quantity");
    let Description = document.querySelector("#Description");

    let obj = {}
    obj.id = (arrayData.length+1);
    obj.title = title.value;
    obj.category=category.value;
    obj.price = price.value;
    obj.description = Description.value;
    obj.image = Image.value;
    obj.quantity = quantity.value;

    arrayData.push(obj);
    console.log(obj);
    localStorage.setItem("data", JSON.stringify(arrayData));
}
butAdd.addEventListener("click",()=>{
    pushProduct();
    window.location.assign("index.html");
})



