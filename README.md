## Webdriver.io Android

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This project shows how to test [Android](https://www.android.com/) applications using [Webdriver.io](https://webdriver.io/) and [Mocha Framework](https://mochajs.org/)

#### Requirements

- [NodeJS](https://nodejs.org/en/) version: `20.10.0`
- [Appium Server](https://appium.io/) version: `2.2.2`

**Note:** I recommed to use [NVM](https://github.com/nvm-sh/nvm) to manage NodeJS versions

#### To format the project

```bash
npx prettier --write .
```

#### To build the project

```bash
npm install
```

#### To run the project locally

Run Appium server:

```bash
appium
```

And

```bash
npx wdio run test/configs/wdio.local.conf.js --spec=test/specs/launcher.spec.js
```

#### To run the project in [Applitools](https://applitools.com/)

```bash
export APPLITOOLS_API_KEY=${apiKey}
```

where:

- `${apiKey}` Is your Applitools api key

```bash
npx wdio run test/configs/wdio.applitools.conf.js --spec=test/specs/launcher.applitools.spec.js
```

#### To run the project in [SauceLabs](https://saucelabs.com/)

```bash
export SAUCE_USERNAME=${YOUR_SAUCE_USERNAME}
export SAUCE_ACCESS_KEY=${YOUR_SAUCE_KEY}
export SAUCE_URL=${YOUR_SAUCE_URL}
```

```bash
npx wdio run test/configs/wdio.sauce.conf.js
```

#### Read this as reference

https://webdriver.io/docs/gettingstarted

**Note:** This project uses [Android Launcher](https://github.com/josdem/android-launcher) as a target Android product
