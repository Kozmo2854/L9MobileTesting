const ForgotPasswordPage = require("../PageObjectModels/forgotPasswordPage.js");
var LoginPageRef = require("../PageObjectModels/loginPage.js");
var MainPageRef = require("../PageObjectModels/mainPage.js");

let loginPage = new LoginPageRef();
let mainPage = new MainPageRef();
let forgotPasswordPage = new ForgotPasswordPage();

let EC = protractor.ExpectedConditions;

describe("TIIM", function () {

    it("Should not login because of invalid email", function () {
        loginPage.fillLoginForm(loginPage.fakeEmail,loginPage.validPassword);

        browser.wait(EC.presenceOf(loginPage.userDoesntExistError),15000)
        expect((loginPage.userDoesntExistError).isPresent()).toBe(true);
    });

    it("Should not login because of invalid pass", function () {
        loginPage.fillLoginForm(loginPage.validEmail,loginPage.fakePassword);

        browser.wait(EC.presenceOf(loginPage.userDoesntExistError),15000)
        expect((loginPage.userDoesntExistError).isPresent()).toBe(true);
    });

    it("Should display error message for invalid email adress", function () {
        loginPage.emailInput.sendKeys(loginPage.badEmailFormat);

        expect((loginPage.emailError).getText()).toBe(loginPage.emailErrorMsg);
    });

    it("Should login succesfully", function () {

        loginPage.emailInput.clear().then(function(){
            loginPage.fillLoginForm(loginPage.validEmail,loginPage.validPassword);
        })

        browser.wait(EC.presenceOf(mainPage.welcomeCard),15000)
        expect((mainPage.welcomeCard).isPresent()).toBe(true);
    });
});