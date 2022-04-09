

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

    get myAccount() {
        return $('.navigation_page');
    }
    
    async login ({email, password} = {}) {
        await expect(this.form).toBeExisting();
        await this.registerEmail.setValue(email);
        await this.registerPassword.setValue(password);
        await this.buttonLogin.click();
    }

    async success () {
        await expect(this.myAccount).toHaveTextContaining('My account');
    }

    open () {
        return super.open('index.php?controller=authentication');
    }

}

export default new LoginPage();
