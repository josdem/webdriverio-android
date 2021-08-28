Webdriver.io Android
----------------------------

This project shows how to test [Android](https://www.android.com/) applications using [Webdriver.io](https://webdriver.io/) and [Mocha Framework](https://mochajs.org/)

#### Requirements

* [NodeJS](https://nodejs.org/en/) version: `16.2.0`
* [Appium Server](https://appium.io/) version: `1.21.0`

**Note:** I recommed to use [NVM](https://github.com/nvm-sh/nvm) to manage NodeJS versions

#### To build the project

```bash
npm install
```

#### To run the project

```bash
npx wdio run wdio.conf.js
```

And run Appium server:

```bash
appium
```

#### Read this as reference

https://webdriver.io/docs/gettingstarted


**Note:** This project uses [Android Launcher](https://github.com/josdem/android-launcher) as a target Android product