const MainPage = require('../pageobjects/main.page')

describe('Should validate launcher content', () => {

    it('validate launcher screen', async() => {
        await MainPage.readMessage()
    })
})