const MainPage = require("../pageobjects/main.page")
const constants = require("../utils/constants.util")
const applitools = require("../utils/applitools.util")

const testName = "Should validate launcher"
const batchName = "Appium WDIO"

describe(testName, () => {
  before("Setting up capabilities", async () => {
    await applitools.setUpConfiguration(batchName)
    await applitools.setUpTest(constants.appName, testName)
  })

  it("validate message changing screen", async () => {
    await MainPage.changeMessage()
    await applitools.checkWindow("Launch screen")
  })

  after("Cleaning up", async () => {
    await applitools.cleaning()
  })
})
