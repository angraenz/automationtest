

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreateAccount extends Page {
    get form() {
        return $('form#account-creation_form');
    }

    get email() {
        return $('input#email');
    }

    get firstName() {
        return $('input#customer_firstname');
    }

    get lastName() {
        return $('input#customer_lastname');
    }

    get password() {
        return $('input#passwd')
    }

    get address() {
        return $('input#address1');
    }

    get city() {
        return $('input#city');
    }

    get state() {
        return $('select#id_state');
    }

    get postcode() {
        return $('input#postcode');
    }

    get country() {
        return $('select#id_country');
    }
    
    get phoneMobile() {
        return $('input#phone_mobile');
    }

    get phone() {
        return $('input#phone');
    }

    get alias() {
        return $('input#alias');
    }

    get submitAccount() {
        return $('button#submitAccount');
    }

   get myAccount() {
       return $('.navigation_page');
   }

    
    async fillForm ({firstName, lastName, address, city, state, postcode, country, phone, alias, password} = {}) {
        await expect(this.form).toBeExisting();
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.password.setValue(password);
        await this.country.selectByAttribute("value", country);
        await this.address.setValue(address);
        await this.city.setValue(city);
        await this.state.selectByAttribute("value", state);
        await this.postcode.setValue(postcode);
        await this.phoneMobile.setValue(phone);
        await this.phone.setValue(phone);
        // await this.alias.clearvalue(alias);
        // await this.alias.setValue(alias);
        await this.submitAccount.click();
        await expect(this.myAccount).toHaveTextContaining('My account');
    }

}

export default new CreateAccount();
