// by.addLocator('css_sr', (cssSelector, opt_parentElement, opt_rootSelector) => {
//   let selectors = cssSelector.split('::sr');
//   if (selectors.length === 0) {
//       return [];
//   }

//   let shadowDomInUse = (document.head.createShadowRoot || document.head.attachShadow);
//   let getShadowRoot  = (el) => ((el && shadowDomInUse) ? el.shadowRoot : el);
//   let findAllMatches = (selector, targets, firstTry) => {
//       let using, i, matches = [];
//       for (i = 0; i < targets.length; ++i) {
//           using = (firstTry) ? targets[i] : getShadowRoot(targets[i]);
//           if (using) {
//               if (selector === '') {
//                   matches.push(using);
//               } else {
//                   Array.prototype.push.apply(matches, using.querySelectorAll(selector));
//               }
//           }
//       }
//       return matches;
//   };

//   let matches = findAllMatches(selectors.shift().trim(), [opt_parentElement || document], true);
//   while (selectors.length > 0 && matches.length > 0) {
//       matches = findAllMatches(selectors.shift().trim(), matches, false);
//   }
//   return matches;
// });

let currentDateTime = new Date().toJSON().replace(/-|T|Z|:/g,'').slice(0,14);

var LoginPage = function () {

  this.validEmail = 'qaintern2@levi9.com'
  this.validPassword = '12345'

  this.fakeEmail = 'qaintern2' + currentDateTime + '@levi9.com'
  this.fakePassword = '54321'

  this.badEmailFormat = 'randomEmail'
  


  this.emailInput = $("input[name='email']");
  this.passwordInput = $("input[name='password']");

  this.forgotPassword = $$('.ion-activatable.button-clear').last();
  this.loginButton = $('.ion-color.ion-color-primary.md.button');

  this.userDoesntExistError = $('.md.ion-color.ion-color-danger.hydrated')
  this.emailError = $('div.input-error');

  this.fillLoginForm = function(email,pass){
    this.emailInput.sendKeys(email)
    this.passwordInput.sendKeys(pass);
    this.loginButton.click();
  }

};
module.exports = LoginPage;