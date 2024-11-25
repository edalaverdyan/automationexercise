import ContactUsPage from "../Pages/contact Us";
import LoginPage from "../Pages/login Page";

describe('Filling in Contact us form',()=> {
    it('Should successfully fill the contact us form', () => {


        const loginPage = new LoginPage();
        const contactUs = new ContactUsPage();

        loginPage.open()
        loginPage.login()
        contactUs.navigate()
        contactUs.submit()

    })
})