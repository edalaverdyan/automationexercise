import LoginPage from "../Pages/login Page";


describe('Logging in with valid credentials',()=> {
    it('Logging in', () => {

        const loginPage = new LoginPage();

        loginPage.open()
        loginPage.login()

    })
})