const MainPage = require('../pageobjects/main.page')

describe('Should validate launcher', () => {

    it('validate message changing screen', async() => {
        await MainPage.readMessage()
        await MainPage.changeMessage()
    })
})