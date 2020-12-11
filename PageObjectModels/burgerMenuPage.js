var BurgerMenu = function(){

    this.menu = $('.show-menu');
    this.UserName = $('ion-label.hydrated.ion-padding')
    this.AccountButton = $("ion-button[routerlink='account']")
    this.LogOut = $$('ion-item-group[role="group"] ion-button').get(2)
    this.Internship = $$('ion-item-group[role="group"] ion-button').get(3)
    this.PrivacyPolicy = $$('ion-item-group[role="group"] ion-button').get(4)
    this.SettingsButton = $("ion-button[routerlink='settings']")
    this.AppInfo = $("ion-button[routerlink='app-info']")

}
module.exports = BurgerMenu;
