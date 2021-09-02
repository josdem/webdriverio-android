const {config} = require('../../wdio.conf')

config.baseUrl = "http://localhost"

config.capabilities = [
    {
        deviceName: "Pixel_5_30",
        platformVersion: "11",
        platformName: "Android",
        app: "/home/josdem/Applications/app-debug.apk",
    },
]

exports.config = config