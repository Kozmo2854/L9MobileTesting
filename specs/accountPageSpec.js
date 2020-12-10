var AccountPageRef = require("../PageObjectModels/accountPage.js");

let accountPage = new AccountPageRef();

let EC = protractor.ExpectedConditions;

describe("TIIM", function () {
    xit("Should be true as name is equal to firstName + lastName",function(){
        let expectedFullName = accountPage.name.getText();
        let fullName = accountPage.firstNameValue.getAttribute("ng-reflect-model") +
        " " + accountPage.lastNameValue.getAttribute("ng-reflect-model");
        expect(fullName).toEqual(expectedFullName);
    })

    fit("Should change first and last name", function(){

        accountPage.firstNameInput.clear()
        accountPage.lastNameInput.clear()

        accountPage.firstNameInput.sendKeys("test")
        accountPage.lastNameInput.sendKeys("testovic")

        accountPage.submitButton.click()

        expect(accountPage.firstNameValue.getAttribute("ng-reflect-model")).toEqual("test")
        expect(accountPage.lastNameValue.getAttribute("ng-reflect-model")).toEqual("testovic")
    })

});