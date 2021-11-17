describe('Auth', function() {
    it('Successful log in', async function() {
        await browser.url('/user/login');
        await expect($('.login-form-button'))
            .toBeDisabled();
        await $('[qa-id="email"]')
            .setValue('ipisaryev@gmail.com');
        await $('[qa-id="password"]')
            .setValue('31101967Serg');
        await expect($('.login-form-button'))
            .toBeEnabled();
        await $('.login-form-button')
            .click();
        await expect($('img[alt="avatarIcon"]'))
            .toBeDisplayed();
    });
});