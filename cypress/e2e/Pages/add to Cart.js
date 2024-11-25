
import {addToCartLocators} from "../../Locators/add To Cart Locators";

class AddToCartPage {
    addingToCart() {
        cy.get(addToCartLocators.addToCartButton).first().click()
        cy.contains('Your product has been added to cart.').should('be.visible')
    }


}



export default AddToCartPage;
