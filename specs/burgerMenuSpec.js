let burgerMenuRef = require("../PageObjectModels/burgerMenuPage.js")
var LoginPageRef = require("../PageObjectModels/loginPage.js");
let AccountPageRef = require("../PageObjectModels/accountPage.js")
let SettingsPageRef = require("../PageObjectModels/settingsPage.js");
let MainPageRef = require("../PageObjectModels/mainPage.js")

let burgerMenuPage = new burgerMenuRef();
let loginPage = new LoginPageRef();
let accountPage = new AccountPageRef();
let settingsPage = new SettingsPageRef()
let mainPage = new MainPageRef();

let EC = protractor.ExpectedConditions;

describe("TIIM", function () {
    it("Should have the same email as the one we logged in with",function(){
        expect(burgerMenuPage.UserName.getText()).toBe(loginPage.validEmail);
    })

    it("Should open the account page",function(){
        burgerMenuPage.AccountButton.click();
        expect(accountPage.firstNameInput.isPresent()).toBe(true)
    })

    require("./accountPageSpec.js")

    it("Should open the settings page",function(){
        browser.navigate().back();
        mainPage.burgerMenu.click()
        burgerMenuPage.SettingsButton.click();
        expect(settingsPage.appLanguageEng.isPresent()).toBe(true)
    })
    
    require("./settingsPageSpec.js")

    it("Should log out", function(){
        browser.navigate().back()
        mainPage.burgerMenu.click()
        burgerMenuPage.LogOut.click();
        
        browser.wait(EC.presenceOf(loginPage.emailInput),15000)
        expect(loginPage.emailInput.isPresent()).toBe(true);

        loginPage.fillLoginForm(loginPage.validEmail,loginPage.validPassword)
    })
});