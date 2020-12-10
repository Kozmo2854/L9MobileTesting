exports.config = {
    seleniumAddress: "http://localhost:4723/wd/hub",
    specs: ["specs/forgotPasswordSpec.js","specs/loginPageSpec.js"],
  
    // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
    capabilities: {
      browserName: "",
      //  chromeOptions:{"args":[""]},
      autoWebview: true,
      platformName: "Android",
      app: "C:/Users/j.zejnula/Downloads/tiim.apk",
      appPackage: "nl.bmslab.utwente.tiimapp",
      platformVersion: "11",
      deviceName: "Android Emulator",
    },
  
    baseUrl: "/",
  };
  