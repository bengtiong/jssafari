"use strict";



define('weather-app/app', ['exports', 'weather-app/resolver', 'ember-load-initializers', 'weather-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('weather-app/components/show-weather', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('weather-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('weather-app/helpers/app-version', ['exports', 'weather-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('weather-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('weather-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('weather-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'weather-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('weather-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('weather-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('weather-app/initializers/export-application-global', ['exports', 'weather-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("weather-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('weather-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('weather-app/router', ['exports', 'weather-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('welcome');
    this.route('forecast');
  });

  exports.default = Router;
});
define('weather-app/routes/forecast', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return {
        warning: [{
          'description': 'Heavy showers are expected between 06:00 Sat 26th and 19:00 Sat 27th.',
          'red': false
        }, {
          'description': 'Heavy thunderstorm are expected between 06:00 Sat 28th and 19:00 Sat 28th.',
          'red': true
        }],
        weather: [{
          'city': 'Swindon',
          'temp': '10 degree',
          'rainy': true
        }, {
          'city': 'Swansea',
          'temp': '14 degree',
          'rainy': false
        }]
      };
    }
  });
});
define('weather-app/routes/welcome', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('weather-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("weather-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "65Bm0de0", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "weather-app/templates/application.hbs" } });
});
define("weather-app/templates/components/show-weather", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GH9xIJ/t", "block": "{\"symbols\":[\"weather\"],\"statements\":[[4,\"each\",[[22,[\"weatherData\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"if\",[[21,1,[\"rainy\"]],\"weather\",\"weather sunny\"],null]]]],[8],[0,\"\\n    \"],[6,\"h4\"],[8],[1,[21,1,[\"city\"]],false],[9],[0,\"\\n    \"],[6,\"div\"],[8],[1,[21,1,[\"temp\"]],false],[9],[0,\"\\n    \"],[6,\"div\"],[8],[1,[26,\"if\",[[21,1,[\"rainy\"]],\"Rainy\",\"Sunny\"],null],false],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "weather-app/templates/components/show-weather.hbs" } });
});
define("weather-app/templates/forecast", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NCS+9iHe", "block": "{\"symbols\":[\"warning\"],\"statements\":[[6,\"h1\"],[8],[0,\"Weather Forecast\"],[9],[0,\"\\n\"],[6,\"p\"],[8],[0,\"Sample weather forecast will appear here.\"],[9],[0,\"\\n\\n\"],[6,\"h2\"],[8],[0,\"Warning\"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"warning\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[8],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"if\",[[21,1,[\"red\"]],\"warningRed\",\"warningYellow\"],null]]]],[8],[1,[21,1,[\"level\"]],false],[0,\" warning: \"],[1,[21,1,[\"description\"]],false],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[6,\"h2\"],[8],[0,\"Weather\"],[9],[0,\"\\n\"],[1,[26,\"show-weather\",null,[[\"weatherData\"],[[22,[\"model\",\"weather\"]]]]],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "weather-app/templates/forecast.hbs" } });
});
define("weather-app/templates/welcome", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QQYQSosW", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[8],[0,\"Welcome to the Weather Hubs\"],[9],[0,\"\\n\"],[6,\"p\"],[8],[0,\"This is a sample app to demonstrate the ember application.\"],[9],[0,\"\\n\\n\"],[6,\"p\"],[8],[0,\"\\n  \"],[6,\"nav\"],[10,\"class\",\"forecastBtn\"],[8],[4,\"link-to\",[\"forecast\"],null,{\"statements\":[[0,\" Weather forecast \"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "weather-app/templates/welcome.hbs" } });
});


define('weather-app/config/environment', [], function() {
  var prefix = 'weather-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("weather-app/app")["default"].create({"name":"weather-app","version":"0.0.0+10dffc99"});
}
//# sourceMappingURL=weather-app.map
