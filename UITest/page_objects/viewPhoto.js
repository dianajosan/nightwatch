const viewPhoto={

    clickPhoto(){
        return this
            .waitForElementVisible('@firstPhoto')
            .click('@firstPhoto')
            //.assert.titleContains('above-cloud photo of blue skies photo - Free Sky Image on Unsplash');
            .waitForElementVisible('@viewTab') 
            .waitForElementVisible('@downloadsTab') 
            .waitForElementVisible('@featuredInTab')
            
            .waitForElementVisible('@photoViews') 
            .waitForElementVisible('@photoDownloads') 
            .waitForElementVisible('@photoFeaturedIn');

    }
};

module.exports={
    commands: [viewPhoto],
    elements: {
        firstPhoto: {
            selector: '//*[@id="app"]/div/div[2]/div[3]/div[1]/div/div/div/div[1]/figure[1]/div/div/a/div', 
            locateStrategy: 'xpath',
        },
        viewTab: {
            selector: '/html/body/div[4]/div/div/div[4]/div/div/div[1]/div[4]/div[1]/div[1]', 
            locateStrategy: 'xpath',
        },
        downloadsTab: {
            selector: '/html/body/div[4]/div/div/div[4]/div/div/div[1]/div[4]/div[1]/div[2]', 
            locateStrategy: 'xpath',
        },
        featuredInTab: {
            selector: '/html/body/div[4]/div/div/div[4]/div/div/div[1]/div[4]/div[2]/div', 
            locateStrategy: 'xpath',
        },
        photoViews: {
            selector: '/html/body/div[4]/div/div/div[4]/div/div/div[1]/div[4]/div[1]/div[1]/span', 
            locateStrategy: 'xpath',
        },
        photoDownloads: {
            selector: '/html/body/div[4]/div/div/div[4]/div/div/div[1]/div[4]/div[1]/div[2]/span', 
            locateStrategy: 'xpath',
        },
        photoFeaturedIn: {
            selector: '/html/body/div[4]/div/div/div[4]/div/div/div[1]/div[4]/div[2]/div/span', 
            locateStrategy: 'xpath',
        }
    }
};

