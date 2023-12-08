"use strict";

// const { loop } = require("@cloudinary/url-gen/actions/effect");

// Elements //

//--> buttons
const btnsell = document.querySelector("#btnsell");
const btnbuy = document.querySelector("#btnbuy");
const btnads = document.querySelector("#btnads");
const btnask1 = document.querySelector("#btnask");
const btnpublish = document.querySelector("#btnpublish");
const btnsend = document.querySelector("#btnsend");
const btnsendCancel = document.querySelector("#btnsend-cancel");
const btnchooseCreateAccount = document.querySelector("#btncreate-account");
const btnchooselogin = document.querySelector("#btnlogin");
const btncreateAccount = document.querySelector(".btncreate-account");
const btnlogin = document.querySelector(".btnlogin");
const btnask = document.querySelector(".btnask");
const btnaskNow = document.querySelector(".btnask-now");
const btnaskCancel = document.querySelector(".btnask-cancel");
const btncancelLogcreate = document.querySelector(".btncancel-logcreate");
const btn2cancelLogcreate = document.querySelector(".btn2cancel-logcreate");
const headerLow = document.querySelector("#header-low");
const btnchooseUseCupon = document.querySelector("#btnchoose-use--cupon");
const btnTryApp = document.querySelector("#btntry-app");
const btnBuyApp = document.querySelector("#btnbuy-app");
const btnCancelProModal = document.querySelector("#promodal #btncancel");
const btnCancelCuponModal = document.querySelector("#cuponmodal #btncancel");
const btnUserUseCupon = document.querySelector("#btnuse-cupon");
const btnImgsSelect = document.getElementById("imgsSelecct");
const btnMenu = document.querySelector("#btnmenu");
const btnPremium = document.querySelector("#btnpremium");
const btnaskDiv = document.querySelector("#btnaskDiv");
const btnchangeUserLevel = document.querySelector("#btnchange-user-level");
const btncuponCreatorGet = document.querySelector(
  "#main-cupon-creator--container #get"
);
const btncuponShowClear = document.querySelector(
  "#main-cupon-show--container #btnclear"
);
const btncuponCreatorUse = document.querySelector(
  "#main-cupon-creator--container #use"
);
const btnmenuBack = document.querySelector("#btnmenu-back");
const btnappStats = document.querySelector("#btnstats");
const btnappTools = document.querySelector("#btntools");
const btnappSetings = document.querySelector("#btnsetings");
const btnappAnswerQuestion = document.querySelector("#btnanswerquestion");
const btnadDeleteImg = document.querySelector("#btnad-delete--img");
const btnadClearText = document.querySelector("#btnad-clear--text");
const btnadSend = document.querySelector("#btnad-send");

const btnsortManager = document.querySelector("#btnsort-manager");
const btnsortAdmin = document.querySelector("#btnsort-admin");
const btnsortAssistant = document.querySelector("#btnsort-assistant");
const btnsortNormal = document.querySelector("#btnsort-normal");
const btnsortOpen = document.querySelector("#btnsort-open");
const btnsortSuspended = document.querySelector("#btnsort-suspended");
const btnsortBlocked = document.querySelector("#btnsort-blocked");
const btnsortPlan = document.querySelector("#btnsort-plan");
const btnsortOnTrial = document.querySelector("#btnsort-ontrial");
const btnsortNoPlan = document.querySelector("#btnsort-no--plan");
const btnsortAll = document.querySelector("#btnsort-all");
const btnsortAllUsersEdit = document.querySelector("#btnsort-all-users--edit");
const btnsortReloadUsersAccounts = document.querySelector(
  "#btnsort-reload-users--accounts"
);
const btnuseUrlForAd = document.querySelector(
  "#btnuse-input-url-for-ad--video"
);
const selectsortAllUsersEdit = document.querySelector(
  "#user-edit-sort--select"
);

const topBarr = document.querySelector("#top-bar");

//--> Btns BACK and CHANGE
const btnbackCurUserInfDisp = document.querySelector(
  "#cur-user--info--container button"
);
const btnchangeCurUserInfDisp = document.querySelector(
  "#cur-user--info--container #btnchange"
);

const btnbackConMainUserStats = document.querySelector(
  "#main-stats--container button"
);
const btnbackConMainTools = document.querySelector(
  "#main-tools--container button"
);
const btnbackConMainSetings = document.querySelector(
  "#main-setings--container button"
);
const btnbackConAnswerquestion = document.querySelector(
  "#main-answerquestion--container button"
);
const btnbackConUsersDisp = document.querySelector(
  "#users-disp--container button"
);

const btncanelCurUserInfoChange = document.querySelector(
  "#cur-stats--user--change #cancel"
);
const btndoneCurUserInfoChange = document.querySelector(
  "#cur-stats--user--change #done"
);

const btndeleteCurUserAcc = document.querySelector(
  "#cur-user--info--container #btndelete-account"
);

const btnlogoutCurUserAcc = document.querySelector(
  "#cur-user--info--container #btnlogout"
);
const btnCSCancel = document.querySelector("#btncancel-change--setings");
const btnCSReset = document.querySelector("#btnreset-change--setings");
const btnCSApply = document.querySelector("#btnapply-change--setings");

const btnmodalSellDeletImgs = document.querySelector(
  "#modal-sell #btndelete-imgs"
);
const btncancelProModalDiscounts = document.querySelector(
  "#promodal-discounts #btncancel"
);

const btncancelDubleCheckConfirmMessage = document.querySelector(
  "#doublecheck-confirm--container #con #btndoublecheck-cancel"
);
const btnconfirmDubleCheckConfirmMessage = document.querySelector(
  "#doublecheck-confirm--container #con #btndoublecheck-confirm"
);
const btnchangeUserDetailsEdit = document.querySelector(
  "#btnapply-change-user--details"
);
const btncancelSearchBuy = document.querySelector("#btnsearch-buy--cancel");
const btnloadAddsAddCreator = document.querySelector(
  "#main-new-ad--container  #btnadload-adds"
);
const btnbackFromtermsAndConditions = document.querySelector(
  "#back-from-terms-and--conditions"
);

//--> graphs
const graphSumaryAlUsers = document.querySelector("#sumary-alusers--disp");
const graphSumaryAlUsersPro = document.querySelector(
  "#sumary-users--container #pro span"
);
const graphSumaryAlUsersOnTrial = document.querySelector(
  "#sumary-users--container #on-trial span"
);
const graphSumaryAlUsersNormal = document.querySelector(
  "#sumary-users--container #norm span"
);
const graphSumaryAlUsersTotal = document.querySelector(
  "#sumary-users--container #total span"
);
const graphSumaryProUsers = document.querySelector("#sumary-prousers--disp");
const graphSumaryOntrialUsers = document.querySelector(
  "#sumary-ontrialusers--disp"
);
const graphSumaryNormUsers = document.querySelector("#sumary-normusers--disp");
const conSumaryUsers = document.querySelector("#sumary-users--container");

//--> containers
const conMain = document.querySelector("#main-container");
const conSearch = document.querySelector("#container-main--search");
const conBuy = document.querySelector("#container-main--buy");
const conAds = document.querySelector("#container-main--ads");
const conAsk = document.querySelector("#container-main--ask");
const conSell = document.querySelector("#container-main--sell");
const conItemSell = document.getElementsByClassName(".container-item");
const conItemAsk = document.querySelectorAll(".container-item--ask");
const footer = document.querySelector("#footer");
const conHideFooter = document.querySelector("#con-hide--footer");
const conMenu = document.querySelector("#menu-container");
const conStats = document.querySelector("#stats-container");
const dubleCheckConfirmMessage = document.querySelector(
  "#doublecheck-confirm--container"
);
const dubleCheckConfirmMessageText = document.querySelector(
  "#doublecheck-confirm--container #con p"
);
const conUsersDisp = document.querySelector("#users-disp--container");
const conCurUserInfo = document.querySelector("#cur-user--info--container");
const conMainStats = document.querySelector("#main-stats--container");
const conMainTools = document.querySelector("#main-tools--container");
const conMainSetings = document.querySelector("#main-setings--container");
const conMainAnswersQuestion = document.querySelector(
  "#main-answerquestion--container"
);
const conCurUserInfoChange = document.querySelector("#cur-stats--user--change");
const conimgsForSellItems = document.querySelector("#imgs-for-sell-items--con");

const conConfirmationMessage = document.querySelector(
  "#confirmation-container"
);
const conICCuponsShow = document.querySelector("#container-cupons--show");
const conICSavedCuponsShow = document.querySelector(
  "#container-savedcupons--show"
);
const conACImgForAd = document.querySelector("#img-container-for-ad");
const tapImgUploadImgForAd = document.querySelector(
  "#img-container-for-ad img"
);
const tapUploadImgForAd = document.querySelector("#tap-upload-img-for--ad");
const conImgsDisplayBig = document.querySelector("#con-imgs-display--big");
const conImgsDisplayScreen = document.querySelector(
  ".con-imgs-display--screen"
);
const conImgsDispMini = document.querySelector(".container-item");
const conAllAdsDispAdCreator = document.querySelector(
  "#main-new-ad--container #disp-all--adds"
);
const conAllAdsAdCreator = document.querySelector(".ad-contianer-all--ads");
const spinnerWhole = document.querySelector("#spinner");
const topHeader = document.querySelector("#header-top");

//--> Labels
const menuOptMyAccount = document.querySelector("#menu-container #my-account");
const menuOptSetings = document.querySelector("#menu-container #setings");
const menuOptHelp = document.querySelector("#menu-container #help");
const menuOptAbout = document.querySelector("#menu-container #about");
const mainConUsersEdit = document.querySelector("#main-user--edit");
const conUsersEdit = document.querySelector("#users-container--edit");
const conTermsAndConditions = document.querySelector("#terms-and--conditions");

//--> modals
const modalSell = document.querySelector("#modal-sell");
const MSIncludeFotos = document.querySelector("#modal-sell #include-fotos");

const logcreate = document.querySelector("#logcreate");
const logcreate2 = document.querySelector("#logcreateHalf");
const createAccount = document.querySelector("#create-account");
const login = document.querySelector("#login");
const modalInputAsk = document.querySelector("#modal-input--ask");
const proModal = document.querySelector("#promodal");
const cuponModal = document.querySelector("#cuponmodal");
const PDProModalDiscounts = document.querySelector("#promodal-discounts");
const PDSpecialDiscountShow = document.querySelector("#special-discount--show");
const imgsFromDescription = document.querySelector("#imgs-from--description");

//--> text and values

//--> start Promodal Discounts Values <--//
const DPAppPrice = document.querySelector(
  "#pd-actual-price-description--text #price"
);
const DPGeneralDiscount = document.querySelector(
  "#pd-general-discount-description--text #discount"
);
const DPOnGeneralDiscountPrice = document.querySelector(
  "#pd-ondiscount-price-description--text #ondiscount-price"
);
const DPSpecialDiscount = document.querySelector(
  "#pd-special-discount-description--text #special-discount"
);
const DPOnSpecialDiscountPrice = document.querySelector(
  "#pd-onspecial-discount-price-description--text #onspecial-discount--price"
);
const DPFinalOnDiscountPrice = document.querySelector(
  "#pd-final-ondiscount-price-description--text #final-price"
);

//--> End Promodal Discounts Values <--//
const headerName = document.querySelector("#header-name");
const despNumberOfUsers = document.querySelector("#number-of--users");
const textNumberOfUsers = document.querySelector("#number-of--users span");

//--> Start Setings Values <--//
const VCSPlanPriceYear = document.querySelector(
  "#value-change-setings-plan-price--year"
);
const VCSPointsToPeso = document.querySelector(
  "#value-change-setings-points-to--pesos"
);
const VCSAutoDeleteAskMessagesAfterDays = document.querySelector(
  "#value-change-setings-auto-delete--askmessages"
);
const VCSMillisecondsOneDay = document.querySelector(
  "#value-change-setings-milliseconds-equals--day"
);
const VCSWaitDaysPublishAgainStandart = document.querySelector(
  "#value-change-setings-wait-days-publish--again"
);
const VCSWaitDaysRepublishSellItem = document.querySelector(
  "#value-change-setings-wait-days--republish"
);
const VCSGeneralDiscountAppPlan = document.querySelector(
  "#value-change-setings-general--discount"
);
const VCSSpecialDiscount1 = document.querySelector(
  "#value-change-setings-special--discount1"
);
const VCSSpecialDiscount2 = document.querySelector(
  "#value-change-setings-special--discount2"
);
const VCSSpecialDiscount3 = document.querySelector(
  "#value-change-setings-special--discount3"
);
const VCSAppTrialTime = document.querySelector(
  "#value-change-setings-app-trial--time"
);
const VCSSpecialDiscountTime1 = document.querySelector(
  "#value-change-setings-special-discount1--days"
);
const VCSSpecialDiscountTime2 = document.querySelector(
  "#value-change-setings-special-discount2--days"
);
const VCSSpecialDiscountTime3 = document.querySelector(
  "#value-change-setings-special-discount3--days"
);

//--> End Setings Values <--//

const confirmationMessageText = document.querySelector(
  "#confirmation-container #con p"
);
const curUserInfoPionts = document.querySelector(
  "#cur-user--info--container h1 span"
);
const curUserInfoPiontsInValue = document.querySelector(
  "#cur-user--info--container h2 span"
);
const askDescriptionText = document.querySelector(".ask-description--text");
const adDescriptionText = document.querySelector("#ad-description--text");

const askDescriptionTextTimeNumber = document.querySelector(
  "#ask-description-text--time"
);
const textAreaAsk = document.querySelector("#textarea-ask");
const textAreaAskDiv = document.querySelector("#textarea-ask--div");
const inputNameSell = document.querySelector("#inputname-sell");
const inputDescriptionSell = document.querySelector("#inputdescription-sell");
const inputPriceSell = document.querySelector("#inputprice-sell");
const inputLocationSell = document.querySelector("#inputlocation-sell");
const inputCupon = document.querySelector("#cuponmodal #inputcupon");
const sellerNameInCon = document.querySelector(".name-seller");
const usersDispUserName = document.querySelector(".stats-user--disp #username");
const usersDispUserSeparate = document.querySelector(".stats-user--disp");
const appTryDiscriptionText = document.querySelector("#promodal #try-app");
const usersDispUserPhonenum = document.querySelector(
  ".stats-user--disp #userphonenum"
);
const usersDispUserPasword = document.querySelector(
  ".stats-user--disp #userpasword"
);
const usersDispUserWhatsapp = document.querySelector(
  ".stats-user--disp #userwhatsapp"
);
const usersDispUserLevel = document.querySelector(
  ".stats-user--disp #userlevel"
);
const usersDispAccountStatus = document.querySelector(
  ".stats-user--disp #account-status"
);
const usersDispBusinessAccount = document.querySelector(
  ".stats-user--disp #business-account"
);

//--> Inputs
const insearchBuyContent = document.querySelector("#buy-search--input");
const insearchUsersUserEdit = document.querySelector(
  "#search-for-user-user--edit"
);

const inpurlForad = document.querySelector("#input-url-for-ad--video");

const inusersEditSelectChange = document.querySelector(
  "#user-edit-select-change--to"
);
const createUsername = document.querySelector(".creataccount-username");
const createPhoneNum = document.querySelector(".creataccount-phonenum");
const createPassword = document.querySelector(".creataccount-createpassword");
const createConfirmPassword = document.querySelector(
  ".creataccount-confirmpassword"
);
const quantityOfSelectedCuponCreator = document.querySelector(
  "#quantity-of-selected"
);
const inUsername = document.querySelector(".login-username");
const inPhoneNum = document.querySelector(".login-phonenum");
const inPassword = document.querySelector(".login-password");
const inuserIdForChangeDetials = document.querySelector(
  "#input-userid-for-change--details"
);

//--> Start Setings Inputs <--//
const ICSPlanPriceYear = document.querySelector(
  "#input-change-setings-plan-price--year"
);
const ICSPointsToPeso = document.querySelector(
  "#input-change-setings-points-to--pesos"
);
const ICSAutoDeleteAskMessagesAfterDays = document.querySelector(
  "#input-change-setings-auto-delete--askmessages"
);
const ICSMillisecondsOneDay = document.querySelector(
  "#input-change-setings-milliseconds-equals--day"
);
const ICSWaitDaysPublishAgainStandart = document.querySelector(
  "#input-change-setings-wait-days-publish--again"
);
const ICSWaitDaysRepublishSellItem = document.querySelector(
  "#input-change-setings-wait-days--republish"
);
const ICSGeneralDiscountAppPlan = document.querySelector(
  "#input-change-setings-general--discount"
);
const ICSSpecialDiscount1 = document.querySelector(
  "#input-change-setings-special--discount1"
);
const ICSSpecialDiscount2 = document.querySelector(
  "#input-change-setings-special--discount2"
);
const ICSSpecialDiscount3 = document.querySelector(
  "#input-change-setings-special--discount3"
);
const ICSSpecialDiscountTime1 = document.querySelector(
  "#input-change-setings-special-discount1--days"
);
const ICSSpecialDiscountTime2 = document.querySelector(
  "#input-change-setings-special-discount2--days"
);
const ICSSpecialDiscountTime3 = document.querySelector(
  "#input-change-setings-special-discount3--days"
);
const ICSAppTrialTime = document.querySelector(
  "#input-change-setings-app-trial--time"
);

//--> End Setings Inputs <--//

//--> Selectors
const cuponTypeSelector = document.querySelector("#cupon-type--selector");
const agreeTermsAndConditions = document.querySelector(
  "#agree-to-terms--conditions"
);
const goToTermsAndConditions = document.querySelector(
  "#go-to-terms-and-conditions--app"
);

//--> Files
const imgsElem = document.getElementById("inp-sell--imgs");
// const imgAd = document.querySelector("#inp-ad--img");

//--> Displays
const displayCuponInCreator = document.querySelector("#cupon-display");
const displayLiveDescriptionTextInCreator = document.querySelector(
  "#ad-live--description"
);

const generalTapAddImgForAd = document.querySelector("#ad-image--container");

//////////// App Rebuild /////////////

class User {
  userStatus = "no plan"; // trial, promo, plan, no plan, trial done
  trialDone = false;
  whatsApp = false;
  businessAccount = false;
  userLevel = "normal"; // admin, manager, assistent, normal
  accountStatus = "open"; // blocked, suspended, open
  itemsCount = 0;
  itemsCountCurYear = 0;
  points = 0;
  timeStampProStart;
  timeStampProTime;
  timeStampLastPublishItem;

  constructor(userId, userName, phoneNumber, password, dateAccountCreated) {
    (this.userId = userId),
      (this.userName = userName),
      (this.phoneNumber = phoneNumber),
      (this.password = password),
      (this.dateAccountCreated = dateAccountCreated);
  }
}
class DeletedAccount {
  whatsApp = false;
  businessAccount = false;
  userLevel = "normal";
  itemsCount = 0;
  itemsCountCurYear = 0;

  constructor(
    userId,
    userName,
    phoneNumber,
    password,
    userStatus,
    accountStatus
  ) {
    (this.userId = userId),
      (this.userName = userName),
      (this.phoneNumber = phoneNumber),
      (this.password = password),
      (this.userStatus = userStatus),
      (this.accountStatus = accountStatus);
  }
}

class Item {
  constructor(
    sellerName,
    sellerPhoneNum,
    sellerId,
    itemName,
    itemDiscription,
    itemPrice,
    itemLocation,
    itemId,
    itemImagesUrls = [],
    timePublish,
    timeStamp
  ) {
    this.sellerName = sellerName;
    this.sellerPhoneNum = sellerPhoneNum;
    this.sellerId = sellerId;
    this.itemName = itemName;
    this.itemDiscription = itemDiscription;
    this.itemPrice = itemPrice;
    this.itemLocation = itemLocation;
    this.itemId = itemId;
    this.itemImagesUrls = itemImagesUrls;
    this.timePublish = timePublish;
    this.timeStamp = timeStamp;
  }
}

class Ad {
  constructor(imgUrl, description, timeStamp, time, type) {
    this.imgUrl = imgUrl;
    this.description = description;
    this.timeStamp = timeStamp;
    this.time = time;
    this.type = type; //vid or img
  }
}

class ItemAsk {
  constructor(userName, phoneNum, id, mess, askerId, timeStamp) {
    (this.userName = userName),
      (this.phoneNumber = phoneNum),
      (this.id = id),
      (this.message = mess),
      (this.askerId = askerId),
      (this.timeStamp = timeStamp);
  }
}

class Cupon {
  constructor(cupon, type, quantityOfSelected, timeStamp) {
    (this.cupon = cupon),
      (this.type = type),
      (this.quantityOfSelected = quantityOfSelected);
    this.timeStamp = timeStamp;
  }
}

class App {
  #CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dkvsxpnp6/upload";
  #CLOUDINARY_UPLOAD_PRESET = "bldgr2du";

  #alphaArray = [
    "0",
    "A",
    "B",
    "C",
    "1",
    "D",
    "E",
    "F",
    "2",
    "G",
    "H",
    "I",
    "3",
    "J",
    "K",
    "L",
    "4",
    "M",
    "N",
    "Ñ",
    "5",
    "O",
    "P",
    "Q",
    "6",
    "R",
    "S",
    "T",
    "7",
    "U",
    "V",
    "W",
    "8",
    "X",
    "Y",
    "Z",
    "9",
  ];
  inCordY;
  localCuponArr = [];
  #deletedAccounts = [];
  #cuponsArray = [];
  accounts = [];
  currentAccount;
  itemsSellArray = [];
  adsArray = [];
  #itemAskArray = [];
  menudispToogle = false;
  appSetingsAdmin = [];
  deg;
  adImageurlsStored = "";
  itemImgsurlsStored = [];
  #mycloudNameForImgUpload = "dkvsxpnp6";
  #myuploadPresetForImgUpload = "Compra_Venta";
  typeOfAd;

  appSettingsAdminObject = {
    price: {
      appPriceOneYear: 249,
      pointsToPeso: 12,
      generalDiscount: 5,
      specialDicount1: 50,
      specialDicount2: 30,
      specialDicount3: 20,
    },
    time: {
      deleteAskMessageAfterDays: 5,
      timePublishItemAgainDays: 3,
      publishAgainInDaysStandart: 6,

      //fake time
      oneDayInMilliseconds: 5000,

      //Real time
      // oneDayInMilliseconds: 86400000,
      specialDicountTime1: 3,
      specialDicountTime2: 2,
      specialDicountTime3: 50,
      appTrialTimeDays: 30,
    },
  };

  constructor() {
    this._init();
    this._events();
  }

  // All Funtions Start here
  ////////////////////
  _init() {
    this._logedinOrLogin();
  }

  _logedinOrLogin() {
    // this._saveCurrentAcc();

    this._getCurrentAcc();

    if (this.currentAccount) {
      this._logedinConDisp();
      this._funtionsForBothInits();
    } else {
      this._funtionsForBothInits();
      this._conSellHide();
      this._conBuyHide();
      this._conAdsHide();
      this._conAskHide();
      this._btnPublishHide();
      this._loginHide();
      this._logcreateHide();
      this._createAccHide();
      this._logcreateDisp();
      this._footerHide();
      this._conHideFooterHide();
      this._btnaskDivHide();
      this._logcreate2Disp();
      this._clearInpCreateAcc();
      this._clearInpLogin();
      this._proModalHide();
      this._cuponModalHide();
      this._textAreaDivHide();
      this._conCurUserInfoChangeHide();
      this._conUsersDispHide();
      this._backCurUserInfDisp();
      this._conMenuHide();
      this._btnMenuHide();
      this._topBarrHide();
      this._PDSpecialDiscountShowHide();
      this._sortUsersEdit();
      this._conBuySearchHide();
      this._btnPublishHide();
      this._logAnyThing();

      // this._sendConCodeSMS(529967306118);
      // this._sendConCodeSMS();

      // this._clear();
      // this._termsHide();
    }
  }

  _funtionsForBothInits() {
    this._getUserAccs();
    // this._saveUserAccs();
    this._getSellItems();
    // this._saveSellItems();
    this._getAskMessages();
    // this._saveAskMessages();
    this._getCuponsArray();
    // this._saveCuponsArray();
    this._getAds();
    // this._saveAds();

    this._getTime();
    this._getTimeStamp();
    this._getAppSetingAdmin();

    this._getrandomNumDid(6);

    this._showImgsBig();
  }

  _termsHide() {
    conTermsAndConditions.style.display = "none";
    this._createAccDisp();
  }
  _termsDisp() {
    conTermsAndConditions.style.display = "block";
    this._createAccHide();
  }

  _clear() {
    setTimeout(() => {
      this._rotateLogo(0);
      console.log("Cleared");
    }, 5000);
  }

  _rotateLogo(ind, tmi, smth, rounds) {
    // const time = t;
    //ind = which logo
    //tmi = set time for interval
    //smth = smoothnes of the rotation. Lower number = smoother
    const LLogin = document.querySelector(".login-spinner--logo");
    const LCreateAccount = document.querySelector(
      ".create-account-spinner--logo"
    );
    const LForSpinner = document.querySelector(".for-spinner-spinner--logo");
    let intervalFunction;

    let deg = 0;

    const rotate = function (what) {
      const el = what;
      intervalFunction = setInterval(function () {
        if (deg <= rounds * 360) {
          deg += smth;
          el.style.transform = `rotate(${deg}deg)`;
        } else {
          console.log(deg);
          clearInterval(intervalFunction);
        }
      }, tmi);
    };

    if (ind === "login") {
      rotate(LLogin);
    } else if (ind === "create account") {
      rotate(LCreateAccount);
    } else if (ind === "spinner") {
      rotate(LForSpinner);
    }
    spinnerWhole.addEventListener("change", () => {
      // clearInterval(intervalFunction);
      console.log("changed");
    });
    btn2cancelLogcreate.addEventListener("click", function () {
      clearInterval(intervalFunction);
    });
    btncancelLogcreate.addEventListener("click", function () {
      clearInterval(intervalFunction);
    });

    btnlogin.addEventListener("click", function () {
      clearInterval(intervalFunction);
    });

    btncreateAccount.addEventListener("click", function () {
      clearInterval(intervalFunction);
    });
  }

  _showNumberOfUsers() {
    this._getUserAccs();
    headerName.classList.remove("header-name");
    headerName.classList.add("header-name--logedin");
    despNumberOfUsers.style.display = "block";
    topHeader.classList.add("header-top--orange");
    topHeader.classList.remove("header-top");
    const bsu = 10; //Number of users BEFORE SHOWING USERS
    const totalUsers = this.accounts.length;
    let numOfUsers;
    if (totalUsers < bsu) {
      numOfUsers = `menos de ${bsu}`;
    } else {
      numOfUsers = totalUsers;
    }
    textNumberOfUsers.textContent = numOfUsers;
  }

  _searchUserUserEdit() {
    let content = [];
    this._getUserAccs();
    const curId = this.currentAccount.userId;
    const arr = this.accounts;

    insearchUsersUserEdit.addEventListener("keyup", function () {
      content = [];
      while (conUsersEdit.hasChildNodes()) {
        conUsersEdit.removeChild(conUsersEdit.firstChild);
      }

      const text = insearchUsersUserEdit.value.toLowerCase();

      arr.forEach(function (mov, i, arr) {
        if (
          mov.userName.toLowerCase().includes(text) ||
          mov.phoneNumber.toLowerCase().includes(text) ||
          mov.userId.toLowerCase().includes(text)
        ) {
          content.push(true);

          let type = "stats-user-disp--noplan";
          if (mov.userStatus === "trial") {
            type = "stats-user-disp--trial";
          } else if (mov.userStatus === "promo" || mov.userStatus === "plan") {
            type = "stats-user-disp--promoplan";
          }

          const userHtml = `
          <div id="${mov.phoneNumber}" class="stats-user--disp ${type}"
        data-cur="1">
        <p class="users-name-t t">
        Name: <span class="users-name i">${mov.userName}</span>
        </p>
        <p class="users-phonenum-t t">
        Phone number: <span class="users-phonenum i">${mov.phoneNumber}</span>
        </p>
        <p class="users-pasword-t t">
        Password: <span class="users-pasword i">${mov.password}</span>
        </p>
        <p class="users-userid-t t">
        User id: <span class="users-pasword i">${mov.userId}</span>
        </p>
        <p class="users-status-t t">
        Pro Status: <span class="users-status i">${mov.userStatus}</span>
        </p>
        <p class="users-business-account-t t">
        Bussines account:
        <span class="users-business-account i">${mov.businessAccount}</span>
        </p>
        <p class="users-account-status-t t">
        Account Status:
        <span class="users-account-status i">${mov.accountStatus}</span>
        </p>
        <p class="users-userlevel-t t">
        User type: <span class="users-userlevel i">${mov.userLevel}</span>
        </p>
        <p class="users-whatsapp-t t">
        Has WhatsApp: <span class="users-whatsapp i">${mov.whatsApp}</span>
        </p>
        <p class="users-items-total-t t">
        Items this year:
        <span class="users-items-total i">${mov.itemsCountCurYear}</span>
        </p>
        <p class="users-items-year-t t">
        Items total: <span class="users-items-year i">${mov.itemsCount}</span>
        </p>
        </div>
          `;

          conUsersEdit.insertAdjacentHTML("beforeend", userHtml);
        } else {
          content.push(false);
        }
      });
      if (content.includes(true)) {
      } else {
        conUsersEdit.insertAdjacentHTML(
          "beforeend",
          `<p class="users-user-edit-search-no-content--found">Nothing found "${text}"</p>`
        );
        console.log("No content found");
      }
    });
  }

  _searchBuyContent() {
    let content = [];
    this._getSellItems();
    const curId = this.currentAccount.userId;
    const arr = this.itemsSellArray;
    insearchBuyContent.addEventListener("focus", function () {
      conSearch.style.display = "block";
      btnpublish.style.display = "none";
    });
    insearchBuyContent.addEventListener("keyup", function () {
      content = [];
      while (conSearch.hasChildNodes()) {
        conSearch.removeChild(conSearch.firstChild);
      }
      const text = insearchBuyContent.value.toLowerCase();
      arr.forEach(function (mov, i, arr) {
        if (
          mov.itemName.toLowerCase().includes(text) ||
          mov.itemDiscription.toLowerCase().includes(text)
        ) {
          content.push(true);
          let images = ``;
          let name;
          let translated = 0;
          if (mov.sellerId === curId) {
            name = "Tu";
          } else {
            name = mov.sellerName;
          }

          mov.itemImagesUrls.forEach(function (mov, i, arr) {
            images += `<img id="img-itmes--display" src="${mov}" alt=""  data-translated=${translated} >`;
            translated = translated + 100;
          });

          const sellItemHtml = `<div class="container-item" data-item="${mov.itemId}">
          <h2 class="text-seller clearfix">
          
          <p class="name-seller">${name}</p>
          <p class="phonenum-seller">${mov.sellerPhoneNum}</p>
          </h2>
    
    
          <div id="buy-imgs--container">
          ${images}
          </div>
          
          
          <div class="container-pricelocation--sell">
          <h3 class="price">$${mov.itemPrice}</h3>
          <h5 class="text-location">Ubicado en:</h5>
          <h6 class="location">
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
          <p id="time-advertised">${mov.timePublish}</p>
       
          </div>`;

          conSearch.insertAdjacentHTML("beforeend", sellItemHtml);
        } else {
          content.push(false);
        }
      });
      if (content.includes(true)) {
      } else {
        conSearch.insertAdjacentHTML(
          "beforeend",
          `<p class="con-buy-search-no-content--found">No encontramos nada con "${text}"</p>`
        );
        console.log("No content found");
      }
    });
  }

  _logAnyThing() {
    if (this.accounts !== undefined) {
      this.accounts[0].userLevel = "manager";
      this.accounts[1].userLevel = "admin";
      this.accounts[2].userLevel = "assistant";

      this._getSellItems();
      this._getAskMessages();
      this._saveUserAccs();
      this._getUserAccs();

      console.log("Sell Item:", this.itemsSellArray);
      console.log("Ask Messages:", this.#itemAskArray);
      console.log("Ads:", this.adsArray);
    } else {
      console.log("Can't set useLevel. No Accounts registered.");
    }
  }

  _calcDiscount(price, discount) {
    const discountPrice = (discount / 100) * price;
    const finalPrice = price - discountPrice;
    console.log(parseFloat(finalPrice).toFixed(2));
    return parseFloat(finalPrice).toFixed(2);
  }

  _displayProModalDiscountsValues() {
    // this.currentAccount = this.accounts[0];
    this._getAppSetingAdmin();
    this._getUserAccs();

    const appPrice = this.appSetingsAdmin.price.appPriceOneYear;
    const localGeneralDiscount = this.appSetingsAdmin.price.generalDiscount;
    const generalDiscountPrice = this._calcDiscount(
      appPrice,
      localGeneralDiscount
    );

    DPAppPrice.textContent = appPrice;
    DPGeneralDiscount.textContent = localGeneralDiscount;
    DPOnGeneralDiscountPrice.textContent = generalDiscountPrice;
    // const l = 250;

    if (
      this._getTimeStamp() -
        (this.currentAccount.timeStampProStart +
          this.currentAccount.timeStampProTime) <=
      this.appSetingsAdmin.time.specialDicountTime1 *
        this.appSetingsAdmin.time.oneDayInMilliseconds
      // l < 10
    ) {
      this._PDSpecialDiscountShowDisp();
      const disPrice = this._calcDiscount(
        appPrice,
        this.appSetingsAdmin.price.specialDicount1
      );

      DPSpecialDiscount.textContent =
        this.appSetingsAdmin.price.specialDicount1;
      DPOnSpecialDiscountPrice.textContent = disPrice;
      DPFinalOnDiscountPrice.textContent = disPrice;

      console.log(1);
    } else if (
      this._getTimeStamp() -
        (this.currentAccount.timeStampProStart +
          this.currentAccount.timeStampProTime) <=
      this.appSetingsAdmin.time.specialDicountTime2 *
        this.appSetingsAdmin.time.oneDayInMilliseconds
      // l < 20
    ) {
      this._PDSpecialDiscountShowDisp();
      const disPrice = this._calcDiscount(
        appPrice,
        this.appSetingsAdmin.price.specialDicount2
      );

      DPSpecialDiscount.textContent =
        this.appSetingsAdmin.price.specialDicount2;
      DPOnSpecialDiscountPrice.textContent = disPrice;
      DPFinalOnDiscountPrice.textContent = disPrice;
      console.log(2);
    } else if (
      this._getTimeStamp() -
        (this.currentAccount.timeStampProStart +
          this.currentAccount.timeStampProTime) <=
      this.appSetingsAdmin.time.specialDicountTime3 *
        this.appSetingsAdmin.time.oneDayInMilliseconds
      // l < 30
    ) {
      this._PDSpecialDiscountShowDisp();
      const disPrice = this._calcDiscount(
        appPrice,
        this.appSetingsAdmin.price.specialDicount3
      );

      DPSpecialDiscount.textContent =
        this.appSetingsAdmin.price.specialDicount3;
      DPOnSpecialDiscountPrice.textContent = disPrice;
      DPFinalOnDiscountPrice.textContent = disPrice;
    } else {
      this._PDSpecialDiscountShowHide();
      console.log("missed it");
      DPFinalOnDiscountPrice.textContent = generalDiscountPrice;
    }
  }

  _PDSpecialDiscountShowDisp() {
    PDSpecialDiscountShow.style.display = "block";
  }
  _PDSpecialDiscountShowHide() {
    PDSpecialDiscountShow.style.display = "none";
  }

  _deleteOverTimeAskMessages(arr) {
    for (let i = 0; i < arr.length; i++) {
      const curNum = arr[i];
      this.#itemAskArray.splice(curNum, 1);
      this._saveAskMessages();
    }

    // arr.forEach(function (mov, i, arr) {
    // });
  }

  _dubleCheckConfirmMessageDisplay(mess, back, go) {
    console.log(back, go);
    let can; //cancel
    let con; //continue
    if (!back) {
      can = "Cancelar";
    } else {
      can = back;
    }
    if (!go) {
      con = "Confirmar";
    } else {
      con = go;
    }
    console.log(can, con);
    dubleCheckConfirmMessage.style.display = "block";
    dubleCheckConfirmMessageText.textContent = mess;
    btnconfirmDubleCheckConfirmMessage.textContent = con;
    btncancelDubleCheckConfirmMessage.textContent = can;
  }

  _dubleCheckConfirmMessageHide() {
    dubleCheckConfirmMessage.style.display = "none";
  }

  _confirmationMessageDisplay(message, time) {
    confirmationMessageText.textContent = message;
    conConfirmationMessage.style.display = "block";

    const timeOutId = setTimeout(
      () => (conConfirmationMessage.style.display = "none"),
      time
    );

    conConfirmationMessage.addEventListener("click", function (e) {
      if (e.target.id === "hide-bar") {
        clearTimeout(timeOutId);
        conConfirmationMessage.style.display = "none";
      }
    });
  }

  _getTime() {
    let min;
    let day;
    const time = [];
    const sep = [];
    const date = new Date();

    min = date.getMinutes();
    day = date.getDate();

    if (min < 10) {
      min = "0" + min;
    } else {
      min = min;
    }
    if (day < 10) {
      day = "0" + day;
    } else {
      day = day;
    }

    sep.push(date.getHours());
    sep.push(min);
    sep.push(day);
    sep.push(date.getMonth());
    sep.push(date.getFullYear());

    time.push(sep.splice(0, 2).join(":"));
    time.push(sep.join("/"));
    const timeDate = time.join(" ");

    console.log("Hour and Date", timeDate);
    return timeDate;
  }

  _getTimeStamp() {
    const timeStamp = Date.now();
    return timeStamp;
  }

  _createItemId() {
    const date = new Date();
    const id = date.getTime() + this.currentAccount.phoneNumber;
    console.log("id", id);
    return id;
  }

  _preLogedin() {
    if (this.accounts[0] === null || this.accounts[0] === undefined) return;
    this._logedinConDisp();
    this._setCurAcc();
  }
  _setCurAcc() {
    this.currentAccount = this.accounts[0];
  }
  ////////////////////
  resetSellItems() {
    localStorage.removeItem("sellItems");
  }
  resetUserAccs() {
    // localStorage.removeItem("userAccs");
    this._saveUserAccs();
  }

  _resetUploadSellImgs() {
    // document.querySelector("#modal-sell form").reset();

    while (conimgsForSellItems.hasChildNodes()) {
      conimgsForSellItems.removeChild(conimgsForSellItems.firstChild);
    }
  }
  _clearConSearch() {
    while (conSearch.hasChildNodes()) {
      conSearch.removeChild(conSearch.firstChild);
    }
  }

  _resetUploadAdImgs() {
    while (conACImgForAd.hasChildNodes()) {
      conACImgForAd.removeChild(conACImgForAd.firstChild);
    }
  }

  _resetModalSell() {
    inputNameSell.value = "";
    inputDescriptionSell.value = "";
    inputPriceSell.value = "";
    this._resetUploadSellImgs();
  }

  _saveAppSetingAdmin() {
    localStorage.setItem(
      "appSetingsAdminObject",
      JSON.stringify(this.appSetingsAdmin)
    );
  }
  _getAppSetingAdmin() {
    const data = JSON.parse(localStorage.getItem("appSetingsAdminObject"));
    this.appSetingsAdmin = data;
    console.log("Setings", data);
  }

  _saveUserAccs() {
    localStorage.setItem("userAccs", JSON.stringify(this.accounts));
  }
  _getUserAccs() {
    const data = JSON.parse(localStorage.getItem("userAccs"));
    this.accounts = data;
    console.log("Accounts", data);
  }

  _saveCurrentAcc() {
    localStorage.setItem("currentAccount", JSON.stringify(this.currentAccount));
  }
  _getCurrentAcc() {
    let data;
    const dataBefore = localStorage.getItem("currentAccount");

    if (dataBefore !== "undefined") {
      data = JSON.parse(dataBefore);
      this.currentAccount = data;
      console.log(data);
      console.log(this.currentAccount);
    }
  }

  _saveSellItems() {
    localStorage.setItem("sellItems", JSON.stringify(this.itemsSellArray));
  }
  _getSellItems() {
    const data = JSON.parse(localStorage.getItem("sellItems"));
    if (data === null) return;
    this.itemsSellArray = data;
  }

  _saveAds() {
    localStorage.setItem("ads", JSON.stringify(this.adsArray));
    console.log("SAVED");
  }
  _getAds() {
    const data = JSON.parse(localStorage.getItem("ads"));
    if (data === null) return;
    this.adsArray = data;
  }

  _saveAskMessages() {
    localStorage.setItem("askMessages", JSON.stringify(this.#itemAskArray));
  }
  _getAskMessages() {
    const data = JSON.parse(localStorage.getItem("askMessages"));
    if (data === null) return;
    this.#itemAskArray = data;
  }

  _saveCuponsArray() {
    localStorage.setItem("cupons", JSON.stringify(this.#cuponsArray));
  }

  _getCuponsArray() {
    const data = JSON.parse(localStorage.getItem("cupons"));
    if (data === null) return;
    this.#cuponsArray = data;
    console.log("Cupons Array", this.#cuponsArray);
  }

  _saveDeletedAccounts() {
    localStorage.setItem(
      "deletedAccounts",
      JSON.stringify(this.#deletedAccounts)
    );
  }

  _getDeletedAccounts() {
    const data = JSON.parse(localStorage.getItem("deletedAccounts"));
    if (data === null) return;
    this.#deletedAccounts = data.flat();
    console.log("Deleted Account Array", this.#deletedAccounts);
  }

  /////******************* START WITH   _useCuponForApp()   NEXT TIME *******************/////
  _deleteAcc() {
    this._dubleCheckConfirmMessageDisplay(
      "¿Estás seguro de eliminar tu cuenta? Esto eliminará todos tus articulo publicados, perderás tu plan activo, y también tus puntos acumulados.",
      "Cancelar",
      "Continuar"
    );

    dubleCheckConfirmMessage.addEventListener("click", (e) => {
      if (e.target.className === "btnno") {
        this._dubleCheckConfirmMessageHide();
      }
      if (e.target.className === "btnyes") {
        this._dubleCheckConfirmMessageHide();

        this._getUserAccs();
        const acc = this.accounts.find(
          (mov) => mov.userId === this.currentAccount.userId
        );
        const indexRemove = this.accounts.indexOf(acc);
        if (indexRemove !== -1) {
          this._deleteCurAccSellAskItems();
          const deletedAcc = this.accounts.splice(indexRemove, 1);
          this._saveUserAccs();
          this._getUserAccs();
          this.#deletedAccounts.push(deletedAcc);
          this._saveDeletedAccounts();
          this._getDeletedAccounts();
          this._accLogout();
        }
      }
    });
  }

  _logoutCurAcc() {
    this._dubleCheckConfirmMessageDisplay(
      "¿Cerrar sección?",
      "Cancelar",
      "Cerrar Sección"
    );

    dubleCheckConfirmMessage.addEventListener("click", (e) => {
      if (e.target.className === "btnno") {
        this._dubleCheckConfirmMessageHide();
      }
      if (e.target.className === "btnyes") {
        this._dubleCheckConfirmMessageHide();
        this._accLogout();
        console.log("helo");
      }
    });
  }

  _statsConDisp() {
    usersDispUserName.textContent = "helo";
  }

  _conMenuHide() {
    conMenu.style.display = "none";
    this.menudispToogle = false;
  }
  _conMenuDisp() {
    conMenu.style.display = "block";
    this.menudispToogle = true;
  }

  _conMenuDispHide() {
    if (this.menudispToogle === false) {
      conMenu.style.display = "block";
      this.menudispToogle = true;
      this._topBarrHide();
      btnPremium.style.display = "none";

      if (this.currentAccount.userLevel === "manager") {
        btnappStats.style.display = "block";
        btnappTools.style.display = "block";
        btnappSetings.style.display = "block";
        btnappAnswerQuestion.style.display = "block";
      } else if (this.currentAccount.userLevel === "admin") {
        btnappStats.style.display = "block";
        btnappTools.style.display = "block";
        btnappSetings.style.display = "none";
        btnappAnswerQuestion.style.display = "block";
      } else if (this.currentAccount.userLevel === "assistant") {
        btnappStats.style.display = "block";
        btnappTools.style.display = "none";
        btnappSetings.style.display = "none";
        btnappAnswerQuestion.style.display = "block";
      } else {
        btnappStats.style.display = "none";
        btnappTools.style.display = "none";
        btnappSetings.style.display = "none";
        btnappAnswerQuestion.style.display = "none";
      }
    } else {
      conMenu.style.display = "none";
      this.menudispToogle = false;
      this._btnPremiumDisp();

      if (btnbuy.className.includes("translated-columbtn")) {
        this._topBarrDisp();
      }
    }
  }

  _conAskHide() {
    conAsk.style.display = "none";
  }
  _conAskDisp() {
    conAsk.style.display = "block";
  }

  _conBuyHide() {
    conBuy.style.display = "none";
  }
  _conBuyDisp() {
    conBuy.style.display = "block";
  }

  _conAdsHide() {
    conAds.style.display = "none";
  }
  _conAdsDisp() {
    conAds.style.display = "block";
  }

  _conSellHide() {
    conSell.style.display = "none";
  }
  _conSellDisp() {
    conSell.style.display = "block";
  }

  _btnPublishDisp() {
    btnpublish.style.display = "block";
  }
  _btnPublishHide() {
    btnpublish.style.display = "none";
  }

  _conImgDisplayScreenDisp() {
    conImgsDisplayScreen.style.display = "block";
  }
  _conImgDisplayScreenHide() {
    conImgsDisplayScreen.style.display = "none";

    while (conImgsDisplayBig.hasChildNodes()) {
      conImgsDisplayBig.removeChild(conImgsDisplayBig.firstChild);
    }
    if (btnbuy.className.includes("translated-columbtn")) {
      this._topBarrDisp();
    }
  }

  _conImgDisplayBigDisp() {
    conImgsDisplayBig.style.display = "block";
  }
  _conImgDisplayBigHide() {
    conImgsDisplayBig.style.display = "none";
  }

  _loginHide() {
    login.style.display = "none";
  }

  _showImgsBig() {
    const arr = this.itemsSellArray;
    conBuy.addEventListener("click", function (e) {
      if (e.target.id === "img-itmes--display") {
        const item = arr.find(
          (mov) =>
            mov.itemId === e.target.parentElement.parentElement.dataset.item
        );

        let name;

        if (item) {
          name = item.itemName;
        } else {
          name = "REGRESAR";
        }
        imgsFromDescription.textContent = `Regresar a: ${name}`;

        const children = e.target.parentElement.children;
        const imgUrlsArr = [];

        for (let i = 0; i < children.length; i++) {
          imgUrlsArr.push(children[i].src);
        }
        let HTMLImgs = [];

        imgUrlsArr.forEach(function (mov) {
          HTMLImgs += `<img id="item-imgs-display-for--sell" src="${mov}" alt=""</img>`;
        });

        conImgsDisplayBig.insertAdjacentHTML("beforeend", HTMLImgs);
        conImgsDisplayScreen.style.display = "block";
        topBarr.style.display = "none";
      } else {
      }
    });
    conSell.addEventListener("click", function (e) {
      if (e.target.id === "img-itmes--display") {
        const item = arr.find(
          (mov) =>
            mov.itemId === e.target.parentElement.parentElement.dataset.item
        );

        let name;
        console.log(item);

        if (item) {
          name = item.itemName;
        } else {
          name = "REGRESAR";
        }
        imgsFromDescription.textContent = `Regresar a: ${name}`;

        const children = e.target.parentElement.children;
        const imgUrlsArr = [];

        console.log(children);
        for (let i = 0; i < children.length; i++) {
          imgUrlsArr.push(children[i].src);
        }
        let HTMLImgs = [];

        imgUrlsArr.forEach(function (mov) {
          HTMLImgs += `<img id="item-imgs-display-for--sell" src="${mov}" alt=""</img>`;
        });

        conImgsDisplayBig.insertAdjacentHTML("beforeend", HTMLImgs);
        conImgsDisplayScreen.style.display = "block";
        topBarr.style.display = "none";
      } else {
        console.log("no images");
      }
    });
    conSearch.addEventListener("click", function (e) {
      if (e.target.id === "img-itmes--display") {
        const item = arr.find(
          (mov) =>
            mov.itemId === e.target.parentElement.parentElement.dataset.item
        );

        let name;
        console.log(item);

        if (item) {
          name = item.itemName;
        } else {
          name = "REGRESAR";
        }
        imgsFromDescription.textContent = `Regresar a: ${name}`;

        const children = e.target.parentElement.children;
        const imgUrlsArr = [];

        console.log(children);
        for (let i = 0; i < children.length; i++) {
          imgUrlsArr.push(children[i].src);
        }
        let HTMLImgs = [];

        imgUrlsArr.forEach(function (mov) {
          HTMLImgs += `<img id="item-imgs-display-for--sell" src="${mov}" alt=""</img>`;
        });

        conImgsDisplayBig.insertAdjacentHTML("beforeend", HTMLImgs);
        conImgsDisplayScreen.style.display = "block";
        topBarr.style.display = "none";
      } else {
      }
    });
  }

  _chooseLoginDisp() {
    this._logcreate2Hide();
    this._logcreateHide();
    this._createAccHide();
    login.style.display = "block";
    this._rotateLogo("login", 1, 0.2, 2);
    if (this.currentAccount === undefined) return;
    inUsername.value = this.currentAccount.userName;
    inPhoneNum.value = this.currentAccount.phoneNumber;
  }

  _createAccDisp() {
    createAccount.style.display = "block";
    this._logcreate2Hide();
    this._logcreateHide();
  }
  _createAccHide() {
    createAccount.style.display = "none";
  }

  ///////////////////////////
  // Never call this function. It hides all contents
  _conMainHide() {
    conMain.style.display = "none";
  }
  ///////////////////////////

  _logcreateDisp() {
    logcreate.style.display = "block";
  }
  _logcreateHide() {
    logcreate.style.display = "none";
    // logcreate2.style.display = "none";
  }

  _logcreate2Hide() {
    logcreate2.style.display = "none";
  }
  _logcreate2Disp() {
    logcreate2.style.display = "block";
  }

  _conBuySearchHide() {
    conSearch.style.display = "none";
    if (btnbuy.className.includes("translated-columbtn")) {
      this._btnPublishDisp();
    }
  }
  _conBuySearchDisp() {
    conSearch.style.display = "block";
  }

  _proModalHide() {
    proModal.style.display = "none";
    if (btnbuy.className.includes("translated-columbtn")) {
      this._topBarrDisp();
    }
    if (this.currentAccount) {
      this._btnPremiumDisp();
    }
  }
  _proModalDisp() {
    proModal.style.display = "block";
    this._topBarrHide();
    this._btnPremiumHide();
  }

  _btnPremiumDisp() {
    btnPremium.style.display = "block";
    this._btnMenuDisp();
  }
  _btnPremiumHide() {
    btnPremium.style.display = "none";
    this._btnMenuHide();
  }

  _proModalDiscountsHide() {
    PDProModalDiscounts.style.display = "none";
  }
  _proModalDiscountsDisp() {
    PDProModalDiscounts.style.display = "block";
    this._displayProModalDiscountsValues();
  }

  _cuponModalHide() {
    cuponModal.style.display = "none";
    if (btnbuy.className.includes("translated-columbtn")) {
      this._topBarrDisp();
    }
  }
  _cuponModalDisp() {
    cuponModal.style.display = "block";
  }

  _footerDisp() {
    footer.style.display = "block";
  }
  _footerHide() {
    footer.style.display = "none";
  }

  _conHideFooterDisp() {
    // conHideFooter.style.display = "block";
  }
  _conHideFooterHide() {
    conHideFooter.style.display = "none";
  }

  _btnaskDisp() {
    btnask.style.display = "block";
  }
  _btnaskHide() {
    btnask.style.display = "none";
  }

  _btnaskDivDisp() {
    btnaskDiv.style.display = "block";
    textAreaAskDiv.style.display = "none";
  }
  _btnaskDivHide() {
    btnaskDiv.style.display = "none";
    textAreaAskDiv.style.display = "Block";
  }

  _textAreaDivDisp() {
    textAreaAskDiv.style.display = "Block";
  }
  _textAreaDivHide() {
    textAreaAskDiv.style.display = "none";
  }

  _btnMenuDisp() {
    btnMenu.style.display = "block";
  }
  _btnMenuHide() {
    btnMenu.style.display = "none";
  }

  _topBarrDisp() {
    topBarr.style.display = "block";
    conBuy.style.height = 87 + "%";
  }
  _topBarrHide() {
    topBarr.style.display = "none";
    conBuy.style.height = 87 + "%";
  }

  _logedinConDisp() {
    this._logcreateHide();
    this._logcreate2Hide();
    this._loginHide();
    this._conAskHide();
    this._conSellHide();
    this._conBuyDisp();
    this._btnPublishDisp();
    this._createAccHide();
    this._footerDisp();
    this._displaySellItems();
    // this._displayOwnSellingItems();
    // conMain.style.backgroundColor = "var(--color-backg-1)";
    this._btnMenuDisp();
    this._topBarrDisp();
    this._btnBuyTranslate();
    this._searchBuyContent();
    this._searchUserUserEdit();
    this._showNumberOfUsers();
    this._btnPremiumDisp();
  }

  _resetColumBtns() {
    btnsell.style.transform = "translateY(0%)";
    btnbuy.style.transform = "translateY(0%)";
    btnads.style.transform = "translateY(0%)";
    btnask1.style.transform = "translateY(0%)";
    btnsell.classList.remove("translated-columbtn");
    btnads.classList.remove("translated-columbtn");
    btnbuy.classList.remove("translated-columbtn");
    btnask1.classList.remove("translated-columbtn");
    btnsell.dataset.cur = "0";
    btnbuy.dataset.cur = "0";
    btnads.dataset.cur = "0";
    btnask1.dataset.cur = "0";
    this._topBarrHide();
    this._conBuySearchHide();
  }

  _btnSellTranslate() {
    this._resetColumBtns();
    btnsell.style.transform = "translateY(-15%)";
    btnsell.classList.add("translated-columbtn");
    btnsell.dataset.cur = "1";
  }
  _btnBuyTranslate() {
    this._resetColumBtns();
    btnbuy.style.transform = "translateY(-15%)";
    btnbuy.classList.add("translated-columbtn");
    btnbuy.dataset.cur = "1";
    this._topBarrDisp();
  }
  _btnAdsTranslate() {
    this._resetColumBtns();
    btnads.style.transform = "translateY(-15%)";
    btnads.classList.add("translated-columbtn");
    btnads.dataset.cur = "1";
  }
  _btnAskTranslate() {
    this._resetColumBtns();
    btnask1.style.transform = "translateY(-15%)";
    btnask1.classList.add("translated-columbtn");
    btnask1.dataset.cur = "1";
  }

  _askDisp() {
    this._conAskDisp();
    this._conBuyHide();
    this._conAdsHide();
    this._conSellHide();
    this._btnPublishHide();
    this._btnaskDivDisp();
    this._displayAskMessages();
    this._btnAskTranslate();
    this._topBarrHide();
    this._btnMenuDisp();
    // this._btnaskDivDisp();

    askDescriptionText.style.display = "block";
    askDescriptionTextTimeNumber.textContent =
      this.appSetingsAdmin.time.deleteAskMessageAfterDays;

    setTimeout(() => {
      askDescriptionText.style.display = "none";
    }, 8000);
  }
  _buyDisp() {
    this._conAskHide();
    this._conBuyDisp();
    this._conSellHide();
    this._conAdsHide();
    this._btnPublishDisp();
    this._btnaskDivHide();
    this._btnBuyTranslate();
    this._topBarrDisp();
  }

  _sellDisp() {
    this._conSellDisp();
    this._conBuyHide();
    this._conAdsHide();
    this._conAskHide();
    this._btnPublishDisp();
    this._btnaskDivHide();
    this._btnSellTranslate();
    this._topBarrHide();
    this._displayOwnSellingItems();
  }

  _adsDisp() {
    this._conSellHide();
    this._conBuyHide();
    this._conAdsDisp();
    this._conAskHide();
    this._btnPublishHide();
    this._btnaskDivHide();
    this._btnAdsTranslate();
    this._topBarrHide();

    while (conAds.hasChildNodes()) {
      conAds.removeChild(conAds.firstChild);
    }

    this.adsArray.forEach(function (mov, i, arr) {
      console.log(mov.imgUrl);

      let imgOrVid = ``;

      if (mov.type === "img") {
        imgOrVid += `<img class="img-in-all-adds-display-in-main-ad--container" src="${mov.imgUrl}" alt=""></img>`;
      } else if (mov.type === "vid") {
        imgOrVid = `<video
            src="${mov.imgUrl}"
            class="img-in-all-adds-display-in-ad--creator" 
            controls
            ></video>`;
      }

      const adsHtml = `
      <div class="ad-contianer">
      ${imgOrVid}
      <div class="description">
        <p>${mov.description}</p>
      </div>
      <div class="time">${mov.time}</div>
    </div>`;

      conAds.insertAdjacentHTML("afterBegin", adsHtml);
    });
  }

  _chooseCreateAccDisp() {
    this._logcreateHide();
    this._createAccDisp();
    this._rotateLogo("create account", 10, 0.3, 2);
  }

  _clearInpCreateAcc() {
    createUsername.value = "";
    createPhoneNum.value = "";
    createPassword.value = "";
    createConfirmPassword.value = "";
  }
  _clearInpLogin() {
    inPhoneNum.value = "";
    inUsername.value = "";
    inPassword.value = "";
  }

  _accLogout() {
    this.currentAccount = undefined;
    this._saveCurrentAcc();
    this._init();
    this._removeAllSellItems();
    this._removeAllAskMessages();
  }

  _login() {
    this._getUserAccs();

    // Building currenAccount

    this.currentAccount = this.accounts.find(
      (acc) => acc.phoneNumber === inPhoneNum.value
    );

    this._saveCurrentAcc();

    if (
      this.currentAccount?.userName === inUsername.value &&
      this.currentAccount?.password === inPassword.value
    ) {
      this._logedinConDisp();
      this._clearInpLogin();
    } else {
      alert(
        "Esta cuenta no existe. Checa tu imformacion o crea una cueta primero."
      );
    }
  }

  _createAccountFunction() {
    this._getUserAccs();
    console.log(agreeTermsAndConditions.checked);

    //Create Account
    const userId = "@23" + createUsername.value + createPhoneNum.value + "id";
    const userName = createUsername.value;
    const userPhoneNumber = createPhoneNum.value;
    const userPassword = createPassword.value;
    const userConfirmPassword = createConfirmPassword.value;

    if (userPassword === userConfirmPassword) {
      if (
        userName !== "" &&
        userPhoneNumber !== "" &&
        userPassword !== "" &&
        userConfirmPassword !== ""
      ) {
        let existPhoneNum;
        const existAccount = this.accounts.find(
          (acc) => acc.phoneNumber === userPhoneNumber
        );

        if (existAccount === undefined) {
          existPhoneNum = "no match";
        } else {
          existPhoneNum = existAccount.phoneNumber;
        }

        console.log("existPhoneNum", existPhoneNum);
        console.log("userPhoneNumber", userPhoneNumber);

        if (userPhoneNumber === existPhoneNum) {
          alert(
            `${userPhoneNumber} is already associated with an account. Try loging in to that account or try using a diferent phone number.`
          );
        } else {
          if (agreeTermsAndConditions.checked === false) {
            alert(
              "Es necesario aceptar los términos y condiciones para continuar"
            );
            goToTermsAndConditions.style.background = "red";
          } else {
            this.accounts.push(
              new User(
                userId,
                userName,
                userPhoneNumber,
                userPassword,
                this._getTime()
              )
            );
            this._saveUserAccs();
            this._getUserAccs();

            // Building currenAccount
            this.currentAccount = this.accounts.find(
              (acc) => acc.phoneNumber === userPhoneNumber
            );

            this._chooseLoginDisp();
            this._clearInpCreateAcc();
          }
        }
      } else {
        alert("The input fields can't be empty");
      }
    } else {
      createPassword.style.background = "orange";
      createConfirmPassword.style.background = "red";
      alert("Your Passwords must match");
    }
  }

  _becomePro() {
    this._getUserAccs();

    const acc = this.accounts.find(
      (acc) => acc.userId === this.currentAccount.userId
    );
    acc.userStatus = "no plan";
    this.currentAccount = acc;
    this._saveUserAccs();
    this._getUserAccs();
  }

  _displayProModalForBtn() {
    if (this.currentAccount.trialDone === true) {
      btnTryApp.style.display = "none";
      appTryDiscriptionText.style.display = "none";
    }
    this._proModalDisp();
  }

  _sortPro() {
    this._topBarrHide();
    this._getUserAccs();
    const proStartTime = this.currentAccount.timeStampProStart;
    const proTime = this.currentAccount.timeStampProTime;
    const lastTimePublish = this.currentAccount.timeStampLastPublishItem;
    const curTimeStamp = this._getTimeStamp();

    if (proStartTime + proTime >= curTimeStamp) {
      this._publish();
    } else {
      const acc = this.accounts.find(
        (acc) => acc.userId === this.currentAccount.userId
      );
      acc.userStatus = "no plan";
      this.currentAccount = acc;
      this._saveUserAccs();
      this._getUserAccs();
      console.log(this.currentAccount);
      console.log(this.accounts);

      if (
        !this.currentAccount.timeStampLastPublishItem ||
        this.currentAccount.timeStampLastPublishItem +
          this.appSetingsAdmin.time.oneDayInMilliseconds *
            this.appSetingsAdmin.time.publishAgainInDaysStandart <
          this._getTimeStamp()
      ) {
        this._publish();
      } else {
        this._proModalDisp();
        let waitTime;

        const waitTimeNum = Math.round(
          (this.currentAccount.timeStampLastPublishItem +
            this.appSetingsAdmin.time.oneDayInMilliseconds *
              this.appSetingsAdmin.time.publishAgainInDaysStandart -
            curTimeStamp) /
            this.appSetingsAdmin.time.oneDayInMilliseconds
        );

        if (waitTimeNum < 1) {
          waitTime = "menos de un dia";
        } else {
          waitTime = waitTimeNum + " dias";
        }

        const message = `Actualmente no cuentas con un plan activo. Estás en la versión STANDART de la app. Solo podrás publicar un articulo cada ${this.appSetingsAdmin.time.publishAgainInDaysStandart} dias. Espera ${waitTime} para poder publicar otro articulo. O elige una opcion para adquirir el plan`;

        this._confirmationMessageDisplay(message, 17000);
      }
      if (this.currentAccount.trialDone === true) {
        btnTryApp.style.display = "none";
        appTryDiscriptionText.style.display = "none";
      }
    }
  }

  _tryApp() {
    this._getUserAccs();
    const curTimeStamp = this._getTimeStamp();
    const acc = this.accounts.find(
      (acc) => acc.userId === this.currentAccount.userId
    );

    acc.timeStampProStart = curTimeStamp;
    acc.timeStampProTime =
      this.appSetingsAdmin.time.oneDayInMilliseconds *
      this.appSetingsAdmin.time.appTrialTimeDays;
    acc.userStatus = "trial";
    acc.trialDone = true;
    acc.timeStampProStart = curTimeStamp;

    this._publish();
    this._proModalHide();
    this._saveUserAccs();
    this.currentAccount = acc;
  }

  _buyApp() {}

  _chooseUseCuponForApp() {
    this._cuponModalDisp();
    this._proModalHide();
  }

  _useCuponForApp() {
    this._getCuponsArray();
    const cupon = inputCupon.value;
    const cup = this.#cuponsArray.find((cup) => cup.cupon === cupon);
    const removeIndex = this.#cuponsArray.indexOf(cup);

    if (cup !== undefined) {
      if (cup.type === "Days Free") {
        this.currentAccount.timeStampProStart = this._getTimeStamp();
        this.currentAccount.timeStampProTime =
          cup.quantityOfSelected *
          this.appSetingsAdmin.time.oneDayInMilliseconds;
        this.currentAccount.userStatus = "promo";

        this.#cuponsArray.splice(removeIndex, 1);
        this._saveUserAccs();
        this._getUserAccs();
        this._saveCuponsArray();

        this._cuponModalHide();
      } else if (cup.type === "% Discount") {
        const percent = cup.quantityOfSelected / 100;
        const discount = this.appSetingsAdmin.price.appPriceOneYear * percent;
        const price = this.appSetingsAdmin.price.appPriceOneYear - discount;
        this.currentAccount.userStatus = "plan";
        console.log(price);
        console.log(discount);

        this.#cuponsArray.splice(removeIndex, 1);
        this._saveCuponsArray();
        this._saveUserAccs();
        this._getUserAccs();
      }
    } else {
      const message =
        "El cupón no es valido.\nAsegurate que todas tus letras están en letra mayuscula";
      this._confirmationMessageDisplay(message, 8000);
    }
  }

  _publish() {
    modalSell.style.display = "block";
    this._topBarrHide();
    this._btnPublishHide();
    this._conHideFooterDisp();
    // this._footerHide();
  }

  _cancelSendSellItem() {
    this._resetModalSell();
    modalSell.style.display = "none";
    this._btnPublishDisp();
    this._conHideFooterHide();

    if (btnbuy.className.includes("translated-columbtn")) {
      this._topBarrDisp();
    }
  }

  _saveAndLog() {
    console.log("sel itmes", this.itemsSellArray);
  }

  _clearAdDescriptionText() {
    adDescriptionText.value = "";
  }

  /////-----------Start Ad Img Function-------------///////

  _sendSortAd() {
    this._sendAd();
  }

  _sendAd() {
    console.log("urlAdImg", this.adImageurlsStored);
    this.adsArray.push(
      new Ad(
        this.adImageurlsStored,
        adDescriptionText.value,
        this._getTimeStamp(),
        this._getTime(),
        this.typeOfAd
      )
    );
    this._saveAds();
    this._getAds();
    console.log("uploaded", this.adsArray);
  }

  _openwidgitForAdImgs() {
    cloudinary
      .createUploadWidget(
        {
          cloudName: this.#mycloudNameForImgUpload,
          uploadPreset: this.#myuploadPresetForImgUpload,
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            this.adImageurlsStored = result.info.secure_url;
            this.typeOfAd = "img";
          }
          if (!error && result && result.event === "success") {
            this._resetUploadAdImgs();
            const html = `<img class="ad-img-in--creator" src="${this.adImageurlsStored}" alt="" />`;
            conACImgForAd.insertAdjacentHTML("beforeend", html);
          }
        }
      )
      .open();
  }

  /////-----------End Ad Img Function-------------///////

  /////-----------Start Item Img Function-------------///////

  _sendItem() {
    this._spinerDisp();
    modalSell.style.display = "none";
    this._conHideFooterHide();
    const time = this._getTime();

    this.itemsSellArray.push(
      new Item(
        this.currentAccount.userName,
        this.currentAccount.phoneNumber,
        this.currentAccount.userId,
        inputNameSell.value,
        inputDescriptionSell.value,
        inputPriceSell.value,
        inputLocationSell.options[inputLocationSell.selectedIndex].text,
        this._createItemId(),
        this.itemImgsurlsStored,
        time,
        this._getTimeStamp()
      )
    );

    this.currentAccount.points += 5;
    this._saveUserAccs();
    this._saveSellItems();
    this._getSellItems();
    console.log("uploaded", this.itemsSellArray);
    this._btnPublishDisp();
    this._plusItemCount();

    this._logSellItmes(
      2,
      this.currentAccount.userName,
      this.currentAccount.userId,
      inputPriceSell.value,
      inputLocationSell.options[inputLocationSell.selectedIndex].text,
      inputNameSell.value,
      inputDescriptionSell.value,
      this.itemImgsurlsStored,
      time,
      this.currentAccount.phoneNumber
    );
    this._resetModalSell();

    this._spinerHide();
  }

  _openwidgitForItemImgs() {
    console.log(this.itemImgsurlsStored);
    this.itemImgsurlsStored = [];
    console.log(this.itemImgsurlsStored);
    cloudinary
      .createUploadWidget(
        {
          cloudName: this.#mycloudNameForImgUpload,
          uploadPreset: this.#myuploadPresetForImgUpload,
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            this.itemImgsurlsStored.push(result.info.secure_url);
          }
          if (!error && result && result.event === "success") {
            this._resetUploadSellImgs();
            let html = "";
            this.itemImgsurlsStored.forEach(function (mov, i, arr) {
              html += `<img id="app-logo--img" src="${mov}" alt="" />`;
            });

            conimgsForSellItems.insertAdjacentHTML("beforeend", html);
          }
        }
      )
      .open();
  }
  /////-----------End Item Img Function-------------///////

  _useUrlForAd() {
    this._resetUploadAdImgs();
    this.typeOfAd = "vid";
    const vidUrl = inpurlForad.value;
    console.log(vidUrl);
    const html = `<video
    src="${vidUrl}"
    class="ad-img-in--creator" 
    width="360"
    controls
    ></video>`;
    this.adImageurlsStored = vidUrl;

    conACImgForAd.insertAdjacentHTML("beforeend", html);
  }

  _spinerDisp() {
    spinnerWhole.style.display = "block";
    this._btnPremiumHide();
    this._rotateLogo("spinner", 1, 0.4, 15);
  }
  _spinerHide() {
    spinnerWhole.style.display = "none";
    if (btnbuy.className.includes("translated-columbtn")) {
      this._topBarrDisp();
    }
    this._btnPremiumDisp();
    this._btnMenuDisp();
  }

  _logSellItmes(
    currentItemNum,
    sellerName,
    sellerId,
    itemPrice,
    itemLocation,
    itemName,
    itemDiscription,
    imgs,
    time,
    sellerPhoneNum
  ) {
    const curId = this.currentAccount.userId;
    let name;
    let images = ``;
    let translated = 0;

    if (sellerId === curId) {
      name = "Tu";
    } else {
      name = sellerName;
    }
    imgs.forEach(function (mov, i, arr) {
      images += `<img id="img-itmes--display" src="${mov}" alt=""  data-translated=${translated} >`;
      translated = translated + 100;
    });

    const sellItemHtml = `<div class="container-item clearfix" data-item="${currentItemNum}">
    <h2 class="text-seller clearfix">
    
    <p class="name-seller clearfix">${name}</p>
    <p class="phonenum-seller">${sellerPhoneNum}</p>
    </h2>
    

    <div id="buy-imgs--container">
    ${images}
    </div>
    
    
      <div class="container-pricelocation--sell">
      <h3 class="price">$${itemPrice}</h3>
      <h5 class="text-location">Ubicado en:</h5>
      <h6 class="location">
     ${itemLocation}
     </h6>
     </div>
     <h1 class="name-item">${itemName}</h1>
     <p class="description-item clearfix">${itemDiscription}</p>
     <div class="btncontainer clearfix">
     <button class="btnwhatsapp btncontact-buy">WhatsApp</button>
     <button class="btncall btncontact-buy">📞 LLamar</button>
     <button class="btnmessage btncontact-buy">Enviar Mensaje</button>
     </div>
     <p id="time-advertised">${time}</p>
     
     </div>`;

    conBuy.insertAdjacentHTML("beforeend", sellItemHtml);

    const acc = this.accounts.find(
      (acc) => acc.userId === this.currentAccount.userId
    );
    acc.timeStampLastPublishItem = this._getTimeStamp();
    this.currentAccount = acc;

    this._saveUserAccs();
  }

  //

  _displaySellItems() {
    this._getSellItems();
    const curId = this.currentAccount.userId;

    this.itemsSellArray.forEach(function (mov, i, arr) {
      let images = ``;
      let name;
      let translated = 0;
      if (mov.sellerId === curId) {
        name = "Tu";
      } else {
        name = mov.sellerName;
      }

      mov.itemImagesUrls.forEach(function (mov, i, arr) {
        images += `<img id="img-itmes--display" src="${mov}" alt=""  data-translated=${translated} >`;
        translated = translated + 100;
      });

      const sellItemHtml = `<div class="container-item" data-item="${mov.itemId}">
      <h2 class="text-seller clearfix">

      <p class="name-seller">${name}</p>
      <p class="phonenum-seller">${mov.sellerPhoneNum}</p>
      </h2>

      <div id="buy-imgs--container">
      ${images}
      </div>

      <div class="container-pricelocation--sell">
      <h3 class="price">$${mov.itemPrice}</h3>
      <h5 class="text-location">Ubicado en:</h5>
      <h6 class="location">
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
      <p id="time-advertised">${mov.timePublish}</p>

      </div>`;

      conBuy.insertAdjacentHTML("beforeend", sellItemHtml);
    });
  }

  _displayOwnSellingItems() {
    while (conSell.hasChildNodes()) {
      conSell.removeChild(conSell.firstChild);
    }

    this._getSellItems();
    const curId = this.currentAccount.userId;

    //   </h2>
    // <h2 class="text-seller">
    this.itemsSellArray.forEach(function (mov, i, arr) {
      if (mov.sellerId === curId) {
        let images = ``;
        let translated = 0;
        mov.itemImagesUrls.forEach(function (mov, i, arr) {
          images += `<img id="img-itmes--display" src="${mov}" alt=""  data-translated=${translated} >`;
          translated = translated + 100;
        });

        const sellItemHtml = `<div class="container-item" data-item="${mov.itemId}">
      <button id="btndelete-this-item" class="phonenum-seller">Eliminar</button>
      <button id="btnpublish-again" class="name-seller">Publicar otra vez</button>


      <div id="buy-imgs--container" class="items-sell">
      ${images}
      </div>
      
      
   <div class="container-pricelocation--sell">
   <h3 class="price">$${mov.itemPrice}</h3>
   <h5 class="text-location">Ubicado en:</h5>
   <h6 class="location">
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
   <p id="time-advertised">${mov.timePublish}</p>
   
   </div>`;

        conSell.insertAdjacentHTML("beforeend", sellItemHtml);
      }
    });
  }

  _displayAskMessages() {
    const curTimeStamp = this._getTimeStamp();
    const oneDayMS = this.appSetingsAdmin.time.oneDayInMilliseconds;
    const daysAfterDM = this.appSetingsAdmin.time.deleteAskMessageAfterDays;
    const needDeteleAskMessagesArr = [];
    const curName = this.currentAccount.userName;

    this.#itemAskArray.forEach(function (mov, i, arr) {
      if (mov.timeStamp + oneDayMS * daysAfterDM < curTimeStamp) {
        console.log();
        needDeteleAskMessagesArr.push(i);
        console.log(needDeteleAskMessagesArr);
      } else {
        this._removeAllAskMessages();
        let name;
        if (mov.userName === curName) {
          name = "Tu";
        } else {
          name = mov.userName;
        }

        const askHtml = `<div class="container-item--ask clearfix">
        <h2 class="text-seller clearfix">
        <p class="name-seller--ask clearfix">${name}</p>
        </h2>
        <h1 class="name-item--ask">¿Alguien Vende?</h1>
        <p class="description-item--ask">
        
        ${mov.message}
        </p>
        <div class="btncontainer">
        <button class="btnwhatsapp btncontact-ask">WhatsApp</button>
        <button class="btncall btncontact-ask">📞 LLamar</button>
        <button class="btnmessage btncontact-ask">Enviar Mensaje</button>
        </div>
        <p id="time-advertised">ayer 10:27 pm</p>
        </div>`;

        conAsk.insertAdjacentHTML("beforeend", askHtml);
      }
    });
    this._deleteOverTimeAskMessages(needDeteleAskMessagesArr);
  }

  _newAskMessage() {
    this.#itemAskArray.push(
      new ItemAsk(
        this.currentAccount.userName,
        this.currentAccount.phoneNumber,
        this.currentItmeNum,
        textAreaAsk.value,
        this.currentAccount.userId,
        this._getTimeStamp()
      )
    );
    this._logAskMessage();
    // this._btnaskDivHide();
    this._textAreaDivHide();
    this._btnaskDivDisp();
    this._saveAskMessages();
    this._getAskMessages();
    textAreaAsk.value = "";
  }

  _textAreaDivHideBtnDisp() {
    this._textAreaDivHide();
    this._btnaskDivDisp();
  }

  _logAskMessage() {
    const name = "Tu";

    const askHtml = `<div class="container-item--ask clearfix">
              <h2 class="text-seller clearfix">
              <p class="name-seller--ask clearfix">${name}</p>
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
    this.currentAccount.points += 1;
    this._saveUserAccs();
  }

  _removeAllSellItems() {
    while (conBuy.hasChildNodes()) {
      conBuy.removeChild(conBuy.firstChild);
    }
  }

  _removeAllAskMessages() {
    while (conAsk.hasChildNodes()) {
      conAsk.removeChild(conAsk.firstChild);
    }
  }

  _clearCuponsShow() {
    while (conICCuponsShow.hasChildNodes()) {
      conICCuponsShow.removeChild(conICCuponsShow.firstChild);
    }
    this.localCuponArr = [];
  }

  _sortAccounts() {
    let pro = 0;
    let trial = 0;
    let norm = 0;
    let total = 0;

    // trial, promo, plan, no plan,
    this.accounts.forEach(function (mov, i, arr) {
      if (mov.userStatus === "no plan") {
        norm++;
      }
      if (mov.userStatus === "trial") {
        trial++;
      }
      if (mov.userStatus === "plan" || mov.userStatus === "promo") {
        pro++;
      }
    });
    total = this.accounts.length;
    console.log(parseFloat(123.1).toFixed(2));

    const proPercent = Math.round((pro / total) * 100);

    const trialPercent = Math.round((trial / total) * 100);

    const normPercent = Math.round((norm / total) * 100);

    console.log(proPercent, trialPercent, normPercent);

    graphSumaryProUsers.style.width = `${proPercent}%`;
    graphSumaryOntrialUsers.style.width = `${trialPercent}%`;
    graphSumaryNormUsers.style.width = `${normPercent}%`;

    graphSumaryProUsers.textContent = `Pro_Users ${proPercent}%`;
    graphSumaryOntrialUsers.textContent = `On-trial_Users ${trialPercent}%`;
    graphSumaryNormUsers.textContent = `Normal_Users ${normPercent}%`;

    console.log("Pro", pro);
    console.log("Trial", trial);
    console.log("Norm", norm);
    console.log("All", total);
    graphSumaryAlUsersPro.textContent = pro;
    graphSumaryAlUsersOnTrial.textContent = trial;
    graphSumaryAlUsersNormal.textContent = norm;
    graphSumaryAlUsersTotal.textContent = total;
  }

  _mainConUserStatsDisp() {
    conMainStats.style.display = "block";
    this._conMenuHide();
    this._btnMenuHide();
    this._sortAccounts();
  }
  _mainConUserStatsHide() {
    conMainStats.style.display = "none";
    this._conMenuDisp();
    this._btnMenuDisp();
  }

  _doubleCheckResetSetingInputs() {
    this._dubleCheckConfirmMessageDisplay(
      "Reset setings inputs?",
      "back",
      "Clear"
    );

    dubleCheckConfirmMessage.addEventListener("click", (e) => {
      if (e.target.className === "btnno") {
        this._dubleCheckConfirmMessageHide();
      }
      if (e.target.className === "btnyes") {
        this._dubleCheckConfirmMessageHide();
        this._mainConSetingsDisp();
      }
    });
  }

  _doubleCheckBackFromAppAdminSetings() {
    this._dubleCheckConfirmMessageDisplay(
      "If you have not saved changes you made and continue, your changes will not be saved",
      "Back",
      "Continue"
    );

    dubleCheckConfirmMessage.addEventListener("click", (e) => {
      if (e.target.className === "btnno") {
        this._dubleCheckConfirmMessageHide();
      }
      if (e.target.className === "btnyes") {
        this._dubleCheckConfirmMessageHide();
        this._mainConSetingsHide();
      }
    });
  }

  _mainConSetingsDisp() {
    this._getAppSetingAdmin();
    conMainSetings.style.display = "block";

    VCSPlanPriceYear.textContent = this.appSetingsAdmin.price.appPriceOneYear;
    VCSPointsToPeso.textContent = this.appSetingsAdmin.price.pointsToPeso;
    VCSGeneralDiscountAppPlan.textContent =
      this.appSetingsAdmin.price.generalDiscount;
    VCSSpecialDiscount1.textContent =
      this.appSetingsAdmin.price.specialDicount1;
    VCSSpecialDiscount2.textContent =
      this.appSetingsAdmin.price.specialDicount2;
    VCSSpecialDiscount3.textContent =
      this.appSetingsAdmin.price.specialDicount3;
    VCSSpecialDiscountTime1.textContent =
      this.appSetingsAdmin.time.specialDicountTime1;
    VCSSpecialDiscountTime2.textContent =
      this.appSetingsAdmin.time.specialDicountTime2;
    VCSSpecialDiscountTime3.textContent =
      this.appSetingsAdmin.time.specialDicountTime3;
    VCSAppTrialTime.textContent = this.appSetingsAdmin.time.appTrialTimeDays;
    VCSAutoDeleteAskMessagesAfterDays.textContent =
      this.appSetingsAdmin.time.deleteAskMessageAfterDays;
    VCSMillisecondsOneDay.textContent =
      this.appSetingsAdmin.time.oneDayInMilliseconds;
    VCSWaitDaysPublishAgainStandart.textContent =
      this.appSetingsAdmin.time.publishAgainInDaysStandart;
    VCSWaitDaysRepublishSellItem.textContent =
      this.appSetingsAdmin.time.timePublishItemAgainDays;

    //inputs
    ICSWaitDaysRepublishSellItem.value =
      this.appSetingsAdmin.time.timePublishItemAgainDays;
    ICSPlanPriceYear.value = this.appSetingsAdmin.price.appPriceOneYear;
    ICSPointsToPeso.value = this.appSetingsAdmin.price.pointsToPeso;
    ICSGeneralDiscountAppPlan.value =
      this.appSetingsAdmin.price.generalDiscount;
    ICSSpecialDiscount1.value = this.appSetingsAdmin.price.specialDicount1;
    ICSSpecialDiscount2.value = this.appSetingsAdmin.price.specialDicount2;
    ICSSpecialDiscount3.value = this.appSetingsAdmin.price.specialDicount3;
    ICSSpecialDiscountTime1.value =
      this.appSetingsAdmin.time.specialDicountTime1;
    ICSSpecialDiscountTime2.value =
      this.appSetingsAdmin.time.specialDicountTime2;
    ICSSpecialDiscountTime3.value =
      this.appSetingsAdmin.time.specialDicountTime3;
    ICSAppTrialTime.value = this.appSetingsAdmin.time.appTrialTimeDays;
    ICSAutoDeleteAskMessagesAfterDays.value =
      this.appSetingsAdmin.time.deleteAskMessageAfterDays;
    ICSMillisecondsOneDay.value =
      this.appSetingsAdmin.time.oneDayInMilliseconds;
    ICSWaitDaysPublishAgainStandart.value =
      this.appSetingsAdmin.time.publishAgainInDaysStandart;

    this._conMenuHide();
    this._btnMenuHide();
  }

  _appSetingsApplyChanges() {
    this._dubleCheckConfirmMessageDisplay(
      "Save the changes you made in setings?",
      "Back",
      "Save"
    );

    dubleCheckConfirmMessage.addEventListener("click", (e) => {
      if (e.target.className === "btnno") {
        this._dubleCheckConfirmMessageHide();
      }
      if (e.target.className === "btnyes") {
        this._dubleCheckConfirmMessageHide();

        this.appSetingsAdmin.price.appPriceOneYear = ICSPlanPriceYear.value;
        this.appSetingsAdmin.price.specialDicount1 = ICSSpecialDiscount1.value;
        this.appSetingsAdmin.price.specialDicount2 = ICSSpecialDiscount2.value;
        this.appSetingsAdmin.price.specialDicount3 = ICSSpecialDiscount3.value;
        this.appSetingsAdmin.price.pointsToPeso = ICSPointsToPeso.value;
        this.appSetingsAdmin.price.generalDiscount =
          ICSGeneralDiscountAppPlan.value;
        this.appSetingsAdmin.time.specialDicountTime1 =
          ICSSpecialDiscountTime1.value;
        this.appSetingsAdmin.time.specialDicountTime2 =
          ICSSpecialDiscountTime2.value;
        this.appSetingsAdmin.time.specialDicountTime3 =
          ICSSpecialDiscountTime3.value;
        this.appSetingsAdmin.time.appTrialTimeDays = ICSAppTrialTime.value;
        this.appSetingsAdmin.time.deleteAskMessageAfterDays =
          ICSAutoDeleteAskMessagesAfterDays.value;
        this.appSetingsAdmin.time.oneDayInMilliseconds =
          ICSMillisecondsOneDay.value;
        this.appSetingsAdmin.time.timePublishItemAgainDays =
          ICSWaitDaysRepublishSellItem.value;

        this.appSetingsAdmin.time.publishAgainInDaysStandart =
          ICSWaitDaysPublishAgainStandart.value;

        this._saveAppSetingAdmin();
        this._mainConSetingsDisp();
      }
    });
  }

  _mainConSetingsHide() {
    conMainSetings.style.display = "none";
    this._conMenuDisp();
    this._btnMenuDisp();
  }

  _mainConAnswersQuestionDisp() {
    conMainAnswersQuestion.style.display = "block";
    this._conMenuHide();
    this._btnMenuHide();
  }
  _mainConAnswersQuestionHide() {
    conMainAnswersQuestion.style.display = "none";
    this._conMenuDisp();
    this._btnMenuDisp();
  }

  _mainConToolsDisp() {
    conMainTools.style.display = "block";
    this._conMenuHide();
    this._btnMenuHide();
  }
  _mainConToolsHide() {
    conMainTools.style.display = "none";
    this._conMenuDisp();
    this._btnMenuDisp();
  }

  _conUsersDispDisp() {
    conUsersDisp.style.display = "block";
  }
  _conUsersDispHide() {
    const allSeparateUserStatsDisp =
      document.querySelectorAll(".stats-user--disp");
    conUsersDisp.style.display = "none";

    allSeparateUserStatsDisp.forEach((stat) => {
      stat.remove();
    });
  }

  _displayStatsUsers() {
    this._getUserAccs();

    const accArr = this.accounts;
    if (!this.currentAccount) return;
    if (this.currentAccount.userLevel === "assistant") return;
    if (this.currentAccount.userLevel === "normal") return;
    this._conUsersDispDisp();
    let arrForUsers = [];

    conUsersDisp.addEventListener("click", function (e) {
      if (e.target.id === "btnsort-all") {
        console.log("done", accArr);
        accArr.forEach(function (mov, i, arr) {
          arrForUsers.push(mov);
          console.log(arrForUsers);
          const allSeparateUserStatsDisp =
            document.querySelectorAll(".stats-user--disp");
          allSeparateUserStatsDisp.forEach((stat) => {
            stat.remove();
          });
        });
      } else if (e.target.id === "btnsort-plan") {
        console.log("yes");
        accArr.forEach(function (mov, i, arr) {
          if (mov.userStatus === "plan") {
            arrForUsers.push(mov);
          }
        });
        console.log(arrForUsers);
        const allSeparateUserStatsDisp =
          document.querySelectorAll(".stats-user--disp");
        allSeparateUserStatsDisp.forEach((stat) => {
          stat.remove();
        });
      } else if (e.target.id === "btnsort-ontrial") {
        console.log("yes");
        accArr.forEach(function (mov, i, arr) {
          if (mov.userStatus === "trial") {
            arrForUsers.push(mov);
          }
        });
        console.log(arrForUsers);
        const allSeparateUserStatsDisp =
          document.querySelectorAll(".stats-user--disp");
        allSeparateUserStatsDisp.forEach((stat) => {
          stat.remove();
        });
      } else if (e.target.id === "btnsort-no--plan") {
        console.log("yes");
        accArr.forEach(function (mov, i, arr) {
          if (mov.userStatus === "no plan") {
            arrForUsers.push(mov);
          }
        });
        console.log(arrForUsers);
        const allSeparateUserStatsDisp =
          document.querySelectorAll(".stats-user--disp");
        allSeparateUserStatsDisp.forEach((stat) => {
          stat.remove();
        });
      }

      arrForUsers.forEach(function (mov, i, arr) {
        console.log("no");
        let type = "stats-user-disp--noplan";
        if (mov.userStatus === "trial") {
          type = "stats-user-disp--trial";
        } else if (mov.userStatus === "promo" || mov.userStatus === "plan") {
          type = "stats-user-disp--promoplan";
        }

        const userHtml = `<div id="${mov.phoneNumber}" class="stats-user--disp ${type}"
        data-cur="1">
        <p class="users-name-t t">
        Name: <span class="users-name i">${mov.userName}</span>
        </p>
        <p class="users-phonenum-t t">
        Phone number: <span class="users-phonenum i">${mov.phoneNumber}</span>
        </p>
        <p class="users-pasword-t t">
        Password: <span class="users-pasword i">${mov.password}</span>
        </p>
        <p class="users-userid-t t">
        User id: <span class="users-pasword i">${mov.userId}</span>
        </p>
        <p class="users-status-t t">
        Pro Status: <span class="users-status i">${mov.userStatus}</span>
        </p>
        <p class="users-business-account-t t">
        Bussines account:
        <span class="users-business-account i">${mov.businessAccount}</span>
        </p>
        <p class="users-account-status-t t">
        Account Status:
        <span class="users-account-status i">${mov.accountStatus}</span>
        </p>
        <p class="users-userlevel-t t">
        User type: <span class="users-userlevel i">${mov.userLevel}</span>
        </p>
        <p class="users-whatsapp-t t">
        Has WhatsApp: <span class="users-whatsapp i">${mov.whatsApp}</span>
        </p>
        <p class="users-items-total-t t">
        Items this year:
        <span class="users-items-total i">${mov.itemsCountCurYear}</span>
        </p>
        <p class="users-items-year-t t">
        Items total: <span class="users-items-year i">${mov.itemsCount}</span>
        </p>
        </div>
        `;

        conUsersDisp.insertAdjacentHTML("beforeend", userHtml);
        arrForUsers = [];
      });
    });

    // const displaySortedUser = function (
    //   userName,
    //   userStatus,
    //   phoneNumber,
    //   password,
    //   whatsApp,
    //   businessAccount,
    //   accountStatus,
    //   userLevel,
    //   itemsCountCurYear,
    //   itemsCount,
    //   where
    // ) {};
  }

  _curUserInfoDisp() {
    conCurUserInfo.style.display = "block";
  }
  _curUserInfoHide() {
    conCurUserInfo.style.display = "none";
  }

  _displayCurUserInfo() {
    this._curUserInfoDisp();
    this._conMenuHide();
    this._btnMenuHide();
    curUserInfoPionts.textContent = this.currentAccount.points;
    curUserInfoPiontsInValue.textContent = parseFloat(
      Number(
        `${
          this.currentAccount.points / this.appSetingsAdmin.price.pointsToPeso
        }`
      )
    ).toFixed(2);

    let curWhatsApp;
    let curUserStatus;
    let curAccStatus;
    let curUserLevel;

    // admin, manager, assistant, normal
    // blocked, suspended, open

    if (this.currentAccount.whatsApp === false) {
      curWhatsApp = "No";
    } else {
      curWhatsApp = "Si";
    }

    if (this.currentAccount.userStatus === false) {
      curUserStatus = "No tienes plan";
    } else {
      curUserStatus = this.currentAccount.userStatus;
    }

    if (this.currentAccount.accountStatus === "open") {
      curAccStatus = "Libre";
    } else if (this.currentAccount.accountStatus === "suspended") {
      curAccStatus = "Suspendido";
    } else if (this.currentAccount.accountStatus === "blocked") {
      curAccStatus = "Bloqueado";
    }

    if (this.currentAccount.userLevel === "normal") {
      curUserLevel = "Normal";
    } else if (this.currentAccount.userLevel === "assistant") {
      curUserLevel = "Asistente";
    } else if (this.currentAccount.userLevel === "manager") {
      curUserLevel = "Gerente";
    } else if (this.currentAccount.userLevel === "admin") {
      curUserLevel = "Admin";
    }

    const userHtml = `<div id="cur-stats--user--disp">


    <div id="cur-stats--user--disp"
          <p id="username-t" class="t">Nombre de Usuario:</p>
          <p id="username" class="i">${this.currentAccount.userName}</p>
          <p id="userphonenum-t" class="t">Numero de Celular:</p>
          <p id="userphonenum" class="i">${this.currentAccount.phoneNumber}</p>
          <p id="userpasword-t" class="t">Contraseña:</p>
          <p id="userpasword" class="i">${this.currentAccount.password}</p>
          <p id="business-account-t" class="t">Es cuenta de Negocio:</p>
          <p id="business-account" class="i">${this.currentAccount.businessAccount}</p>
          <p id="userwhatsapp-t" class="t">Cuentas con WhatsApp:</p>
          <p id="userwhatsapp" class="i">${curWhatsApp}</p>
          <p id="userstatus-t" class="t">Plan de cuenta:</p>
          <p id="userstatus" class="i">${curUserStatus}</p>
          <p id="account-status-t" class="t">Estado de cuenta:</p>
          <p id="account-status" class="i">${curAccStatus}</p>
          <p id="userlevel-t" class="t">Usuario:</p>
          <p id="userlevel" class="i">${curUserLevel}</p>
          <p id="items-total-t" class="t">Publicaciones este año:</p>
          <p id="items-total" class="i">${this.currentAccount.itemsCountCurYear}</p>
          <p id="items-year-t" class="t">Publicaciones total:</p>
          <p id="items-year" class="i">${this.currentAccount.itemsCount}</p>
        </div>`;
    conCurUserInfo.insertAdjacentHTML("beforeend", userHtml);
  }

  _conCurUserInfoChangeDisp() {
    conCurUserInfoChange.style.display = "block";
  }
  _conCurUserInfoChangeHide() {
    conCurUserInfoChange.style.display = "none";
  }

  _changeCurUserInfDisp() {
    this._conCurUserInfoChangeDisp();
    const CurUsIn = document.querySelector("#cur-stats--user--disp");
    if (CurUsIn !== null && CurUsIn !== undefined) {
      CurUsIn.remove();
    }

    this.currentAccount.whatsApp;

    const opt = document.querySelector("#change-has-whatsApp");
    opt.value = `${this.currentAccount.whatsApp}`;

    const inpChangeUserName = document.querySelector(".change-username");
    const inpChangePhonenum = document.querySelector(".change-phonenum");
    const inpChangePassword = document.querySelector(".change-password");
    const inpChangeConfirmPassword = document.querySelector(
      ".change-confirmpassword"
    );

    inpChangeUserName.value = this.currentAccount.userName;
    inpChangePhonenum.value = this.currentAccount.phoneNumber;
    inpChangePassword.value = this.currentAccount.password;
    inpChangeConfirmPassword.value = this.currentAccount.password;
  }

  _backCurUserInfDisp() {
    this._conMenuDisp();
    this._btnMenuDisp();
    this._curUserInfoHide();
    this._conCurUserInfoChangeHide();
    const CurUsIn = document.querySelector("#cur-stats--user--disp");
    if (CurUsIn !== null && CurUsIn !== undefined) {
      CurUsIn.remove();
    }
  }

  _plusItemCount() {
    console.log("Item count Curent account", this.currentAccount);
    this.currentAccount.itemsCount++;
    this.currentAccount.itemsCountCurYear++;
    this._saveUserAccs();
    this._getUserAccs();
    const acc = this.accounts.find(
      (acc) => acc.userId === this.currentAccount.userId
    );
    this.currentAccount = acc;
  }

  _cancelChangeCurUSerInfo() {
    this._conCurUserInfoChangeHide();
    this._displayCurUserInfo();
  }

  // Example 1

  // this_dubleCheckConfirmMessageDisplay("");

  // dubleCheckConfirmMessage.addEventListener("click", (e) => {
  //   if (e.target.className === "btnno") {
  //     this._dubleCheckConfirmMessageHide();
  //   }
  //   if (e.target.className === "btnyes") {
  //     this._dubleCheckConfirmMessageHide();}})

  _doneChangeCurUSerInfo() {
    const inpChangeUserName = document.querySelector(".change-username");
    const inpChangePhonenum = document.querySelector(".change-phonenum");
    const inpChangePassword = document.querySelector(".change-password");
    const inpChangeConfirmPassword = document.querySelector(
      ".change-confirmpassword"
    );

    if (inpChangePassword.value === inpChangeConfirmPassword.value) {
      this._dubleCheckConfirmMessageDisplay(
        "Estás seguro que quieres cambiar tu information?",
        "Cancelar",
        "Cambiar"
      );
      // this._conCurUserInfoChangeHide();

      dubleCheckConfirmMessage.addEventListener("click", (e) => {
        if (e.target.className === "btnno") {
          this._dubleCheckConfirmMessageHide();
          // this._conCurUserInfoChangeDisp();
        }
        if (e.target.className === "btnyes") {
          this._dubleCheckConfirmMessageHide();

          this._getUserAccs();

          const whatsAppOpt = document.querySelector("#change-has-whatsApp");
          const hasWhatsApp =
            whatsAppOpt.options[whatsAppOpt.selectedIndex].text;
          let whats;

          if (hasWhatsApp === "Si") {
            whats = true;
          } else if (hasWhatsApp === "No") {
            whats = false;
          }

          const acc = this.accounts.find(
            (acc) => acc.userId === this.currentAccount.userId
          );

          acc.userName = inpChangeUserName.value;
          acc.phoneNumber = inpChangePhonenum.value;
          acc.password = inpChangePassword.value;
          acc.whatsApp = whats;

          this.currentAccount = acc;

          const CurUsIn = document.querySelector("#cur-stats--user--disp");
          if (CurUsIn !== null && CurUsIn !== undefined) {
            CurUsIn.remove();
          }

          this._conCurUserInfoChangeHide();
          this._displayCurUserInfo();
          this._saveUserAccs();
          this._getUserAccs();
        }
      });
    } else {
      this._confirmationMessageDisplay("Your passwords have to match", 4000);
    }
  }

  _changeUserLevel() {
    const changeUserLevel = document.querySelectorAll(".change-user-level");
  }

  _randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  _getrandomAlphaInt() {
    return this.#alphaArray[this._randomInt(this.#alphaArray.length)];
  }

  _getrandomNumDid(did) {
    let int = [];

    for (let i = 0; i < did; i++) {
      int.push(this._randomInt(9));
    }
    const conCode = int.join("");
    return conCode;
  }

  async _sendConCodeSMS(phoneNum) {
    const num = this._getrandomNumDid(7);
    const data = JSON.stringify({
      from: "InfoSMS",
      to: phoneNum,
      text: num,
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://infobip.p.rapidapi.com/sms/1/text/single");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader(
      "Authorization",
      "Basic QmVuS2xhc3NlbjpDb21wcmFWZW50YSs1Mg=="
    );
    xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "7d3c879bccmsh62af9fff7beec24p169f3ajsna9b5e9a558be"
    );
    xhr.setRequestHeader("X-RapidAPI-Host", "infobip.p.rapidapi.com");

    xhr.send(data);
  }

  _createCupon() {
    const cuponLN = [];
    for (let i = 0; i < 7; i++) {
      cuponLN.push(this._getrandomAlphaInt());
    }
    const cupon = cuponLN.join("");

    displayCuponInCreator.textContent = cupon;
  }

  _useCupon() {
    const cupon = displayCuponInCreator.textContent;
    const type =
      cuponTypeSelector.options[cuponTypeSelector.selectedIndex].text;
    const quantity = quantityOfSelectedCuponCreator.value;

    let cuponLN;

    const existCupon = this.#cuponsArray.find((acc) => acc.cupon === cupon);

    if (existCupon === undefined) {
      cuponLN = "no match";
    } else {
      cuponLN = existCupon.cupon;
    }
    if (cupon === cuponLN) {
      this._confirmationMessageDisplay(
        `${cupon} is already in use. Please get a new CUPON`,
        4000
      );
    } else {
      if (cupon !== "" && quantity !== "" && type !== "") {
        const newCupon = new Cupon(cupon, type, quantity, this._getTimeStamp());

        this.#cuponsArray.push(newCupon);
        this.localCuponArr.push(newCupon);

        console.log("Cupon Array", this.#cuponsArray);
        this._saveCuponsArray();
        this._getCuponsArray();

        while (conICCuponsShow.hasChildNodes()) {
          conICCuponsShow.removeChild(conICCuponsShow.firstChild);
        }

        this.localCuponArr.forEach(function (mov, i, arr) {
          const cuponHtml = `
          <div class="in-creator-cupon--show">
          <p> <span>${mov.cupon}</span> / <span>${mov.quantityOfSelected}</span>_<span>${mov.type}</span></p>
          </div>`;

          conICCuponsShow.insertAdjacentHTML("afterBegin", cuponHtml);
        });

        while (conICSavedCuponsShow.hasChildNodes()) {
          conICSavedCuponsShow.removeChild(conICSavedCuponsShow.firstChild);
        }
        this.#cuponsArray.forEach(function (mov, i, arr) {
          const cuponHtml = `
            <div class="in-creator-cupon--show">
            <p> <span>${mov.cupon}</span> / <span>${mov.quantityOfSelected}</span>_<span>${mov.type}</span></p>
          </div>`;

          conICSavedCuponsShow.insertAdjacentHTML("afterBegin", cuponHtml);
        });
      } else {
        this._confirmationMessageDisplay(`Can't be EMPTY`, 2000);
      }
    }
  }

  // const acc = this.accounts.find(
  //   (mov) => mov.userId === this.currentAccount.userId
  // );
  // const indexRemove = this.accounts.indexOf(acc);
  // if (indexRemove !== -1) {
  //   const deletedAcc = this.accounts.splice(indexRemove, 1);
  //   this._saveUserAccs();
  //   this._getUserAccs();
  //   this.#deletedAccounts.push(deletedAcc);
  //   this._saveDeletedAccounts();
  //   this._getDeletedAccounts();
  //   this._accLogout();
  // }

  // itemsSellArray = [];
  // #itemAskArray = [];

  _deleteCurAccSellAskItems() {
    this._getSellItems();
    this._getAskMessages();
    const curAcc = this.currentAccount;
    const askArr = this.#itemAskArray;
    const sellArr = this.itemsSellArray;

    this.itemsSellArray.forEach(function (mov, i, arr) {
      if (mov.sellerId === curAcc.userId) {
        const indexRemove = sellArr.indexOf(mov);
        const deletedItem = sellArr.splice(indexRemove, 1);
        console.log("Deleted Sell Item:", deletedItem);
      }
    });

    this.#itemAskArray.forEach(function (mov, i, arr) {
      if (mov.askerId === curAcc.userId) {
        const indexRemove = askArr.indexOf(mov);
        const deletedItem = askArr.splice(indexRemove, 1);
        console.log("Deleted Ask Item:", deletedItem);
      }
    });
    this._saveSellItems();
    this._saveAskMessages();
  }

  _sortUsersEdit() {
    this._getUserAccs();
    const accArr = this.accounts;

    selectsortAllUsersEdit.addEventListener("change", function () {
      let arrForUsers = [];
      const selected =
        selectsortAllUsersEdit.options[selectsortAllUsersEdit.selectedIndex]
          .text;

      if (selected === "all") {
        accArr.forEach(function (mov, i, arr) {
          arrForUsers.push(mov);
        });
        const allSeparateUserStatsDisp =
          document.querySelectorAll(".stats-user--disp");
        allSeparateUserStatsDisp.forEach((stat) => {
          stat.remove();
        });
      } else if (
        selected === "open" ||
        selected === "suspended" ||
        selected === "blocked"
      ) {
        accArr.forEach(function (mov, i, arr) {
          if (mov.accountStatus === selected) {
            arrForUsers.push(mov);
          }
        });
        const allSeparateUserStatsDisp =
          document.querySelectorAll(".stats-user--disp");
        allSeparateUserStatsDisp.forEach((stat) => {
          stat.remove();
        });
      } else if (
        selected === "manager" ||
        selected === "admin" ||
        selected === "assistant" ||
        selected === "normal"
      ) {
        accArr.forEach(function (mov, i, arr) {
          if (mov.userLevel === selected) {
            arrForUsers.push(mov);
          }
        });
        const allSeparateUserStatsDisp =
          document.querySelectorAll(".stats-user--disp");
        allSeparateUserStatsDisp.forEach((stat) => {
          stat.remove();
        });
      }

      arrForUsers.forEach(function (mov, i, arr) {
        let type = "stats-user-disp--noplan";
        if (mov.userStatus === "trial") {
          type = "stats-user-disp--trial";
        } else if (mov.userStatus === "promo" || mov.userStatus === "plan") {
          type = "stats-user-disp--promoplan";
        }

        const userHtml = `<div id="${mov.phoneNumber}" class="stats-user--disp ${type}"
        data-cur="1">
        <p class="users-name-t t">
        Name: <span class="users-name i">${mov.userName}</span>
        </p>
        <p class="users-phonenum-t t">
        Phone number: <span class="users-phonenum i">${mov.phoneNumber}</span>
        </p>
        <p class="users-pasword-t t">
        Password: <span class="users-pasword i">${mov.password}</span>
        </p>
        <p class="users-userid-t t">
        User id: <span class="users-pasword i">${mov.userId}</span>
        </p>
        <p class="users-status-t t">
        Pro Status: <span class="users-status i">${mov.userStatus}</span>
        </p>
        <p class="users-business-account-t t">
        Bussines account:
        <span class="users-business-account i">${mov.businessAccount}</span>
        </p>
        <p class="users-account-status-t t">
        Account Status:
        <span class="users-account-status i">${mov.accountStatus}</span>
        </p>
        <p class="users-userlevel-t t">
        User type: <span class="users-userlevel i">${mov.userLevel}</span>
        </p>
        <p class="users-whatsapp-t t">
        Has WhatsApp: <span class="users-whatsapp i">${mov.whatsApp}</span>
        </p>
        <p class="users-items-total-t t">
        Items this year:
        <span class="users-items-total i">${mov.itemsCountCurYear}</span>
        </p>
        <p class="users-items-year-t t">
        Items total: <span class="users-items-year i">${mov.itemsCount}</span>
        </p>
        </div>
        `;

        conUsersEdit.insertAdjacentHTML("beforeend", userHtml);
        arrForUsers = [];
      });
    });
  }

  _changeUserDetailsEdit() {
    const userId = inuserIdForChangeDetials.value;
    const changeTo =
      inusersEditSelectChange.options[inusersEditSelectChange.selectedIndex]
        .text;

    const acc = this.accounts.find((mov) => mov.userId === userId);

    if (acc) {
      if (
        changeTo === "admin" ||
        changeTo === "manager" ||
        changeTo === "assistant" ||
        changeTo === "normal"
      ) {
        acc.userLevel = changeTo;
        this._saveUserAccs();
        this._getUserAccs();
      } else if (
        changeTo === "blocked" ||
        changeTo === "suspended" ||
        changeTo === "open"
      ) {
        acc.accountStatus = changeTo;
        this._saveUserAccs();
        this._getUserAccs();
      }
    } else {
      // this;
      this._confirmationMessageDisplay(
        "Can not apply change. Please input a valid user ID",
        5000
      );
    }
  }

  _conBuyScroll() {
    const accCordY = conBuy.scrollTop;

    if (accCordY > this.inCordY) {
      this._topBarrHide();
      this.inCordY = accCordY;
      this._btnPublishHide();
    } else {
      this._topBarrDisp();
      this.inCordY = accCordY;
      this._btnPublishDisp();
    }
  }

  _dispAllAddsAddCreator() {
    this._getAds();
    while (conAllAdsDispAdCreator.hasChildNodes()) {
      conAllAdsDispAdCreator.removeChild(conAllAdsDispAdCreator.firstChild);
    }

    this.adsArray.forEach(function (mov, i, arr) {
      let imgOrVid = ``;

      if (mov.type === "img") {
        imgOrVid += `<img class="img-in-all-adds-display-in-ad--creator" src="${mov.imgUrl}" alt=""></img>`;
      } else if (mov.type === "vid") {
        imgOrVid = `<video
            src="${mov.imgUrl}"
            class="img-in-all-adds-display-in-ad--creator" 
            controls
            ></video>`;
      }
      // width="360"

      const adsHtml = `<div class="ad-contianer-all--ads" data-id="${mov.timeStamp}">
      <button class="delete-ad">Delete</button>
      ${imgOrVid}
      <div class="description">
        <p>${mov.description}</p>
      </div>
      <div>${mov.time}</div>
    </div>`;
      conAllAdsDispAdCreator.insertAdjacentHTML("beforeend", adsHtml);
    });
  }

  // All Funtions End here

  // All addeventListeners Start here

  _events() {
    adDescriptionText.addEventListener("keyup", function () {
      displayLiveDescriptionTextInCreator.textContent = adDescriptionText.value;
    });

    conBuy.addEventListener("scroll", this._conBuyScroll.bind(this));

    btncancelSearchBuy.addEventListener(
      "click",
      this._conBuySearchHide.bind(this)
    );
    btnsortReloadUsersAccounts.addEventListener(
      "click",
      this._sortUsersEdit.bind(this)
    );
    btnchangeUserDetailsEdit.addEventListener(
      "click",
      this._changeUserDetailsEdit.bind(this)
    );
    btnchooselogin.addEventListener("click", this._chooseLoginDisp.bind(this));

    btnlogin.addEventListener("click", this._login.bind(this));

    btncancelLogcreate.addEventListener("click", this._init.bind(this));
    btncancelProModalDiscounts.addEventListener(
      "click",
      this._proModalDiscountsHide.bind(this)
    );
    btn2cancelLogcreate.addEventListener("click", this._init.bind(this));

    btnchooseCreateAccount.addEventListener(
      "click",
      this._chooseCreateAccDisp.bind(this)
    );

    btncreateAccount.addEventListener(
      "click",
      this._createAccountFunction.bind(this)
    );

    // headerLow.addEventListener("click", this._accLogout.bind(this));

    btnpublish.addEventListener("click", this._sortPro.bind(this));

    btnsend.addEventListener("click", this._sendItem.bind(this));

    btnsendCancel.addEventListener(
      "click",
      this._cancelSendSellItem.bind(this)
    );
    btnadClearText.addEventListener(
      "click",
      this._clearAdDescriptionText.bind(this)
    );

    btnask1.addEventListener("click", this._askDisp.bind(this));
    btnask.addEventListener("click", this._btnaskDivHide.bind(this));
    btnbuy.addEventListener("click", this._buyDisp.bind(this));
    btnads.addEventListener("click", this._adsDisp.bind(this));

    btnsell.addEventListener("click", this._sellDisp.bind(this));
    btnTryApp.addEventListener("click", this._tryApp.bind(this));
    btnBuyApp.addEventListener("click", this._proModalDiscountsDisp.bind(this));
    btnchooseUseCupon.addEventListener(
      "click",
      this._chooseUseCuponForApp.bind(this)
    );
    btnUserUseCupon.addEventListener("click", this._useCuponForApp.bind(this));

    btnaskNow.addEventListener("click", this._newAskMessage.bind(this));
    btnaskCancel.addEventListener(
      "click",
      this._textAreaDivHideBtnDisp.bind(this)
    );

    btnMenu.addEventListener("click", this._conMenuDispHide.bind(this));
    btnPremium.addEventListener(
      "click",
      this._displayProModalForBtn.bind(this)
    );

    conSumaryUsers.addEventListener(
      "click",
      this._displayStatsUsers.bind(this)
    );

    btnmenuBack.addEventListener("click", this._conMenuDispHide.bind(this));
    btnappStats.addEventListener(
      "click",
      this._mainConUserStatsDisp.bind(this)
    );
    btnappSetings.addEventListener(
      "click",
      this._mainConSetingsDisp.bind(this)
    );
    btnappAnswerQuestion.addEventListener(
      "click",
      this._mainConAnswersQuestionDisp.bind(this)
    );

    btnappTools.addEventListener("click", this._mainConToolsDisp.bind(this));
    menuOptMyAccount.addEventListener(
      "click",
      this._displayCurUserInfo.bind(this)
    );
    btnbackCurUserInfDisp.addEventListener(
      "click",
      this._backCurUserInfDisp.bind(this)
    );
    btnchangeCurUserInfDisp.addEventListener(
      "click",
      this._changeCurUserInfDisp.bind(this)
    );
    btnbackConMainUserStats.addEventListener(
      "click",
      this._mainConUserStatsHide.bind(this)
    );

    btnbackConMainTools.addEventListener(
      "click",
      this._mainConToolsHide.bind(this)
    );

    btnbackConAnswerquestion.addEventListener(
      "click",
      this._mainConAnswersQuestionHide.bind(this)
    );

    btnbackConMainSetings.addEventListener(
      "click",
      this._doubleCheckBackFromAppAdminSetings.bind(this)
    );

    btnCSCancel.addEventListener(
      "click",
      this._doubleCheckBackFromAppAdminSetings.bind(this)
    );

    btnCSReset.addEventListener(
      "click",
      this._doubleCheckResetSetingInputs.bind(this)
    );

    btnCSApply.addEventListener(
      "click",
      this._appSetingsApplyChanges.bind(this)
    );

    btnbackConUsersDisp.addEventListener(
      "click",
      this._conUsersDispHide.bind(this)
    );

    btncanelCurUserInfoChange.addEventListener(
      "click",
      this._cancelChangeCurUSerInfo.bind(this)
    );

    btnCancelProModal.addEventListener("click", this._proModalHide.bind(this));
    btnCancelCuponModal.addEventListener(
      "click",
      this._cuponModalHide.bind(this)
    );

    btndoneCurUserInfoChange.addEventListener(
      "click",
      this._doneChangeCurUSerInfo.bind(this)
    );

    conUsersDisp.addEventListener("click", (e) => {
      if (e.target.className === "btnchange-user-level") {
        console.log("clicked");
      }
    });
    conUsersDisp.addEventListener("click", (e) => {
      if (e.target.dataset.cur === "1") {
        console.log("right");
        e.target.style.height = 25 + "%";
        e.target.style.overflowY = "scroll";
        console.log(e.target.dataset.cur);
      }
    });
    conUsersEdit.addEventListener("click", (e) => {
      if (e.target.dataset.cur === "1") {
        console.log("right");
        e.target.style.height = 30 + "%";
        e.target.style.overflowY = "scroll";
        console.log(e.target.dataset.cur);
      }
    });

    conSell.addEventListener("click", (e) => {
      if (e.target.id === "btndelete-this-item") {
        this._dubleCheckConfirmMessageDisplay(
          "¿Eliminar este articulo?",
          "No",
          "Si"
        );
        const itemId = e.target.parentElement.dataset.item;
        const itemEl = e.target.parentElement;
        dubleCheckConfirmMessage.addEventListener("click", (e) => {
          if (e.target.className === "btnno") {
            this._dubleCheckConfirmMessageHide();
          }
          if (e.target.className === "btnyes") {
            const item = this.itemsSellArray.find(
              (mov) => mov.itemId.toString() === itemId.toString()
            );

            const removeIndex = this.itemsSellArray.indexOf(item);
            console.log(item);
            if (removeIndex.toString() !== "-1") {
              this.itemsSellArray.splice(removeIndex, 1);
              this._saveSellItems();
              console.log(this.itemsSellArray);
              itemEl.remove();
            }
            this._dubleCheckConfirmMessageHide();
          }
        });
      }

      if (e.target.id === "btnpublish-again") {
        this._getAppSetingAdmin();
        const item = this.itemsSellArray.find(
          (mov) => mov.itemId === e.target.parentElement.dataset.item
        );

        const needed = this._getTimeStamp() - item.timeStamp;
        console.log(needed);
        console.log(
          this.appSetingsAdmin.time.oneDayInMilliseconds *
            this.appSetingsAdmin.time.timePublishItemAgainDays
        );

        if (
          needed >=
          this.appSetingsAdmin.time.oneDayInMilliseconds *
            this.appSetingsAdmin.time.timePublishItemAgainDays
        ) {
          console.log("needed", needed);
          const removeIndex = this.itemsSellArray.indexOf(item);

          const rePublish = this.itemsSellArray.splice(removeIndex, 1);
          this.itemsSellArray.unshift(rePublish[0]);

          console.log(rePublish[0]);
          console.log(item);
          this._saveSellItems();
        } else {
          const waitDays = this.appSetingsAdmin.time.timePublishItemAgainDays;
          this._confirmationMessageDisplay(
            `You can NOT republish an item in less the ${waitDays} days`,
            3000
          );
          console.log("needed", needed);
        }
      }
    });

    conAllAdsDispAdCreator.addEventListener("click", (e) => {
      console.log(this.adsArray);
      this._getAds();
      if (e.target.className === "delete-ad") {
        console.log("clicked");

        this._dubleCheckConfirmMessageDisplay("Delete Ad?", "No", "Yes");
        const target = e.target.parentElement.dataset.id.toString();
        // console.log("target", target);
        const targetEl = e.target.parentElement;
        // console.log("targetel", targetEl);

        dubleCheckConfirmMessage.addEventListener("click", (e) => {
          if (e.target.className === "btnno") {
            this._dubleCheckConfirmMessageHide();
          }
          if (e.target.className === "btnyes") {
            console.log(this.adsArray);
            const item = this.adsArray.find(
              (mov) => mov.timeStamp.toString() === target
            );
            console.log("item", item);

            console.log(this.adsArray);
            const removeIndex = this.adsArray.indexOf(item);
            console.log("removeindex", removeIndex);
            // console.log(this.adsArray[removeIndex]);
            if (removeIndex.toString() !== "-1") {
              this.adsArray.splice(removeIndex, 1);
              this._saveAds();
              this._dispAllAddsAddCreator();
            }
            this._dubleCheckConfirmMessageHide();
          }
        });
      }
    });

    btncuponCreatorGet.addEventListener("click", this._createCupon.bind(this));
    btncuponCreatorUse.addEventListener("click", this._useCupon.bind(this));
    btncuponShowClear.addEventListener(
      "click",
      this._clearCuponsShow.bind(this)
    );

    btndeleteCurUserAcc.addEventListener("click", this._deleteAcc.bind(this));
    btnlogoutCurUserAcc.addEventListener(
      "click",
      this._logoutCurAcc.bind(this)
    );

    // imgsElem.addEventListener("change", function (e) {
    //   const files = e.target.files;
    //   console.log(files);
    //   let imgsHtml = ``;

    //   for (let i = 0; i < files.length; i++) {
    //     const imgs = URL.createObjectURL(files[i]);
    //     imgsHtml += `<img id="item-imgs-display-for--sell" src="${imgs}" alt=""</img>`;
    //   }
    //   conimgsForSellItems.insertAdjacentHTML("beforeend", imgsHtml);
    // });

    // imgAd.addEventListener("change", function (e) {
    //   const files = e.target.files;
    //   console.log(files);
    //   let imgsHtml = ``;

    //   for (let i = 0; i < files.length; i++) {
    //     const imgs = URL.createObjectURL(files[i]);
    //     imgsHtml += `<img id="item-imgs-display-for--sell" src="${imgs}" alt=""</img>`;
    //   }

    //   // const imgs = URL.createObjectURL(files);
    //   // const imgsHtml = `<img id="item-imgs-display-for--sell" src="${imgs}" alt=""</img>`;

    //   conACImgForAd.insertAdjacentHTML("beforeend", imgsHtml);
    // });

    btnmodalSellDeletImgs.addEventListener(
      "click",
      this._resetUploadSellImgs.bind(this)
    );
    MSIncludeFotos.addEventListener(
      "click",
      this._resetUploadSellImgs.bind(this)
    );
    MSIncludeFotos.addEventListener(
      "click",
      this._openwidgitForItemImgs.bind(this)
    );

    btnadDeleteImg.addEventListener(
      "click",
      this._resetUploadAdImgs.bind(this)
    );

    imgsFromDescription.addEventListener(
      "click",
      this._conImgDisplayScreenHide.bind(this)
    );
    btnloadAddsAddCreator.addEventListener(
      "click",
      this._dispAllAddsAddCreator.bind(this)
    );
    tapUploadImgForAd.addEventListener(
      "click",
      this._resetUploadAdImgs.bind(this)
    );
    tapUploadImgForAd.addEventListener(
      "click",
      this._openwidgitForAdImgs.bind(this)
    );
    btnadSend.addEventListener("click", this._sendSortAd.bind(this));
    goToTermsAndConditions.addEventListener(
      "click",
      this._termsDisp.bind(this)
    );
    btnbackFromtermsAndConditions.addEventListener(
      "click",
      this._termsHide.bind(this)
    );
    btnuseUrlForAd.addEventListener("click", this._useUrlForAd.bind(this));
  }

  // All addeventListeners End here
}

const app = new App();
