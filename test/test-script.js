var assert = require('assert');
const { Builder, By, Capabilities, until } = require("selenium-webdriver");

var buildDriver = function() {
  return new Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities(Capabilities.chrome()).
    build();
};

describe('brincando de testar', async function() {
  this.timeout(0);
  var driver;

  before(function() {
    driver = buildDriver();
  });

  it('preparando pesquisa', async function () {
    await driver.get('https://www.segurospromo.com.br/');

    //selecionando destino
    await driver.wait(until.elementLocated(By.id('destinationSp')));
    await driver.findElement(By.id('destinationSp')).click();
    await driver.wait(until.elementLocated(By.xpath('//div[@data-val="Brasil"]')));
    await driver.findElement(By.xpath('//div[@data-val="Brasil"]')).click();

    //selecionando data
    await driver.wait(until.elementLocated(By.id('departureDateInput')));
    await driver.findElement(By.id('departureDateInput')).click();
    await driver.wait(until.elementLocated(By.className('dp-day dp-current dp-selected')));
    await driver.findElement(By.className('dp-day dp-current dp-selected')).click();
    

    //selecionando passageiro
    await driver.wait(until.elementLocated(By.id('nameSp')));
    await driver.findElement(By.id('nameSp')).sendKeys('alex teixeira');

    //selecionamento email
    await driver.wait(until.elementLocated(By.id('emailSp')));
    await driver.findElement(By.id('emailSp')).sendKeys('alex.teixeira@teste.com');

    //selecionando telefone
    await driver.wait(until.elementLocated(By.id('cellphoneSp')));
    await driver.findElement(By.id('cellphoneSp')).sendKeys('31996625563');

    //pesquisando...
    await driver.wait(until.elementLocated(By.id('searchTriggerInput')));
    await driver.findElement(By.id('searchTriggerInput')).click();

  //   // locating product on webpage and getting name of the product
  //   await driver.wait(until.elementLocated(By.xpath('//*[@id="1"]/p')));
  //   let productText = await driver.findElement(By.xpath('//*[@id="1"]/p')).getText();
  //   // clicking the 'Add to cart' button
  //   await driver.wait(until.elementLocated(By.xpath('//*[@id="1"]/div[4]')));
  //   await driver.findElement(By.xpath('//*[@id="1"]/div[4]')).click();
  //   // waiting until the Cart pane has been displayed on the webpage
  //   await driver.wait(until.elementLocated(By.className("float-cart__content")));
  //   await driver.findElement(By.className('float-cart__content'))
  //   // locating product in cart and getting name of the product in cart
  //   await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]')));
  //   let productCartText = await driver.findElement(By.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]')).getText();
  //   // checking whether product has been added to cart by comparing product name
  //   assert(productText === productCartText);
  });

  after(async function() {
    await driver.quit();
  });
});
