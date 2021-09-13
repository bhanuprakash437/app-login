import ForgotPasswordPage from "../pageobjects/ForgotPasswordPage";
import {ClientFunction} from "testcafe";

const forgotPasswordUrl = `https://login-test.plista.com/de/forgot`
const getCurrentUrl = ClientFunction(() => window.location.href);

fixture('Forgot Password Test').page(forgotPasswordUrl);

test('Verify reset password flow', async t => {
    await t
        .expect(getCurrentUrl()).contains(forgotPasswordUrl)
        .expect(ForgotPasswordPage.plistaLogo.exists).ok()
        .expect(ForgotPasswordPage.resetPasswordTitle.innerText)
        .eql('Reset Your Password', 'Reset Password Page is not loaded');
    await ForgotPasswordPage.enterUserEmail('testuser@gmail.com');
    await ForgotPasswordPage.clickOnResetPasswordButton();
});

test('Verify go to login page link', async t => {
    await ForgotPasswordPage.returnToLoginPage();
});
