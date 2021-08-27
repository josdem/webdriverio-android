const assert = require('assert')
const properties = require('../properties/test.properties')
const MainPage = require('../pageobjects/main.page')

describe('Should validate launcher', () => {

    it('validate message changing screen', async() => {
        await MainPage.readMessage()
        const response = await MainPage.changeMessage()
        assert.deepEqual(response, properties.message)
    })
})