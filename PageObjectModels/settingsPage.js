var SettingsPage = function(){

    this.pushNotificationsCheckbox = $$('ion-checkbox input').get(0)
    this.emailNotificationsCheckbox = $$('ion-checkbox input').get(1)
    this.biometricDataCheckbox = $$('ion-checkbox input').get(2)
    this.checkedCheckboxes = $$('ion-checkbox.checkbox-checked.md')
    this.appLanguageEng = $$('ion-radio.md').get(0)
    this.appLanguageNeth = $$('ion-radio.md').get(1)
    this.appLanguageDeu = $$('ion-radio.md').get(2)
    this.intLanguageEng = $$('ion-radio.md').get(3)
    this.saveButton = $('ion-button.ion-color-primary')
}
module.exports = SettingsPage;
