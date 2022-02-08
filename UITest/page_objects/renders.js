const renders={

    // Check if the button for entering 3D renders section is visible and click it
    click3DRedndersButton(){
        return this
            .waitForElementVisible('@renderButton')
            .click('@renderButton');
    }
};

module.exports={
    commands: [renders],
    elements: {
        renderButton: {
            selector: "//*[@id='app']/div/div[2]/div/div/div[3]/div/div[2]/div[2]/ul/li[4]",
            locateStrategy: 'xpath',
        }
    }
};

