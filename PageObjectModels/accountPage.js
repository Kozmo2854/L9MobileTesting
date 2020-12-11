var BurgerMenu = function(){

    this.firstNameInput = $("ion-input#firstName input")
    this.lastNameInput = $("ion-input#lastName input")
    this.name = $("ion-col h3")
    this.submitButton = $("ion-button[type='submit']")

    this.firstNameValue = $("ion-input#firstName")
    this.lastNameValue = $("ion-input#lastName")

    this.newFirstName = "Petar"
    this.newLastName = "Petrovic"
}
module.exports = BurgerMenu;






