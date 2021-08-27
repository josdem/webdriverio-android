const MainPage = require('../pageobjects/main.page')

describe('Should validate launcher', () => {

    it('validate message changing screen', async() => {
        await MainPage.readMessage()
        const response = await MainPage.changeMessage()
        console.log("response: ", response)
    })
})