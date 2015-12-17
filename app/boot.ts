import {bootstrap}    from 'angular2/platform/browser'
import {bind} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http';
import {O365App} from './components/app'
bootstrap(O365App, [ROUTER_PROVIDERS, HTTP_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy)]);