import Page from './page';

class LoginPage extends Page {
    get inputUsername() { return $('[qa-id="email"]') }
    get inputPassword() { return $('[qa-id="password"]') }
    get buttonSubmit() { return $('.login-form-button') }
    get notification() { return $('.ant-notification-notice-closable')}
    get emailMessage() { return $('//div[contains(text(),"\'email\' is not a valid email")]')}
    get passwordValidation() { return $('//form[@id=\'normal_login\']/div[2]/div[@class=\'ant-col ant-form-item-control\']')}
    get emailValidation() { return $('//form[@id=\'normal_login\']/div[1]//div[@role=\'alert\']')}

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await expect(this.buttonSubmit).toBeEnabled();
        await this.buttonSubmit.click();
    }

    open() {
        return super.open('/user/login');
    }
}

export default new LoginPage();
