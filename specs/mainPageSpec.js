var MainPageRef = require("../PageObjectModels/mainPage.js");
var BurgerMenuRef = require("../PageObjectModels/burgerMenuPage.js");

let mainPage = new MainPageRef();
let burgerMenuPage = new BurgerMenuRef();

let EC = protractor.ExpectedConditions;

describe("TIIM", function () {
    fit("Should open up the burger menu",function(){
        mainPage.burgerMenu.click();
        expect(burgerMenuPage.menu.isPresent()).toBe(true)
    })

    require("./burgerMenuSpec.js")
});