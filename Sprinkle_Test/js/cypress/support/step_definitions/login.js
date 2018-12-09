const { Builder, By, Key, until} = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('chromedriver')
var chai = require('chai');  
var assert = chai.assert;    // Using Assert style
const rootURL = 'https://sprinkle-burn.glitch.me/'
const d = new Builder().forBrowser('chrome').build()
const waitUntilTime = 30000
let driver
var email = ''
var password = ''


given("the user has the correct credentials", () => {
  var email = 'test@drugdev.com'
  var password = 'supers3cret'
});

given("the user has the incorrect credentials", () => {
  var email = 'test@drugdev.com'
  var password = 'supers4cret'
});

when("the user enters username", () => {
  driver.get(rootURL)
  var userName= driver.wait(until.elementLocated(By.name('email')), waitUntilTime)
  userName.sendKeys(email)
});

then("the user enters password", () => {
  driver.get(rootURL)
  var password= driver.wait(until.elementLocated(By.name('password')), waitUntilTime)
  userName.sendKeys(password)
});

then("clicks Login", () => {
  var Login= driver.wait(until.elementLocated(By.xpath('//button[contains(text()," Login")]')), waitUntilTime)
  Login.click()
});

then("the user is presented with a welcome message", () => {
  var Msg= driver.wait(until.elementLocated(By.xpath('//article[contains(text()," Welcome Dr I Test")]')), waitUntilTime)
  assert.isTrue(Msg.isDisplayed(), 'Welcome Message displayed')
  
});


then("the user is presented with a error message", () => {
  var Msg= driver.wait(until.elementLocated(By.id('login-error-box')), waitUntilTime)
  assert.equal(Msg.getText(),'Credentials are incorrect')
  
});
