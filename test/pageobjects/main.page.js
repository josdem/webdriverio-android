class MainPage {
    get messageLabel() { return $("~message") }

    async readMessage(){
        const message = await this.messageLabel
        await expect(message).toBeExisting()
    }
}