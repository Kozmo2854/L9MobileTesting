
  let currentDateTime = new Date().toJSON().replace(/-|T|Z|:/g,'').slice(0,14);

  var ForgotPasswordPage = function () {
  
    this.validEmail = 'qaintern2@levi9.com'
    this.fakeEmail = 'qaintern2' + currentDateTime + '@levi9.com'
    this.badEmailFormat = 'randomEmail'

    this.NoticeSpanMsg = 'Enter your email address to reset your password'
    this.EmailErrorMsg = 'Please enter a valid email address'
  
    
    this.EmailInput = $('.native-input.sc-ion-input-md');

    this.EmailError = $('div.input-error');
    this.NoticeSpan = $('div.ion-padding-vertical span');

    this.resetPasswordButton = $('.ion-color.ion-color-primary.md.button');
    this.backToLoginButton = $$('.md.button.button-small.button-clear').last();

    
  };
  module.exports = ForgotPasswordPage;
  