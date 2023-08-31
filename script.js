//All Elements
const avgButton = document.querySelector(".avg");
const feesButton = document.querySelector(".fees");
const inputOldPrice = document.querySelector(".inputOldPrice");
const inputOldQuantityStocks = document.querySelector(
  ".inputOldQuantityStocks"
);

const showHideResult = document.querySelector(".resultPosition");
const feesResult = document.querySelector(".feesResult");

const inputNewPrice = document.querySelector(".inputNewPrice");
const inputNewQuantityStocks = document.querySelector(
  ".inputNewQuantityStocks"
);
let displayFees = document.querySelector(".fees");
const inputfees = document.querySelector(".inputfees");

const averagePrice = () => {
  let oldPrice =
    Number(inputOldPrice.value) * Number(inputOldQuantityStocks.value);
  let newPrice =
    Number(inputNewPrice.value) * Number(inputNewQuantityStocks.value);

  let newPricee = newPrice + oldPrice;
  let totalQuantity =
    Number(inputNewQuantityStocks.value) + Number(inputOldQuantityStocks.value);

  let result = newPricee / totalQuantity;

  console.log(result);

  feesResult.innerHTML = `
  <h1 class="showMe"> متوسط السعر</h1> <p>اجمالى عدد الاسهم: ${totalQuantity}  </p>
   <p> متوسط السعر: ${Math.round(result)}</p>
   <p>اجمالى المبلغ : ${newPricee} </p>
   <button class="btnSubmit" onClick="resetView()"> مبلغ جديد</button>
  `;
  showHideResult.classList.remove("showHideResultPosition");
  document.querySelector(".showMe").scrollIntoView({
    behavior: "smooth"
  });
};
function resetView() {
  location.href = "./index.html";
  console.log("hi");
}
// const feesCalculate = () => {
//   //   console.log(Number(inputfees.value));
//   let result =
//     Number(inputfees.value) * 0.0005 +
//     (Number(inputfees.value) * 0.0001 +
//       Number(inputfees.value) * 0.0001 +
//       1 +
//       Number(inputfees.value) * 0.00005457);

//   feesResult.innerHTML = `<h1>
//   اجمالى مصاريف
//   </h1><p style="text-align:center;">${result}</p>`;
// };

// feesButton.addEventListener("click", () => {
//   feesCalculate();
// });

avgButton.addEventListener("click", () => {
  averagePrice();
});
