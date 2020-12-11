let burgerMenuRef = require("../PageObjectModels/burgerMenuPage.js")
let SettingsPage = require("../PageObjectModels/settingsPage.js")

let burgerMenuPage = new burgerMenuRef();
let settingsPage = new SettingsPage();

let EC = protractor.ExpectedConditions;

describe("TIIM", function () {
    it("Should uncheck all checked options"), function(){
        settingsPage.emailNotificationsCheckbox.click()
        settingsPage.pushNotificationsCheckbox.click()
        settingsPage.biometricDataCheckbox.click()

        settingsPage.saveButton.click()
        expect(settingsPage.checkedCheckboxes.count()).toEqual(3)
    }
});