
import {searchProductConst, searchProductLocators} from "../../Locators/search Product Locators";

class SearchProductPage {
    navigate() {
        cy.get(searchProductConst.navigateToProductPage).click();
    }


    search() {
        cy.get(searchProductLocators.searchField).click().type('Men Tshirt')
        cy.get(searchProductLocators.searchIcon).click()
        cy.contains('Rs. 400').should('be.visible')
        cy.contains('Add to cart').should('be.visible')
    }
}



export default SearchProductPage;
