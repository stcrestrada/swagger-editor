'use strict';

var angular = require('angular');
require('angular-json-schema-form');
require('json-editor');
require('ngstorage');
require('angular-ui-ace');

// Define window.SwaggerEditor to have angular-mocks dependency
window.SwaggerEditor = angular.module('SwaggerEditor', [
  require('angular-mocks/ngMock'),
  require('angular-sanitize'),
  require('ng-file-upload'),
  require('angular-ui-router'),
  require('angular-ui-bootstrap'),
  require('angular-ui-layout'),
  require('angular-marked'),
  require('jsonformatter'),
  'ui.ace',
  'mohsen1.schema-form',
  'ngStorage'
]);

// Require app components
require('scripts/components.js');

// Test config
require('defaults.js');

// Load tests
require('spec/controllers/editor');
require('spec/controllers/errorpresenter');
require('spec/controllers/file-import');
require('spec/controllers/main');
require('spec/controllers/openexamples');
require('spec/controllers/preview');
require('spec/controllers/tryoperation');
require('spec/controllers/url-import');

require('spec/directives/collapsewhen');
require('spec/directives/schemamodel');

require('spec/services/ast-manager');
require('spec/services/autocomplete');
require('spec/services/backend');
require('spec/services/builder');
require('spec/services/editor');
require('spec/services/fileloader');
require('spec/services/fold-state-manager');
require('spec/services/storage');
