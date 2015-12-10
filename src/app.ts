import {Component, bind} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_DIRECTIVES, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Router} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http';
import {o365Adal} from './services/o365Adal';
import {baseComponent} from './commons/baseComponent';
import {Home} from './components/home/home';
import {User} from './components/user/user';
import {Files} from './components/files/files';
import {Messages} from './components/messages/messages';

@RouteConfig([
	{ path: '', redirectTo: ['/Home'] },
	{ path: '/home', component: Home, as: 'Home' },
	{ path: '/user', component: User, as: 'User' },
	{ path: '/files', component: Files, as: 'Files' },
	{ path: '/messages', component: Messages, as: 'Messages' }
])
@Component({
    selector: 'o365-app',
	viewBindings: [o365Adal],
	directives: [Home, User, Files, Messages, ROUTER_DIRECTIVES],
    templateUrl:'/dist/layouts/main.html'
})
export class O365App  {
    router: Router;
    location: Location;
    adalService: o365Adal;
    constructor(router: Router, location: Location,  service: o365Adal){
		this.adalService = service;
		//super(service, false);
		this.router = router;
	   	this.location = location;
    }
	public getLinkStyle(path) {
        return this.location.path() === path;
    }  
    public adalLogIn() {
        this.adalService.authContext.login();
    }
    public adalLogOut() {
        this.adalService.authContext.logOut();
    }
}
bootstrap(O365App, [ROUTER_PROVIDERS,HTTP_BINDINGS,  bind(LocationStrategy).toClass(HashLocationStrategy)]);