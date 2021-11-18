import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function() {
    it('Successful log in', async function() {
        await LoginPage.open();
        await expect(LoginPage.buttonSubmit)
            .toBeDisabled();
        await LoginPage.login('ipisaryev@gmail.com', '31101967Serg');
        await expect(ProfilePage.iconUser)
            .toBeDisplayed();
    });
});