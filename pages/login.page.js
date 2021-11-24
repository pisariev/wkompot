import Page from './page';

class LoginPage extends Page {
    get inputUsername() { return $('[qa-id="email"]') }
    get inputPassword() { return $('[qa-id="password"]') }
    get buttonSubmit() { return $('.login-form-button') }
    get notification() { return $('.ant-notification-notice-closable')}
    get emailMessage() { return $('//div[contains(text(),"\'email\' is not a valid email")]')}
    get passwordValidation() { return $('//div[contains(text(),\'Required\')]')}
    get emailValidation() { return $('//form[1]/div[1]/div[1]/div[2]/div[1]')}


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
