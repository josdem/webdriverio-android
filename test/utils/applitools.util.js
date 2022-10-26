const { Eyes, Target, Configuration, BatchInfo, ClassicRunner } = require("@applitools/eyes-webdriverio")

let eyes
let runner
let configuration

const setUpConfiguration = async (batchName) => {
  runner = new ClassicRunner()
  eyes = new Eyes(runner)

  configuration = eyes.getConfiguration()
  configuration.setBatch(new BatchInfo(batchName))
  eyes.setApiKey(process.env.APPLITOOLS_API_KEY)
}

const setUpTest = async (appName, testName) => {
  configuration.setAppName(appName)
  configuration.setTestName(testName)
  eyes.setConfiguration(configuration)
  await eyes.open(browser)
}

const checkWindow = async (name) => {
  await eyes.checkWindow(name)
}

const cleaning = async () => {
  await eyes.closeAsync()
  const results = await runner.getAllTestResults(false)
  console.log(results)
}

module.exports = {
  setUpTest,
  cleaning,
  checkWindow,
  setUpConfiguration,
}
