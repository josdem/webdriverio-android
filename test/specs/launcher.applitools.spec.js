const properties = require("../properties/test.properties")

describe("Should validate launcher", () => {
  it("validate message changing screen", async () => {
    const wd = require("selenium-webdriver"),
      desiredCaps = {
        browserName: "",
        deviceName: "Pixel_6_33",
        platformVersion: "13",
        platformName: "Android",
        app: "https://github.com/josdem/android-launcher/releases/download/v1.1/app-debug.apk",
      }
    driver = new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCaps).build()
    const Eyes = require("eyes.selenium").Eyes
    const eyes = new Eyes()
    eyes.setApiKey("APPLITOOLS_API_KEY")
    eyes.open(driver, "Launcher", "Validate launch screen")
    eyes.checkWindow("Launch screen")
    eyes.close()
    driver.quit()
    eyes.abortIfNotClosed()
  })
})
