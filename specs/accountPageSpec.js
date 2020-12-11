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

    it("Should change first and last name", function(){
            
        let currentTime = new Date().toJSON().replace(/-|T|Z|:/g,'').slice(8,14);

        accountPage.firstNameInput.clear()
        accountPage.lastNameInput.clear()

        accountPage.firstNameInput.sendKeys(accountPage.newFirstName+currentTime)
        accountPage.lastNameInput.sendKeys(accountPage.newFirstName+currentTime)

        accountPage.submitButton.click()

        expect(accountPage.firstNameValue.getAttribute("ng-reflect-model")).toEqual(accountPage.newFirstName+currentTime)
        expect(accountPage.lastNameValue.getAttribute("ng-reflect-model")).toEqual(accountPage.newFirstName+currentTime)

        
    })

});