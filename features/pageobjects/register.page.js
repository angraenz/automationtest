

import Page from './page';
import { faker } from '@faker-js/faker';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#email_create');
    }
   

    get btnSubmit () {
        return $('button#SubmitCreate');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to register using username 
     */
    async register () {
        await this.inputUsername.setValue(faker.internet.email());
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('index.php?controller=authentication');
    }
}

export default new RegisterPage();
