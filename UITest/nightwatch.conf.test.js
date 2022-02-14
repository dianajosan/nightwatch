const BINPATH = './node_modules/nightwatch/bin/';

module.exports = {
    "src_folders": [
        "tests"// Where you are storing your Nightwatch tests
    ],
    //"output_folder": "./reports", // reports (test outcome) output by Nightwatch
    //"globals_path": "./globals.js",
    "page_objects_path": [
        "./page_objects",
        // "./page_objects/audio_downloads",
        // "./page_objects/program_audio_downloads",
        // "./page_objects/common/audio_downloads",
        // "./page_objects/npr_one/overview",
        // "./page_objects/common/npr_one",
        // "./page_objects/npr_one/stories_with_station",
        // "./page_objects/npr_one/station_newscast",
        // "./page_objects/npr_one/station_stories",
        // "./page_objects/npr_one/station_podcasts_all_episodes",
        // "./page_objects/npr_one/station_podcasts_single_title",
        // "./page_objects/common",
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

    // "test_settings": {
    //     "default": {
    //         "silent": true,
    //         "desiredCapabilities": { // use Chrome as the default browser for tests
    //             "browserName": "chrome",
    //             "javascriptEnabled": true
    //         },
    //         "globals": {
    //             "waitForConditionTimeout": 300000, // sometimes internet is slow so wait.
    //             "sasUser": 'test_user@sas.org',
    //             "sasPassword": 'npr123',
    //             "wwwURL": "https://analytics.nprstations.org/",
    //             "logsProject": "ondemandlogproject",
    //             "reportsProject": "reportsserviceproduction",
    //             "station": "WGBH Radio", // this is the station assigned to 'test_user@sas.org' user
    //             "regional_station": "KUHF-FM",
    //             "npr_id": "395", //this is the npr_family_id of the "WGBH" stations
    //             "program": "The Point on WCAI", // this is the program's name that will be tested
    //             "program_id": "479326459", // this is the The Point on WCAI 's program_id  that will be tested
    //         },
    //     },
    //     "stage_chrome_headless": {
    //         "globals": {
    //             "environment": "stage_chrome_headless",
    //             "wwwURL": "https://analytics-stage-web.publicbroadcasting.net/",
    //             "logsProject": "ondemandlogprojectstage",
    //             "reportsProject": "reportsservicestage1",
    //         },
    //         "desiredCapabilities": {
    //             "browserName": "chrome",
    //             "chromeOptions": {
    //                 "args": ["--headless", "--no-sandbox"]
    //             },
    //         },
    //     },
    //     "stage_chrome": {
    //         "globals": {
    //             "environment": "stage_chrome",
    //             "wwwURL": "https://analytics-stage-web.publicbroadcasting.net/",
    //             "logsProject": "ondemandlogprojectstage",
    //             "reportsProject": "reportsservicestage1",
    //         },
    //         "desiredCapabilities": {
    //             "browserName": "chrome",
    //             "javascriptEnabled": true,
    //         },
    //     },
    //     "prod_chrome_headless": {
    //         "globals": {
    //             "environment": "prod_chrome_headless",
    //             "wwwURL": "https://analytics.nprstations.org/",
    //         },
    //         "desiredCapabilities": {
    //             "browserName": "chrome",
    //             "javascriptEnabled": true,
    //             "chromeOptions": {
    //                 "args": ["--headless", "--no-sandbox"]
    //             },
    //         },
    //     },
    //     "prod_chrome": {
    //         "globals": {
    //             "environment": "prod_chrome",
    //             "wwwURL": "https://analytics.nprstations.org/",
    //         },
    //         "desiredCapabilities": {
    //             "browserName": "chrome",
    //             "javascriptEnabled": true,
    //         },
    //     },
    //     "prod_firefox": {
    //         "globals": {
    //             "environment": "prod_firefox",
    //             "wwwURL": "https://analytics.nprstations.org/",
    //         },
    //         "desiredCapabilities": {
    //             "browserName": "firefox",
    //             "javascriptEnabled": true,
    //             "marionette": true,
    //         },
    //     },
    //}
};
