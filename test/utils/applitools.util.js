const { Eyes, RunnerOptions, BatchInfo, VisualGridRunner, AndroidDeviceInfo, AndroidDeviceName } = require("@applitools/eyes-webdriverio")

let eyes
let runner
let configuration

const setUpConfiguration = async (batchName) => {
  const runnerOptions = new RunnerOptions().testConcurrency(5)
  runner = new VisualGridRunner(runnerOptions)
  eyes = new Eyes(runner)

  configuration = eyes.getConfiguration()
  configuration.addMobileDevice(new AndroidDeviceInfo(AndroidDeviceName.Pixel_4))
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
