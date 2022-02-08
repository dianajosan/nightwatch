const join={

    // Acces the "Create new account" page / Join Page
    createAccount(){
        return this
            .waitForElementVisible('@joinButton')
            .click('@joinButton')
            .assert.titleContains('Join Unsplash | Unsplash');

    },
    // create new account
    joinPage(firstName, secondName, emailAdress, username, password) {
        return this
            //.waitForElementVisible('@inputUsername')
            .setValue('@firstNameInput', firstName)
            .setValue('@secondNameInput', secondName)
            .setValue('@emailAdressInput', emailAdress)
            .setValue('@usernameInput', username)
            .setValue('@passwordInput', password)
            .waitForElementVisible('@createButton')
            .click('@createButton');
    }
};

module.exports={
    commands: [join],
    elements: {
        joinButton: {
            selector: '/html/body/div[2]/div/div/div/div/div[4]/a', 
            locateStrategy: 'xpath',
        },
        firstNameInput: {
            selector: '//*[@id="user_first_name"]', 
            locateStrategy: 'xpath',
        },
        secondNameInput: {
            selector: '//*[@id="user_last_name"]', 
            locateStrategy: 'xpath',
        },
        emailAdressInput: {
            selector: '//*[@id="user_email"]', 
            locateStrategy: 'xpath',
        },
        usernameInput: {
            selector: '//*[@id="user_username"]', 
            locateStrategy: 'xpath',
        },
        passwordInput: {
            selector: '//*[@id="user_password"]', 
            locateStrategy: 'xpath',
        },
        createButton: {
            selector: "//*[@class='form-group']/a[text()='Join']",
            locateStrategy: 'xpath',
        }
    }
};