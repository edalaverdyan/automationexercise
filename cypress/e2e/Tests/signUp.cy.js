import SignUpLoginPage from "../Pages/sign Up Login Page";

describe('Registering new user',()=>{
    it('Signing up to the website', ()=> {
        const signUpPage = new SignUpLoginPage();
        signUpPage.open()
        signUpPage.signUp()
        //Assert successful sigUp

    })
})