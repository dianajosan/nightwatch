const search={

    // Acces the searchbar 
    findSearchBar(item){
        return this
            .waitForElementVisible('@searchBar')
            .click('@searchBar')
            .setValue('@searchBar', item);

    },
    // Serach the item you want to see iamges with and acces the page with the recommened photos 
    findItem(){
        return this
            .waitForElementVisible('@searchButton')
            .click('@searchButton')
            .assert.titleContains('1500+ Sky Pictures | Download Free Images on Unsplash');
    }
};

module.exports={
    commands: [search],
    elements: {
        searchBar: {
            selector: '//*[@id="app"]/div/header/nav/div[2]/form/div[1]/input', 
            locateStrategy: 'xpath',
        },
        searchButton: {
            selector: '//*[@id="app"]/div/header/nav/div[2]/form/button[1]', 
            locateStrategy: 'xpath',
        }

    }
};