import {Selector, t} from 'testcafe'

class LoginPage {
    constructor() {
        this.plistLogo = Selector('[alt=\'Plista Logo\']');
        this.languageToggle = Selector('.toggle-word__switch');
        this.userEmailInput = Selector('#login_input-email');
        this.userPasswordInput = Selector('#login_input-password');
        this.loginButton = Selector('#login_button-login');
        this.resendVerificationLink = Selector('.resend_link');
        this.goToLoginPage = Selector('#confirm_button-login');
        this.forgotPasswordLink = Selector('#login_link-forgot-password');
        this.createAccountLink = Selector('#login_link-create-account');
        this.mailSentText = Selector('.hl-5');
    }

    async selectCountryName(countryName) {
        const selectCountryDropdown = Selector('#login_select-country');
        const countryOption = selectCountryDropdown.find('option');
        await t
            .click(selectCountryDropdown)
            .click(countryOption.withText(countryName))
    }

    async enterUserEmail(email) {
        await t
            .typeText(this.userEmailInput, email)
    }

    async enterUserPassword(password) {
        await t
            .typeText(this.userPasswordInput, password)
    }

    async clickOnLoginButton() {
        await t
            .click(this.loginButton);
    }

    async clickOnResendVerificationLink() {
        await t
            .click(this.resendVerificationLink);
    }

    async clickOnCreateAccountLink() {
        await t
            .click(this.createAccountLink);
    }

    async clickOnGoToLoginPageButton() {
        await t
            .click(this.goToLoginPage);
    }

    async clickOnSwitchLanguageToggle() {
        await t
            .click(this.languageToggle);
    }

}

export default new LoginPage();
