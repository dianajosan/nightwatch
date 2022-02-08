module.exports = {
    helperFunctions: {
        directionTrendColorAttribute: function directionTrendColorAttribute(trend) {
            if (trend === '-') {
                return 'border-top-color: rgb(233, 89, 104);'; // return red color
            }
            else if (trend === '+') {
                return 'border-bottom-color: rgb(37, 178, 97);'; // return green color
            }
            else
                return 'display: none;';
        },
        directionTrendClassAttribute: function directionTrendColorAttribute(trend) {
            if (trend === '+') {
                return 'trend-increase';
            } else {
                return 'trend-decrease';
            }
        },
        trendAvailable: function trendAvailable(trendValue) {
            return (trendValue.trim() !== "100%") && (trendValue.trim() !== "0%") && (trendValue.trim() !== "100.0%") && (trendValue.trim() !== "-100%") && (trendValue.trim() !== "0.0%");
        },
        today: function today() {
            const date = new Date();
            date.setDate(date.getDate());
            return date.toISOString().split('T')[0];
        },
        yesterday: function yesterday() {
            const date = new Date();
            date.setDate(date.getDate() - 1);
            return date.toISOString().split('T')[0];
        },
        last30Days: function last30Days() {
            const date = new Date();
            date.setDate(date.getDate() - 29);
            return date.toISOString().split('T')[0];
        },
        last30DaysFromYesterday: function last30DaysFromYesterday() {
            const date = new Date();
            date.setDate(date.getDate() - 30);
            return date.toISOString().split('T')[0];
        },
        mergeRowCells: function mergeRowCells(tableRows, headers) {
            const rowsList = [];
            for (const index in tableRows) {
                let rowString = '';
                for (const i in headers) {
                    rowString += (tableRows[index][headers[i]] + ' ');
                }
                const rowStrings = rowString.slice(0, -1);
                rowsList.push(rowStrings);
            }
            return rowsList;
        },
        daysDiff: function daysDiff(first_date, second_date) {
            const startDate = Date.parse(first_date),
                endDate = Date.parse(second_date),
                timeDiff = endDate - startDate;
            return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        },
        runShellCommand: function runShellCommand(command, callback, errorCallback) {
            try {
                const execSync = require('child_process').execSync;
                const json_result = JSON.parse(execSync(String(command)));
                callback(json_result);
            } catch (error) {
                errorCallback(error);
            }
        },
        validateCount: function validateCount(self, totalCount, expectedCount, field) {
            if (expectedCount === 0) {
                self.verify.ok(totalCount === '--', "There are no " + field + " in the selected period.");
            } else {
                self.verify.ok(totalCount === expectedCount, "Expected " + field + " from backend: " + expectedCount + " and got from UI : " + totalCount);
            }
        },
        validateGraphicPoints: function ValidateGraphicPoints(pointsFound, numberOfDays) {
            if (pointsFound < numberOfDays) {
                console.log("There are some day(s) without data in selected period.");
                console.log("Expected: " + numberOfDays + " points on the graphic and found: " + pointsFound);
            }
        },
    },
    locators: {
        graphics: { //common locators for graphics from AudioDownload and Audio Download Program pages
            trendGraphic: "//ancestor::mode-chart",
            averageStationTrend: "//ancestor::mode-chart//*[contains(@class,'highcharts-series-group')]//*[contains(@class,'highcharts-color-0') and contains(@class, 'highcharts-point')]",
            myStationTrend: "//ancestor::mode-chart//*[contains(@class,'highcharts-series-group')]//*[contains(@class,'highcharts-color-1') and contains(@class, 'highcharts-point')]",
            chartError: "//ancestor::div//h3[text()='Sorry, unable to render a chart with the given data']",
            chartXaxis: "//ancestor::mode-chart//*[contains(@class,'highcharts-xaxis')]",
            chartYaxis: "//ancestor::mode-chart//*[contains(@class,'highcharts-yaxis')]",
            chartXaxisLabels: "//ancestor::mode-chart//*[contains(@class,'highcharts-xaxis-labels')]",
            chartYaxisLabels: "//ancestor::mode-chart//*[contains(@class,'highcharts-yaxis-labels')]",
            firstLegendItem: "//ancestor::mode-chart//*[contains(@class, 'highcharts-legend-item')and contains(@class, 'highcharts-series-0')]",
            secondLegendItem: "//ancestor::mode-chart//*[contains(@class, 'highcharts-legend-item')and contains(@class, 'highcharts-series-1')]",
            usersLocator: "//div[contains(@class,'chart-header')]//div[contains(@class,'in-place-edit-text') and normalize-space(.) = 'Users']",
            downloadsLocator: "//div[contains(@class,'chart-header')]//div[contains(@class, 'in-place-edit-text') and normalize-space(.) = 'Downloads']",
            downloadsPerUserLocator: "//div[contains(@class,'chart-header')]//div[contains(@class,'in-place-edit-text') and contains(normalize-space(.),'Downloads per User')]",
            timeListenersLocator: "//div[contains(@class,'chart-header')]//div[contains(@class,'in-place-edit-text') and normalize-space(.) = 'At what time of day is my audience listening? (Localized on Mobile Apps)']",
            activeListenersLocator: "//div[contains(@class,'chart-header')]//div[contains(@class,'in-place-edit-text') and normalize-space(.) = 'Active NPR One Listeners (Localized on Mobile Apps)']",
            averageMinutesMobileApps: "//div[contains(@class,'chart-header')]//div[contains(@class,'in-place-edit-text') and normalize-space(.) = 'Average Minutes (Localized on Mobile Apps)']",
            listensStoriesWithStations: "//div[contains(@class,'chart-header')]//div[contains(@class, 'in-place-edit-text')]",
            newscastAudienceWeekdays: "//div[contains(@class,'chart-header')]//div[contains(@class,'in-place-edit-text') and normalize-space(.) = 'When is my audience hearing newscasts on weekdays?']",
            newscastAudienceWeekend: "//div[contains(@class,'chart-header')]//div[contains(@class,'in-place-edit-text') and normalize-space(.) = 'When is my audience hearing newscasts on weekends?']",
            barChart: "//ancestor::div[@class='chart-content']",
            barChartLegend: "//ancestor::mode-chart//*[contains(@class,'highcharts-legend')]",
            bars: "//ancestor::mode-chart//*[contains(@class,'highcharts-point') and contains(@class,'highcharts-color')]",
            barsColor0: "//ancestor::mode-chart//*[contains(@class,'highcharts-point') and contains(@class,'highcharts-color-0')]",
            barsColor1: "//ancestor::mode-chart//*[contains(@class,'highcharts-point') and contains(@class,'highcharts-color-1')]",
            barsColor2: "//ancestor::mode-chart//*[contains(@class,'highcharts-point') and contains(@class,'highcharts-color-2')]",
        },
        bigNumberCharts: { //common locators for Big Number charts from AudioDownload and Audio Download Program pages
            bigNumber: "//div[@class='fb-container']/span",
            trendValue: "//span[contains(@class,'trend-value')]",
            trendDirection: "//span[@class='trend-direction-icon']",
            usersLocator: "//*[@id='no-users']",
            downloadsLocator: "//*[@id='no-downloads']",
            downloadsPerUserLocator: "//*[@id='no-user-downloads']",
            topProgramLocator: "//*[@id='top-program']",
            topEpisodeLocator: "//*[@id='top-episode']",
            topTitle: "//div[contains(@class,'chart-description')]//div[contains(@class,'in-place-edit-text')]",
            listenersLocator: "//*[@id='no-listeners']",
            minutesLocator: "//*[@id='no-minutes']",
            minutesStationLocator: "//*[@id='no-minutes-station']",
            listensLocator: "//*[@id='no-listens']",
            averageCompletionLocator: "//*[@id='avg-completion']",
            listensAllLocator: "//*[@id='no-listens-all']",
            listenersAllLocator: "//*[@id='no-listeners-all']",
            averageCompletionAllLocator: "//*[@id='avg-completion-all']",
            regionalListenersLocator:"//*[@id='reg-no-listeners']",
            regionalListensLocator:"//*[@id='reg-no-listens']",
            regionalAvgCompletionLocator:"//*[@id='reg-avg-completion']"
        },
        tables: { //common locators for tables from AudioDownload and Audio Download Program pages
            tableHead: "/thead",
            tableBody: "/tbody",
            tableRow: "/tbody/tr",
            visibleRow: "/tbody/tr/td/a[text()!='']",
            title: "/tbody/tr/td",
            tableHeader: "//h3[@class='table-header']",
            table0Locator: "//*[@id='DataTables_Table_0']",
            table1Locator: "//*[@id='DataTables_Table_1']",
            table2Locator: "//*[@id='DataTables_Table_2']",
            table3Locator: "//*[@id='DataTables_Table_3']",
            table4Locator: "//*[@id='DataTables_Table_4']",
            visibleRowNprOne: "/tbody/tr/td[@class='sorting_1' and text()!='']",
        },
        benchmark: { //common locators for BENCHMARK section from more pages
            title: "//div[@class='col-md-12']/p",
            firstElementTrend: "//div[@class='col-md-12']/p/span[1]",
            firstElementPercentChange: "//div[@class='col-md-12']/p/span[2]",
            secondElementTrend: "//div[@class='col-md-12']/p/span[3]",
            secondElementPercentChange: "//div[@class='col-md-12']/p/span[4]",
        },
        pieCharts: {
            alexaNewscastPie: "//*[@id='alexa_newscasts_pie']",
            alexaStoriesPie: "//*[@id='alexa_station_stories_pie']",
            pieTitle: "//div[@class='in-place-edit-text']",
            pieSlices: "//*[contains(@class,'highcharts-point') and @stroke='#ffffff']",
            outlineTextSlice: "//*[contains(@class,'highcharts-text-outline')]",
            pieLegendTitle: "//*[contains(@class,'highcharts-legend-title')]",
            pieLegendItems: "//*[contains(@class,'highcharts-legend-item')]",
        },
    },
    messages: {
        graphicIsVisible: "The graphic with data in selected period is loaded",
        xAxisVisible: "The X axis of graphic is visible",
        yAxisVisible: "The Y axis of graphic is visible",
        xAxisLabelsVisible: "The X axis labels of graphic is visible",
        yAxisLabelsVisible: "The Y axis labels of graphic is visible",
        myStationTrend: " 'My station' graphic is visible",
        averageStationTrend: " 'Average station' graphic is visible",
        thisProgramTrend: " 'This Program' graphic is visible",
        chartErrorMessage: "Unable to render a chart with the given data",
        barsChartLegendVisible: "The bars chart's legend is visible",
        barsVisible: "The bars of chart are visible",
        pieChartLegendTitleVisible: "The pie chart's legend title is visible",
        pieChartLegendItemsVisible: "The pie chart's legend items are visible",
        pieSlicesVisible: "The slices of pie chart are visible",
        outlinePieTextVisible: "The outline texts of pie slices are visible",
    },
    texts: {
        audioDownloadsOverviewReport: "Audio Downloads Overview",
        audioDownloadsHeaderTitle : "Audio Downloads",
        audioDownloadsHeaderSubtitle : "Podcasts, Segments and Newscasts as measured by media access logs",
        downloadsCSV: "Download CSV",
        needHelp: "Need Help?",
        audioDownloadsProgramReport: "Audio Downloads Program",
        audioDownloadsProgramHeaderTitle : "Audio Downloads Program",
        benchmarkTitle: "BENCHMARK: Among all NPR stations",
        audioDownloadsCsvFileName: "audio-downloads-overview",
        audioDownloadsProgramCsvFileName: "audio-downloads-program-drilldown",
        nprOneOverviewReport: "NPR One Overview",
        nprOneOverviewTitle: "NPR One",
        nprOneOverviewSubtitle: "Audio listening measured on the iOS and Android apps",
        nprOneOverviewCsvFileName: "npr-one-overview",
        nprOneStoriesWithStationReport: "NPR One Stories With Station",
        nprOneStoriesWithStationTitle: "Newsmagazine Stories",
        nprOneOStoriesWithStationSubtitle: "NPR Segments reported with the station",
        nprOneStoriesWithStationCsvFileName: "npr-one-npr-stories-with-station-drilldown",
        nprOneStationNewscastReport: "NPR One Station Newscasts",
        nprOneStationNewscastTitle: "Station Newscasts",
        nprOneStationNewscastSubtitle: "Station newscasts heard in NPR One",
        nprOneStationNewscastCsvFileName: "npr-one-station-newscast-drilldown",
        nprOneStationStoriesReport: "NPR One Station Stories",
        nprOneStationStoriesTitle: "Station Stories",
        nprOneStationStoriesSubtitle: "Stories from the station heard in NPR One",
        nprOneStationStoriesCsvFileName: "npr-one-station-stories-drilldown",
        nprOnePodcastAllEpisodesReport: "NPR One Podcasts All Episodes",
        nprOnePodcastAllEpisodesTitle: "Station Podcasts - All Episodes",
        nprOnePodcastAllEpisodesSubtitle: "All of station's podcasts heard in NPR One",
        nprOnePodcastAllEpisodesCsvFileName: "npr-one-podcasts-drilldown-all-titles",
        nprOnePodcastSingleTitleReport: "NPR One Podcasts Single Title",
        nprOnePodcastSingleTitleTitle: "Station Podcasts - Single Title",
        nprOnePodcastSingleTitleSubtitle: "Episodes of a particular podcast heard in NPR One",
        nprOnePodcastSingleTitleCsvFileName: "npr-one-station-podcasts-drilldown-single-title",
        nprOneLoveDefinition: 'Love is "Love Rate". NPR One listeners (on most platforms)' +
            ' have the option of marking audio as "Interesting" or sharing. Love Rate calculates ' +
            'the percentage of listeners to the piece who did this.',
        nprOneACvEDefinition: 'ACvE is "Average Completion Versus Expected", a comparison of Average Completion' +
            ' of a story, podcast or newscast to content of similar lengths. It is useful for comparing pieces of ' +
            'audio of different lengths to one another.',
        nprOneAverageCompletionDefinition: 'Average Completion is the average portion of the audio heard by listeners ' +
            'as a percentage of that piece of audio. So, if Listener A hears 100% of a piece of content and ' +
            'Listener B hears 50%, the average completion of that piece of content would be 75%.',
        nprOneStationUserPerUserLocalized: 'Station Users/Users Localized to Your Station: Users who' +
            ' have been localized to your station or have chosen your station within the NPR One app.',
        nprOneAllUsers: 'All Users: All users, regardless of which station they are localized to, who listened to your audio.',
        nprOneListenersPerActiveUsers: 'Listeners/Active Users: Listeners who not only visited the app but also played audio.',
    },
};

