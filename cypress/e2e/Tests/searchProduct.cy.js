
import SearchProductPage from "../Pages/search Product";
import LoginPage from "../Pages/login Page";

describe('Searching for product',()=> {
    it('Should successfully search a product', () => {


        const loginPage = new LoginPage();
        const searchProduct = new SearchProductPage();

        loginPage.open()
        loginPage.login()
        searchProduct.navigate()
        searchProduct.search()


    })
})