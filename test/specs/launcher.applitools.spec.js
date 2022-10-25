const properties = require("../properties/test.properties")
const MainPage = require("../pageobjects/main.page")
const Eyes = require("eyes.selenium").Eyes
const eyes = new Eyes()

describe("Should validate launcher", () => {

  before("Setting up capabilities", async () => {
    console.log("capabilities: " + JSON.stringify(driver.capabilities))
    const wd = require("selenium-webdriver"),
      desiredCaps = {
        browserName: "",
        deviceName: "Pixel_6_API_33",
        platformVersion: "13",
        platformName: "Android",
        app: "https://github.com/josdem/android-launcher/releases/download/v1.1/app-debug.apk",
      }
    driver = new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCaps).build()
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY)
    await eyes.open(driver, "Launcher", "Validate launch screen")
  })

  it("validate message changing screen", async () => {
    await eyes.checkWindow("Launch screen")
  })

  after("Cleaning up", async () => {
    await eyes.close()
    await driver.quit()
    await eyes.abortIfNotClosed()
  })
})
