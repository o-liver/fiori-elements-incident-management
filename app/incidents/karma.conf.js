module.exports = function (config) {
    config.set({
      frameworks: ["ui5"],
      ui5: {
        url: 'https://sapui5.hana.ondemand.com'
      },
      
      browsers: ["ChromeCustomHeadless"],
      customLaunchers: {
        ChromeCustom: {
          base: 'Chrome',
          flags: ['--start-maximized']
        },
        ChromeCustomHeadless: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox=true --window-size=1600,900']
        }
      },
  
      browserConsoleLogOptions: {
        level: 'warn'
      },
  
      preprocessors: {
        '**/webapp/!(test|localService)/**/*.js': ['coverage']
      },
      coverageReporter: {
        includeAllSources: true,
        reporters: [
          {
            type: 'html',
            dir: './target/coverage'
          },
          {
            type: 'text'
          }
        ]
      },
  
      junitReporter: {
        outputDir: "./target/junit",
        outputFile: "TEST-qunit.xml",
        suite: "",
        useBrowserName: true
      },
      htmlReporter: {
        outputFile: './target/html/QUnit.html',
  
        // Optional
        pageTitle: 'Test Results',
        subPageTitle: 'Detailed test results',
        groupSuites: true,
        useCompactStyle: true,
        useLegacyStyle: true,
        showOnlyFailed: false
      },
      reporters: ['progress', 'coverage', 'junit', 'html']
    });
  };