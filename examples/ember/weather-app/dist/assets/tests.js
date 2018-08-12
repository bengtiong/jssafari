'use strict';

define('weather-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/header-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-nav.js should pass ESLint\n\n');
  });

  QUnit.test('components/weather-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/weather-form.js should pass ESLint\n\n');
  });

  QUnit.test('models/forecast.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/forecast.js should pass ESLint\n\n');
  });

  QUnit.test('models/warning.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/warning.js should pass ESLint\n\n');
  });

  QUnit.test('models/weather.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/weather.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });

  QUnit.test('routes/forecast.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/forecast.js should pass ESLint\n\n');
  });

  QUnit.test('routes/warning.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/warning.js should pass ESLint\n\n');
  });
});
define('weather-app/tests/integration/components/header-nav-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | header-nav', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "LK4MMYl+",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"header-nav\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "knFnBAqm",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"header-nav\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('weather-app/tests/integration/components/weather-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | weather-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "xaXq9+nX",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"weather-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "DHej2ufY",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"weather-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('weather-app/tests/test-helper', ['weather-app/app', 'weather-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('weather-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/header-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/header-nav-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/weather-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/weather-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/forecast-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/forecast-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/warning-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/warning-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/weather-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/weather-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/forecast-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/forecast-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/warning-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/warning-test.js should pass ESLint\n\n');
  });
});
define('weather-app/tests/unit/adapters/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define('weather-app/tests/unit/models/forecast-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | forecast', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('forecast', {}));
      assert.ok(model);
    });
  });
});
define('weather-app/tests/unit/models/warning-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | warning', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('warning', {}));
      assert.ok(model);
    });
  });
});
define('weather-app/tests/unit/models/weather-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | weather', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('weather', {}));
      assert.ok(model);
    });
  });
});
define('weather-app/tests/unit/routes/about-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define('weather-app/tests/unit/routes/forecast-test', ['qunit', 'ember-qunit', 'ember-cli-mirage/test-support/setup-mirage'], function (_qunit, _emberQunit, _setupMirage) {
  'use strict';

  (0, _qunit.module)('Unit | Route | forecast', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _setupMirage.setupMirage)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:forecast');
      assert.ok(route);
    });
  });
});
define('weather-app/tests/unit/routes/warning-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | warning', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:warning');
      assert.ok(route);
    });
  });
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

require('weather-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
