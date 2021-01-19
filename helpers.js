const { By, until } = require('selenium-webdriver');

const waitUntilTime = 5000;

async function getElementSelector(selector, driver) {
    const el = await driver.wait(
        until.elementLocated(By.css(selector)), waitUntilTime
    );
    return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}

async function getElementXpath (driver, xpath) {
    const el = await driver.wait(
        until.elementLocated(By.xpath(xpath)), waitUntilTime
    );
    return await driver.wait(until.elementIsVisible(el), waitUntilTime);
};


async function getElementName(driver, name) {
    const el = await driver.wait(until.elementLocated(By.name(name)), waitUntilTime);
    return await driver.wait(until.elementIsVisible(el), waitUntilTime);
};

async function getElementId (driver, id) {
    const el = await driver.wait(until.elementLocated(By.id(id)), waitUntilTime);
    return await driver.wait(until.elementIsVisible(el), waitUntilTime);
};

module.exports = {
    getElementSelector,
    getElementXpath,
    getElementName,
    getElementId
}