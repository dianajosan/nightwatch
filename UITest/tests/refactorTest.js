module.exports={
    '01. Launch the page ': function (client) {
        client
            .url('https://unsplash.com/')
        client.page.launch()
            .verifyPageElements();
    },
    '02. Open the 3D Redners Section ': function (client) {
        client.page.renders()
            .click3DRedndersButton();
    },
    '03. Submit  a photo  ': function (client) {
        client.page.submit()
            .submitAPhoto();
    },

    '04. Login  ': function (client) {
        client.page.login()
            .clickLoginButton()
            .checkTitleLoginPage()
            .login(client.globals.emailAdress, client.globals.password)

    },
    '05. Create new account  ': function (client) {
        client.page.join()
        //     .createAccount()
        //     .joinPage(client.globals.firstNameInput, client.globals.secondNameInput, client.globals.emailAdressInput, client.globals.usernameInput, client.globals.passwordInput)
        // client.end();
    },
    '06. Search an item from searchbar  ': function (client) {
        client.page.search()
            .findSearchBar(client.globals.serachedItem)
            .findItem();
            //client.end();
    },
    '07. Open the first photo recommended for the searched item  ': function (client) {
        client.page.viewPhoto()
            .clickPhoto();
    }
};