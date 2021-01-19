const { Builder, By, Key, until, Browser } = require('selenium-webdriver');
require('selenium-webdriver/chrome');

const { getElementName, getElementId, getElementSelector, getElementXpath } = require('./helpers');

const rootURL = 'http://hoesql836eol:88/#!/ReviewerReport'
let driver;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build()
})
// The next line closes the Browser. Post condition, after execute ALL test cases, which are each "it" below.
// afterAll(async () => driver.quit());

it('Open browser and go to TAIG URL [Acc.]', async () => {
  await driver.get(rootURL);
})

it('Should click on  button to display the date.', async () => {
  try{
    const reviewButton = await getElementName(driver, 'btnReviewSRR');
    reviewButton.click();
  } catch (error) {}
  

  const dateReview = await getElementName(driver, 'lastReviewDateValue');
  dateReview.getText().then(function (lastReviewDate){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    today = mm+'/'+dd+'/'+yyyy;
    lastReviewDate = lastReviewDate.split(" ");
    lastReviewDate = lastReviewDate[lastReviewDate.length -1];
    let outpuFlag = false;
    if (lastReviewDate.localeCompare(today) == 0){
      // console.log("Son iguales");
      outpuFlag = true;
    }

  expect(outpuFlag);
  })
})