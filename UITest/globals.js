module.exports = {
    locators: {
        image: {       // common locators for image characteristics
            firstPhoto: '//*[@id="app"]/div/div[2]/div[3]/div[1]/div/div/div/div[1]/figure[1]/div/div/a/div',
            characteristic: '//*/div[4]/div/div/div[4]/div/div/div[1]/div[4]',
            viewTab: '/div[1]/div[1]',
            downloadsTab: '/div[1]/div[2]',
            featuredInTab: '/div[2]/div',
            photoViews: '/div[1]/div[1]/span',
            photoDownloads: '/div[1]/div[2]/span',
            photoFeaturedIn: '/div[2]/div/span'
        }
    },
};

