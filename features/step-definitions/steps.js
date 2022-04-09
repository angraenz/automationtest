import { Given, When, Then } from '@wdio/cucumber-framework';

import RegisterPage from '../pageobjects/register.page';
import CreateAccount from '../pageobjects/create.account';
import LoginPage from '../pageobjects/login.page';

const pages = {
    register: RegisterPage,
    login: LoginPage,
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I register$/, async () => {
    await RegisterPage.register()
});

When(/^I login$/, async () => {
    await LoginPage.login({email: 'ang@email.com', password: 12345});
});

Then(/^I should see form create account$/, async () => {
    await CreateAccount.fillForm({
        firstName: 'Billy',
        lastName: 'Kosa',
        password: 12345,
        address: 'batutulis',
        city: 'Jakarta',
        state: 11,
        postcode: 10120,
        country: 21,
        phone: '083829292929',
        alias: 'Home',
    });
    
    
});

