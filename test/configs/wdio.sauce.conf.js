const {config} = require('../../wdio.conf')

config.capabilities = [
    {
        deviceName: "Google Pixel 3 GoogleAPI Emulator",
        platformVersion: "10.0",
        platformName: "Android",
        app: "https://github.com/josdem/android-launcher/releases/download/v1.0/app-debug.apk",
    },
]

exports.config = config