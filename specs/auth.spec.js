import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function() {
    beforeEach(async function() {
        await LoginPage.open();
    });

    it('Successful log in', async function() {
        await expect(LoginPage.buttonSubmit)
            .toBeDisabled();
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await expect(ProfilePage.iconUser)
            .toBeDisplayed();
    });

    it('the set password is invalid ', async function() {
        await LoginPage.login('ipisaryev@gmail.com', 'invalid');
        await expect(LoginPage.notification).toHaveTextContaining('Incorrect password')
    });

    it('User entered an unregistered email address or password ', async function () {
        await LoginPage.login('example@gmail.com', 'example');
        await expect(LoginPage.notification).toHaveTextContaining('Email is not registered');
     });

     it('value format check ', async function () {
         await LoginPage.inputUsername.setValue('invalid');
         await expect(LoginPage.emailMessage).toHaveTextContaining('\'email\' is not a valid email');
     });

    it('Credentials are required', async function() {
        await LoginPage.inputUsername.setValue('invalid@example.com');
        await LoginPage.inputUsername.smartClear();
        await expect(LoginPage.emailValidation).toHaveTextContaining('Required');
        await LoginPage.inputPassword.setValue('invalid');
        await LoginPage.inputPassword.smartClear();
        await expect(LoginPage.passwordValidation).toHaveTextContaining('Required');
    });
});