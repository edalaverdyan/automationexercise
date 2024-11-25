
import LoginPage from "../Pages/login Page";
import SearchProductPage from "../Pages/search Product";
import AddToCartPage from "../Pages/add to Cart";

describe('Adding to cart',()=> {
    it('Add product to cart', () => {


        const loginPage = new LoginPage();
        const searchProduct = new SearchProductPage();
        const addToCartPage = new AddToCartPage();

        loginPage.open()
        loginPage.login()
        searchProduct.navigate()
        addToCartPage.addingToCart()


    })
})