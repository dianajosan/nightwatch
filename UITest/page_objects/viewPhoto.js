const locators = require("../globals").locators.image;

const viewPhoto={

    clickPhoto(){
        return this
            .waitForElementVisible('@firstPhoto')
            .click('@firstPhoto')
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
            selector: locators.firstPhoto,
            locateStrategy: 'xpath',
        },
        viewTab: {
            selector: locators.characteristic + locators.viewTab,
            locateStrategy: 'xpath',
        },
        downloadsTab: {
            selector: locators.characteristic + locators.downloadsTab,
            locateStrategy: 'xpath',
        },
        featuredInTab: {
            selector: locators.characteristic + locators.featuredInTab,
            locateStrategy: 'xpath',
        },
        photoViews: {
            selector: locators.characteristic + locators.photoViews,
            locateStrategy: 'xpath',
        },
        photoDownloads: {
            selector: locators.characteristic + locators.photoDownloads,
            locateStrategy: 'xpath',
        },
        photoFeaturedIn: {
            selector: locators.characteristic + locators.photoFeaturedIn,
            locateStrategy: 'xpath',
        }
    }
};

