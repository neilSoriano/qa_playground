import { By, WebDriver, WebElement, until, } from "selenium-webdriver";
import { createImmediatelyInvokedFunctionExpression } from "typescript";

export class SpecPage {
    driver: WebDriver;
    url: string = "https://www.google.com/";
    searchBar: By = By.name('q');
    searchResults: By = By.id('res');

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    /**
     * Will navigate to https://www.google.com/
     * @example 
     * await page.navigate();
     */
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.searchBar));
        // wait for searchBar to be visible
        await this.driver.wait(
            until.elementIsVisible(await this.driver.findElement(this.searchBar))
        );
    }

    /**
     * Initiates search in search bar and types in search terms, hitting enter
     * @param {string} searchTerm - word(s) you want to search
     * @example
     * await page.doSearch("purple");
     */
    async doSearch(searchTerm: string) {
        await this.driver.findElement(this.searchBar).click();
        await this.driver.findElement(this.searchBar).sendKeys(`${searchTerm}\n`);
        await this.driver.wait(until.elementLocated(this.searchResults));
    }

    /**
     * Returns an array of strings containing; text appearing from search results
     * results[] will be returned in lowercase
     * @returns the text of the results in an array
     * @example
     * await page.getResults();
     */
    async getResults() {
        let results = [];
        await this.driver.wait(until.elementsLocated(this.searchResults));
        let elements = await this.driver.findElements(this.searchResults);
        for(let i = 0; i < elements.length; i++) {
            results.push(await (await elements[i].getText()).toLowerCase());
        }
        return results[0];
    }
}