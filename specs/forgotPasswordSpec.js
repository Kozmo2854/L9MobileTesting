var LoginPageRef = require("../PageObjectModels/loginPage.js");
var ForgotPasswordPageRef = require("../PageObjectModels/forgotPasswordPage.js")

let loginPage = new LoginPageRef();
let forgotPasswordPage = new ForgotPasswordPageRef();

let EC = protractor.ExpectedConditions;

describe("TIIM", function () {
    it("Should redirect to the forgot password form", function(){
        loginPage.forgotPasswordButton.click();

        expect(forgotPasswordPage.NoticeSpan.getText()).toBe(forgotPasswordPage.NoticeSpanMsg)
    })

    it("Should redirect to the login form", function(){
        forgotPasswordPage.backToLoginButton.click();

        expect(loginPage.passwordInput.isPresent()).toBe(true)

        loginPage.forgotPasswordButton.click();
    })

    it("Should show an error because of bad email format", function(){
        forgotPasswordPage.EmailInput.sendKeys(forgotPasswordPage.badEmailFormat);

        expect(forgotPasswordPage.EmailError.getText()).toBe(forgotPasswordPage.EmailErrorMsg)
    })

    it("Should redirect us to the login page and display a proper error because of nonexisting email", function(){
        forgotPasswordPage.EmailInput.clear();

        forgotPasswordPage.EmailInput.sendKeys(forgotPasswordPage.fakeEmail);

        forgotPasswordPage.resetPasswordButton.click();

        browser.wait(EC.presenceOf(loginPage.userDoesntExistError),15000)
        expect((loginPage.userDoesntExistError).isPresent()).toBe(true);
    })
    
    it("Should reset the password",function(){
        loginPage.forgotPasswordButton.click();

        forgotPasswordPage.EmailInput.sendKeys(forgotPasswordPage.validEmail);
        forgotPasswordPage.resetPasswordButton.click();

        browser.wait(EC.presenceOf(loginPage.resetPasswordNotice),15000)
        expect(loginPage.resetPasswordNotice.getText()).toBe('We have sent an email with instructions to reset your password')
    })

});