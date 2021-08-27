class MainPage {
    get messageLabel() { return $("~messageTextView") }

    async readMessage(){
        const message = await this.messageLabel
        await expect(message).toBeExisting()
    }
}

module.exports = new MainPage()