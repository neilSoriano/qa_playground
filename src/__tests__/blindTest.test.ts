const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
import { PracticePage } from "../PracticePage";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new PracticePage(driver);

test("can use the searchbox to look for stories", async () => {
    page.navigate();
    page.searchStories("olympics");
    let titles = await page.getStoryTitles();
    expect(titles[0]).toContain("olympics");
}) 

