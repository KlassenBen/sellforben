"use strict";

// Elements //

//--> buttons
const btnbuy = document.querySelector("#btnbuy");
const btnsell = document.querySelector("#btnsell");
const btnaskfor = document.querySelector("#btnaskfor");
const btnpublish = document.querySelector("#btnpublish");
const btnsend = document.querySelector("#btnsend");
const btnchooseCreateAccount = document.querySelector("#btncreate-account");
const btnchooselogin = document.querySelector("#btnlogin");
const btncreateAccount = document.querySelector(".btncreate-account");
const btnlogin = document.querySelector(".btnlogin");
const btnask = document.querySelector(".btnask");
const btnaskNow = document.querySelector(".btnask-now");
const btncancelLogcreate = document.querySelector(".btncancel-logcreate");
const btn2cancelLogcreate = document.querySelector(".btn2cancel-logcreate");

//--> containers

const conBuy = document.querySelector("#container-main--buy");
const conAsk = document.querySelector("#container-main--ask");
const conSell = document.querySelector("#container-main--sell");
const conItemSell = document.querySelectorAll(".container-item");
const footer = document.querySelector("#footer");

//--> modals

const modalSell = document.querySelector("#modal-sell");
const logcreate = document.querySelector("#logcreate");
const createAccount = document.querySelector("#create-account");
const login = document.querySelector("#login");
const modalInputAsk = document.querySelector("#modal-input--ask");

//--> text and values
const askDescriptionText = document.querySelector(".ask-description--text");
const textAreaAsk = document.querySelector("#textarea-ask");
const inputNameSell = document.querySelector("#inputname-sell");
const inputDescriptionSell = document.querySelector("#inputdescription-sell");
const inputPriceSell = document.querySelector("#inputprice-sell");
const inputLocationSell = document.querySelector("#inputlocation-sell");

//--> Inputs
const createUsername = document.querySelector(".creataccount-username");
const createPhoneNum = document.querySelector(".creataccount-phonenum");
const createPassword = document.querySelector(".creataccount-createpassword");
const confirmPassword = document.querySelector(".creataccount-confirmpassword");

const inUsername = document.querySelector(".login-username");
const inPhoneNum = document.querySelector(".login-phonenum");
const inPassword = document.querySelector(".login-password");

//

//////////////////////////////////////////

//////////////////////////////////////////

let CurrentItemNumber = 0;

const CurrentItemNumberFunction = function () {
  CurrentItemNumber++;
};

// Arrays and Objects

const accounts = [];
let accounts2 = [];
const itemsSellArray = [];
const itemAskArray = [];
let currentAccount;
// functions

// -> Display and hide container Buy
const conBuyDisp = function () {
  conBuy.style.transform = "translateX(0%)";
};
const conBuyHide = function () {
  conBuy.style.transform = "translateX(-100%)";
  // conBuy.style.display = "none";
};

// -> Display and hide container Sell
const conSellDisp = function () {
  conSell.style.transform = "translateX(0%)";
};
const conSellHide = function () {
  conSell.style.transform = "translateX(-100%)";
};

// -> Display and hide container Ask
const conAskDisp = function () {
  conAsk.style.transform = "translateX(0%)";
};
const conAskHide = function () {
  conAsk.style.transform = "translateX(-100%)";
};

// -> Display and hide btn Publish
const btnPublishDisp = function () {
  btnpublish.style.transform = "translateX(-20%)";
};
const btnPublishHide = function () {
  btnpublish.style.transform = "translateX(200%)";
};

const ItemAsk = function (text) {
  this.text = text;
};

const ItemSell = function (
  sellerName,
  sellerPhoneNum,
  itemName,
  itemDiscription,
  itemPrice,
  itemLocation,
  itemId
) {
  this.sellerName = sellerName;
  this.sellerPhoneNum = sellerPhoneNum;
  this.itemName = itemName;
  this.itemDiscription = itemDiscription;
  this.itemPrice = itemPrice;
  this.itemLocation = itemLocation;
  this.itemId = itemId;
};

const User = function (userName, phoneNumber, password) {
  (this.userName = userName),
    (this.phoneNumber = phoneNumber),
    (this.password = password);
};

const creatAccountFunction = function (userName, phoneNumber, password) {
  accounts.push(new User(userName, phoneNumber, password));
};

const init = function () {
  conAskHide();
  conBuyHide();
  conSellHide();
  btnPublishHide();
  logcreate.style.transform = "translateX(0%)";
  btnask.style.transform = "translateX(-130%)";
  footer.classList.add("hiden-footer");
  login.style.transform = "translateX(-100%)";
  createAccount.style.transform = "translateX(-100%)";
};

const initDisplaySell = function () {
  itemsSellArray.forEach(function (mov, i, arr) {
    console.log(mov);

    const sellItemHtml = `<div class="container-item clearfix" data-item="${CurrentItemNumber}">
      <h2 class="text-seller clearfix">
      
      <p class="name-seller clearfix">@${mov.sellerName}</p>
      </h2>
      
      <img src="images/bin2.png" alt="" />
      <div class="container-pricelocation--sell">
      <h3 class="price">$${mov.itemPrice}</h3>
      <h5 class="text-location">Ubicado en:</h5>
      <h6 class="location clearfix">
      ${mov.itemLocation}
      </h6>
      </div>
      <h1 class="name-item">${mov.itemName}</h1>
      <p class="description-item clearfix">${mov.itemDiscription}</p>
      <div class="btncontainer clearfix">
      <button class="btnwhatsapp btncontact-buy">WhatsApp</button>
      <button class="btncall btncontact-buy">📞 LLamar</button>
      <button class="btnmessage btncontact-buy">Enviar Mensaje</button>
      </div>
      <p id="time-advertised">ayer 10:27 pm</p>
      
      </div>`;

    conBuy.insertAdjacentHTML("beforeend", sellItemHtml);
    conSell.insertAdjacentHTML("beforeend", sellItemHtml);
  });
};

itemsSellArray.push(
  new ItemSell(
    "Dan",
    7777777777,
    "Tractor",
    "Año 1999 John deere tractor. En buenos condeciones",
    60000,
    "Durango",
    CurrentItemNumber
  )
);

initDisplaySell();

console.log(itemsSellArray);

const initDisplayAsk = function () {
  const askHtml = `<div class="container-item--ask clearfix">
        <h2 class="text-seller clearfix">
        <p class="name-seller--ask clearfix">@${currentAccount.userName}</p>
        </h2>
        <h1 class="name-item--ask">¿Alguien Vende?</h1>
        <p class="description-item--ask">
        
        ${textAreaAsk.value}
        </p>
        <div class="btncontainer">
        <button class="btnwhatsapp btncontact-ask">WhatsApp</button>
        <button class="btncall btncontact-ask">📞 LLamar</button>
        <button class="btnmessage btncontact-ask">Enviar Mensaje</button>
        </div>
        <p id="time-advertised">ayer 10:27 pm</p>
        </div>`;

  conAsk.insertAdjacentHTML("beforeend", askHtml);
};

const deletea = function () {
  createAccount.style.transform = "translateX(-100%)";
  login.style.transform = "translateX(-100%)";
  modalInputAsk.style.transform = "translateX(-120%)";
};

const loginFunction = function () {
  currentAccount = accounts.find(
    (acc) =>
      acc.phoneNumber === +inPhoneNum.value ||
      acc.phoneNumber === +createPhoneNum.value
  );
  if (
    currentAccount?.userName === inUsername.value &&
    currentAccount?.password === +inPassword.value
  ) {
    logcreate.style.transform = "translateX(-100%)";
    login.style.transform = "translateX(-100%)";
    conAskHide();
    conSellHide();
    btnPublishDisp();
    footer.classList.remove("hiden-footer");
    btnask.style.transform = "translateX(0%)";
    createAccount.style.transform = "translateX(-100%)";
  } else {
    alert(
      "Esta cuenta no existe. Checa tu imformacion o crea una cueta primero."
    );
  }
};

//--> Setdata Funtion

const loopItems = function (itemHere) {
  itemHere.forEach();
};

// Function Calls

const saveUserAccs = function () {
  localStorage.setItem("userAccs", JSON.stringify(accounts));
};

const getUserAccs = function () {
  accounts2 = JSON.parse(localStorage.getItem("userAccs"));
  console.log(accounts2);
};

deletea();
init();
btn2cancelLogcreate.addEventListener("click", init);

// creatAccountFunction("Ben", 9967306118, 111111);
// creatAccountFunction("Dan", 9967306318, 222222);

currentAccount = accounts[1];

btnaskfor.addEventListener("click", function (e) {
  e.preventDefault();
  setTimeout(() => {
    askDescriptionText.style.transform = "translateY(-100%)";
  }, 8700);

  conAskDisp();
  conBuyHide();
  conSellHide();
  btnPublishHide();
  modalSell.classList.add("translated");
  btnask.classList.remove("hidden");
});

btnbuy.addEventListener("click", function (e) {
  e.preventDefault();

  conAskHide();
  conBuyDisp();
  conSellHide();
  btnPublishDisp();
  modalSell.classList.add("translated");
  btnask.classList.remove("hidden");
});

btnsell.addEventListener("click", function (e) {
  e.preventDefault();

  conAskHide();
  conBuyHide();
  conSellDisp();
  btnPublishDisp();
  btnask.classList.add("hidden");
  modalSell.classList.add("translated");
  modalInputAsk.style.transform = "translateX(-100%)";
});

btnpublish.addEventListener("click", function (e) {
  e.preventDefault();
  modalSell.classList.remove("translated");
  btnPublishHide();
});

btnsend.addEventListener("click", function (e) {
  e.preventDefault();
  CurrentItemNumberFunction();
  modalSell.classList.add("translated");
  btnPublishDisp();

  itemsSellArray.push(
    new ItemSell(
      currentAccount.userName,
      currentAccount.phoneNumber,
      inputNameSell.value,
      inputDescriptionSell.value,
      inputPriceSell.value,
      inputLocationSell.options[inputLocationSell.selectedIndex].text,
      CurrentItemNumber
    )
  );

  initDisplaySell();
});

btnchooseCreateAccount.addEventListener("click", function (e) {
  e.preventDefault();
  init();
  logcreate.style.transform = "translateX(-100%)";
  createAccount.style.transform = "translateX(0%)";
});

btncreateAccount.addEventListener("click", function () {
  if (createPassword.value === confirmPassword.value) {
    creatAccountFunction(
      createUsername.value,
      +createPhoneNum.value,
      +createPassword.value
    );
    saveUserAccs();
    getUserAccs();

    login.style.transform = "translateX(0%)";
  } else {
    alert("Your Password second password deos not match the first one");
  }
});

btnchooselogin.addEventListener("click", function () {
  login.style.transform = "translateX(0%)";
});

btncreateAccount.addEventListener("click", function () {
  login.style.transform = "translateX(0%)";
});

btnlogin.addEventListener("click", function () {
  loginFunction();
});

btnaskNow.addEventListener("click", function () {
  itemAskArray.push(new ItemAsk(textAreaAsk.value));
  console.log(itemAskArray);
  initDisplayAsk();

  textAreaAsk.textContent;
  modalInputAsk.style.transform = "translateX(-100%)";
});

btnask.addEventListener("click", function () {
  modalInputAsk.style.transform = "translateX(0%)";
  conAskDisp();
  conBuyHide();
  conSellHide();
  btnPublishHide();
});

btncancelLogcreate.addEventListener("click", function () {
  init();
});

// Event delegation
conBuy.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("container-item") ||
    e.target.classList.contains("btncontact-buy")
  ) {
    console.log("hello");
  }
});

conBuy.addEventListener("click", function (e) {
  if (e.target.classList.contains("btnmessage")) {
    console.log("clicked Enviar Mensaje");
  }
});
