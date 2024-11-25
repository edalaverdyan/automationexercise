import {signUpLogInLocators} from "../../Locators/signUp logIn locators";
import {constants} from "../../Locators/signUp logIn locators";

class SignUpLoginPage {

    open() {
        cy.visit(constants.url)
    }

    signUp(){
        cy.get(signUpLogInLocators.signUpField).click().type('test')
        cy.get(signUpLogInLocators.emailField).click().type('test@tq.com')
        cy.get(signUpLogInLocators.signUpButton).click()
        cy.get(signUpLogInLocators.genderBox).click()
        cy.get(signUpLogInLocators.passwordField).click().type('1234')
        cy.get(signUpLogInLocators.firstNameField).click().type('Ed')
        cy.get(signUpLogInLocators.lastNameField).click().type('Alaverdyan')
        cy.get(signUpLogInLocators.addressField).click().type('street')
        cy.get(signUpLogInLocators.countryCheckBox).select('Canada')
        cy.get(signUpLogInLocators.stateField).click().type('st')
        cy.get(signUpLogInLocators.cityField).click().type('city')
        cy.get(signUpLogInLocators.zipCodeField).click().type('0034')
        cy.get(signUpLogInLocators.mobileNumberField).click().type('1234')
        cy.get(signUpLogInLocators.createAccountButton).click()
        cy.get('b').contains('Account Created!')
    }

}

export default SignUpLoginPage
