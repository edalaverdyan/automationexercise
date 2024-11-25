import {loginLocators} from "../../Locators/login Locators";
import{constants} from "../../Locators/login Locators";


class LoginPage {
    open() {
        cy.visit(constants.url)
    }

    login(){
        cy.get(loginLocators.loginEmailField).click().type('test@tt.com')
        cy.get(loginLocators.loginPasswordField).click().type('1234')
        cy.get(loginLocators.loginButton).click()
        cy.contains('Logged in as test').should('be.visible')
    }
}



export default LoginPage;
