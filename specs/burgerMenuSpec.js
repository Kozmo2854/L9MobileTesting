let burgerMenuRef = require("../PageObjectModels/burgerMenuPage.js")
var LoginPageRef = require("../PageObjectModels/loginPage.js");
let AccountPageRef = require("../PageObjectModels/accountPage.js")

let burgerMenuPage = new burgerMenuRef();
let loginPage = new LoginPageRef();
let accountPage = new AccountPageRef();

describe("TIIM", function () {
    fit("Should have the same email as the one we logged in with",function(){
        expect(burgerMenuPage.UserName.getText()).toBe(loginPage.validEmail);
    })
    fit("Should open the account page",function(){
        burgerMenuPage.AccountButton.click();
        expect(accountPage.firstNameInput.isPresent()).toBe(true)
    })

    require("./accountPageSpec.js")
});