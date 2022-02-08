const login={

    // click the login button to open the login page
    clickLoginButton(){
        return this
            .waitForElementVisible('@loginButton')
            .click('@loginButton');

    },

    // Check if the login page title
    checkTitleLoginPage(){
        return this
            .assert.titleContains('Login | Unsplash')
    },

    // Login
    login(username, password) {
        return this
            .waitForElementVisible('@inputUsername')
            .setValue('@inputUsername', username)
            .setValue('@inputPassword', password)
            .waitForElementVisible('@buttonLogin')
            .click('@buttonLogin');
    }
};

module.exports={
    commands: [login],
    elements: {
        loginButton: {
            selector: '//*[@id="app"]/div/header/nav/a[2]',
            locateStrategy: 'xpath',
        },
        inputUsername: {
            selector: '//*[@id="user_email"]',
            locateStrategy: 'xpath',
        },
        inputPassword: {
            selector: '//*[@id="user_password"]',
            locateStrategy: 'xpath',
        },
        buttonLogin: {
            selector: '/html/body/div[2]/div/div/div/div/form/div[3]/input',
            locateStrategy: 'xpath',
        }
    }
};