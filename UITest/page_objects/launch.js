const commandsforpage={

    // Open the page and verify its elements
    verifyPageElements(){
        return this
            .waitForElementVisible('@logo')
            .assert.titleContains('Beautiful Free Images & Pictures | Unsplash')

            // search bar
            .waitForElementVisible('@searchBar')

            // sumbit a photo button
            .waitForElementVisible('@submitButton',1000)
            .assert.visible('@submitButton')
    }
};
module.exports = {
    commands: [commandsforpage],
    elements: {
        logo: {
            selector: '//*[@id="app"]/div/div[3]/div[1]/div/div[2]/div[1]/div/span',
            locateStrategy: 'xpath',
        },
        searchBar: {
            selector: '//*[@id="app"]/div/header/nav/div[2]/form/div[1]',
            locateStrategy: 'xpath',
        },
        submitButton: {
            selector: '//*[@id="app"]/div/header/nav/button',
            locateStrategy: 'xpath',
        }
    }

};
