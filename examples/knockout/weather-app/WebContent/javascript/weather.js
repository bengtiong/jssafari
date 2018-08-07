/* Module for weather portal application */
var WeatherPortal = function () {
  /* the model */
  var weather = {
    city: ko.observable(),
    country: ko.observable(),
    warnings: ko.observableArray(),
    forecasts: ko.observableArray()
  };

  /* computed attribute to hold the location */
  var location = ko.computed(function() {
    return weather.city() + ', ' + weather.country();
  });

  /* attribute to hold the active page */
  var activePage = ko.observable("Home");

  /* module to retrieve data from the server */
  var server = MockServer();

  /* method to set the active page */
  var setActivePage = function (page) {
    console.log("Setting active page to: " + page);
    activePage(page);
  };

  /* returns true if parameter matches active page, false otherwise */
  var isActivePage = function (page) {
    return activePage() === page;
  }

  /* method retrieves data from the server side and sets it in the model */
  var retrieveData = function () {
    console.log("Retrieving data from server......")
    var data = server.getWeatherData();
    console.log("Data retrieved from server: " + ko.toJSON(data));

    weather.city(data.city);
    weather.country(data.country);
    weather.warnings(data.warnings);
    weather.forecasts(data.forecasts);
  }

  /* method to initialize the module */
  var init = function () {
    retrieveData();
    ko.applyBindings(WeatherPortal);
  };

  /* execute the init function when the DOM is ready */
  $(init);

  return {
    /* these will be exposed publicly */
    weather: weather,
    location: location,
    setActivePage: setActivePage,
    isActivePage: isActivePage
  };
}();