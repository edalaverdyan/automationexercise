import{contactUsConst} from "../../Locators/contact Us Locators";
import {contactUsLocators} from "../../Locators/contact Us Locators";

class ContactUsPage {
    navigate() {
        cy.get(contactUsConst.navigateToContactUs).click()
    }


    submit() {
        cy.get(contactUsLocators.nameField).click().type('Edgar')
        cy.get(contactUsLocators.emailField).click().type('test@tt.com')
        cy.get(contactUsLocators.submitButton).click()
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
    }
}



export default ContactUsPage;