ko.components.register('forecast', {
  viewModel: function(params){
    this.location = params.location();
    this.forecasts = params.forecasts();
  },
  template: 
  '\
  <div class="row">\
    <div class="col-md-12">\
      <div class="panel panel-default">\
        <div class="panel-heading" data-bind="text: WeatherPortal.location("></div>\
        <div class="panel-body">\
          <table class="table table-hover">\
            <thead>\
              <tr>\
                <th>Day</th>\
                <th>Weather</th>\
                <th>Temperature &#8451;</th>\
                <th>precipitation</th>\
                <th>Humidity</th>\
                <th>Wind</th>\
              </tr>\
            </thead>\
            <tbody data-bind="foreach: WeatherPortal.weather.forecasts">\
              <tr>\
                <td data-bind="text: dayOfWeek"></td>\
                <td data-bind="text: weather"></td>\
                <td data-bind="text: temp"></td>\
                <td data-bind="text: precipitation"></td>\
                <td data-bind="text: humidity"></td>\
                <td data-bind="text: wind"></td>\
              </tr>\
            </tbody>\
          </table>\
        </div>\
      </div>\
    </div>\
  </div>\
  '
});