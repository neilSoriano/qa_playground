import { Builder, Capabilities, By, until } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// Note that this is not an async function
test('Promise Chaining', () => {
    return driver.get('https://www.google.com/')
        .then(() => {
            // Now our test is returning a promise that will resolve to return another promise
            // Jest will wait until the whole chain has resolved
            return driver.wait(until.elementLocated(By.name('q')))
        })
        .then(() => {
            // Each callback is returning a promise
            // Which we call '.then()' to use that promise after it has resolved
            return driver.findElement(By.name('q')).sendKeys('Puppies\n')
        })
        .then(() => {
            // This will wait until the results element has been located
            return driver.wait(until.elementLocated(By.id('res')))
        })
        .then(() => {
            // This promise will resolve into a string of a certain element's text
            return driver.findElement(By.id('res')).getText()
        })
        // If we want to use that text, we need it passed as a parameter for the next '.then()' callback
        .then((text) => {
            // This is actually the technical way to handle a promise
            expect(text.toLowerCase()).toContain('puppies')
            // After our final '.then()' jest will wait for this whole chain to resolve
            return driver.quit()
        })
        .catch((e) => {
            // A catch callback is passed an error message if one occurs, so let's log it in the console
            console.log(e)
            // We also don't want our test to pass just because it skipped an assertion
            expect(false).toBeTruthy()
            // Lastly we still want our browser to close if there is an error
            return driver.quit()
        })
})