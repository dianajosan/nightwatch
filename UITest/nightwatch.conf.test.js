const BINPATH = './node_modules/nightwatch/bin/';

module.exports = {
    "src_folders": [
        "tests"// Where you are storing your Nightwatch tests
    ],
    "page_objects_path": [
        "./page_objects"
    ],
    //"custom_commands_path": "./commands",
    "selenium": {
        "start_process": true, // if Nightwatch start/stop the selenium process
        "server_path": "./drivers/server/selenium-server-standalone-3.9.1.jar",
        "host": "127.0.0.1",
        "port": 4444, // standard selenium port
        "cli_args": {
            //"webdriver.chrome.driver": "./node_modules/nightwatch/bin/chromedriver",
            'webdriver.gecko.driver': "./drivers/geckodriver-v0.22.0-macos/geckodriver_2",
        }
    },

    "test_settings": {
        "default": {
            "globals": {
                "waitForConditionTimeout": 5000, // sometimes internet is slow so wait.
                "emailAdress": 'diana.josan06@yahoo.com',
                "password": 'diana123456',
                "firstNameInput": 'Diana',
                "secondNameInput": "Josan",
                "emailAdressInput": "diana.josan06@yahoo.com",
                "usernameInput": "dianajosan",
                "passwordInput": "diana123456",
                "serachedItem": "sky"
            },
            "desiredCapabilities": {
                "browserName": "firefox",
                "javascriptEnabled": true,
                "marionette": true,
            },
        }, 
    }
};
