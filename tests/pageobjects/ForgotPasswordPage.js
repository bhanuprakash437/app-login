import {Selector, t} from 'testcafe'

class ForgotPasswordPage {
    constructor() {
        this.plistaLogo = Selector('[alt=\'Plista Logo\']');
        this.resetPasswordTitle = Selector('.hl-5');
        this.languageToggle = Selector('#forgot_toggle-language');
        this.resetEmailInput = Selector('#reset_input-email');
        this.resetPasswordButton = Selector('#reset_button-reset-password');
        this.returnToLoginPage = Selector('#reset_link-login');
    }

    async enterUserEmail(email) {
        await t
            .typeText(this.resetEmailInput, email)
    }

    async clickOnResetPasswordButton() {
        await t
            .click(this.resetPasswordButton);
    }

    async clickOnReturnToLoginPage() {
        await t
            .click(this.returnToLoginPage());
    }

}

export default new ForgotPasswordPage();
