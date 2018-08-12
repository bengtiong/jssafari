ko.components.register('warning', {
  viewModel: function(params){
    this.location = params.location();
    this.warnings = params.warnings();
  },
  template: 
  '\
  <div class="row">\
    <div class="col-md-12">\
      <div class="panel panel-default">\
        <div class="panel-heading" data-bind="text: location"></div>\
        <div class="panel-body">\
          <table class="table table-hover">\
            <thead>\
              <tr>\
                <th>Alert</th>\
                <th>Description</th>\
              </tr>\
            </thead>\
            <tbody data-bind="foreach: warnings">\
              <tr>\
                <td data-bind="style: {color: alertLevel}">\
                  <i class="fa fa-exclamation-triangle fa-2x" aria-hidden="true"></i>\
                </td>\
                <td data-bind="text: description"></td>\
              </tr>\
            </tbody>\
          </table>\
        </div>\
      </div>\
    </div>\
  </div>\
  '
});