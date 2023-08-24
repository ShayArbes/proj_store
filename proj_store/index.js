const section = document.querySelector("#section");

const filterCategories = (src_) => {
  section.innerHTML = "";
  let arrayData = localStorage.getItem("data");//----------------------
  arrayData = JSON.parse(arrayData);

  if (!arrayData) {
    arrayData = [...data];
    localStorage.setItem("data", JSON.stringify(arrayData));
  }
  let filteredData = arrayData.filter((ele) => {
    return (
      ele.category.search(src_) >= 0 ||
      ele.title.search(src_) >= 0 ||
      "all" === src_
    );
  });

  filteredData.forEach((element) => {
    let divCard = document.createElement("div");
    divCard.classList.add("divCard");
    divCard.addEventListener("click", () => {
      window.location.assign(`productPage.html?productId=${element.id}`);
    });
    let imgProducts = document.createElement("img");
    imgProducts.src = element.image;
    imgProducts.classList.add("imgProd");

    let titleProducts = document.createElement("p");
    titleProducts.classList.add("titleProducts");
    titleProducts.innerText = element.title;
    let hr = document.createElement("hr");
    hr.classList.add("hr");
    console.log(element);
    let divQuantity = document.createElement("div");
    divQuantity.classList.add("divQuantity");
    let plusOne = document.createElement("i");
    plusOne.innerText = "exposure_plus_1";
    plusOne.classList.add("material-icons");
    plusOne.classList.add("exposure_plus_1");
    plusOne.addEventListener("click", (eve) => {
      eve.stopPropagation();
      element.quantity++;
    });
    let quantity = document.createElement("p");
    quantity.innerText = element.quantity;
    quantity.classList.add("quantity");
    let minusOne = document.createElement("i");
    minusOne.innerText = "exposure_neg_1";
    minusOne.classList.add("material-icons");
    minusOne.classList.add("exposure_neg_1");
    minusOne.addEventListener("click", (eve) => {
      eve.stopPropagation();
      element.quantity--;
    });

    let divIconsCards = document.createElement("div");
    divIconsCards.classList.add("divIconsCards");
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("material-icons");
    deleteIcon.classList.add("card-icons");
    deleteIcon.innerText = "delete";
    deleteIcon.addEventListener("click", (event) => {
      let index = arrayData.findIndex((ele) => {
        return element.id == ele.id;
      });
      event.stopPropagation();
      arrayData.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(arrayData));
      location.reload();
    });

    let editIcon = document.createElement("i");
    editIcon.classList.add("material-icons");
    editIcon.classList.add("card-icons");
    editIcon.innerText = "edit";
    editIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      window.location.assign(`editProduct.html?productId=${element.id}`);
    });

    divCard.appendChild(imgProducts);
    divCard.appendChild(titleProducts);
    divCard.appendChild(hr);
    divCard.appendChild(divQuantity);
    divCard.appendChild(divIconsCards);

    divQuantity.appendChild(plusOne);
    divQuantity.appendChild(quantity);
    divQuantity.appendChild(minusOne);

    divIconsCards.appendChild(deleteIcon);
    divIconsCards.appendChild(editIcon);

    section.appendChild(divCard);
  });
};

filterCategories("all");
let btn = document.querySelector("#butSearch");
let butSearch = document.querySelectorAll(".butNav");

butSearch.forEach((ele) => {
  ele.addEventListener("click", () => {
    filterCategories(ele.value);
  });
});

btn.addEventListener("click", () => {
  let src_ = document.querySelector("#input").value;
  filterCategories(src_);
});
