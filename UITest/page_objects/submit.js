const submit={

    submitAPhoto(){
        return this
            //.assert.titleContains('3D Renders | Unsplash')
            //.click('@submitButton')
    }

};

module.exports ={
    commands: [submit],
    elements: {
        submitButton: {
            selector: '//*[@id="app"]/div/header/nav/button',
            locateStrategy: 'xpath',
        }

    }
}