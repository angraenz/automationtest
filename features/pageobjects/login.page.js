

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get form() {
        return $('form#login_form');
    }

    get registerEmail() {
        return $('input#email');

    }

    get registerPassword() {
        return $('input#passwd')
    }

    get buttonLogin() {
        return $('button#SubmitLogin')
    }
    
    async login ({email, password} = {}) {
        await expect(this.form).toBeExisting();
        await this.registerEmail.setValue(email);
        await this.registerPassword.setValue(password);
        await this.submitAccount.click();
    }

    open () {
        return super.open('index.php?controller=authentication');
    }

}

export default new LoginPage();
