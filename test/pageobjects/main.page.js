class MainPage {
    get messageLabel() { return $("~messageTextView") }
    get changeButton() { return $("~changeButton") }

    async readMessage(){
        const message = await this.messageLabel
        await expect(message).toBeExisting()
    }

    async changeMessage() {
        const button = await this.changeButton
        expect(button).toBeExisting()
        await button.click()

    }
}

module.exports = new MainPage()