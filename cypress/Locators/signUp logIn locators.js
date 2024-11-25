const signUpLogInLocators ={

    signUpField: 'input[data-qa="signup-name"]',
    emailField: 'input[data-qa="signup-email"][name="email"]',
    signUpButton: 'button[data-qa="signup-button"]',
    genderBox: '#id_gender1',
    passwordField: '#password',
    firstNameField: '#first_name',
    lastNameField: '#last_name',
    addressField: '#address1',
    countryCheckBox: '#country',
    stateField: '#state',
    cityField: '#city',
    zipCodeField: '#zipcode',
    mobileNumberField: '#mobile_number',
    createAccountButton: 'button[data-qa="create-account"]'


}

const constants ={
    url: 'https://automationexercise.com/login'
}

export {signUpLogInLocators, constants}