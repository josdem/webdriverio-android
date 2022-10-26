const properties = require("../properties/test.properties")
const MainPage = require("../pageobjects/main.page")
const { Eyes, Target, Configuration, BatchInfo, ClassicRunner } = require("@applitools/eyes-webdriverio")

let eyes
let runner
const appName = "WebdriverIO Applitools"
const testName = "Should validate launcher"

describe(testName, () => {
  before("Setting up capabilities", async () => {
    runner = new ClassicRunner()
    eyes = new Eyes(runner)

    let configuration = eyes.getConfiguration()
    configuration.setBatch(new BatchInfo("Appium WDIO"))
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY)
  })

  beforeEach(async function () {
    let configuration = eyes.getConfiguration()
    configuration.setAppName(appName)
    configuration.setTestName(testName)
    eyes.setConfiguration(configuration)

    await eyes.open(browser)
  })

  it("validate message changing screen", async () => {
    await MainPage.changeMessage()
    await eyes.checkWindow("Launch screen")
  })

  after("Cleaning up", async () => {
    await eyes.closeAsync()
    const results = await runner.getAllTestResults(false)
    console.log(results)
  })
})
