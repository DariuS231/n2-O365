import {Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Location } from 'angular2/router';
import {o365Adal} from './../services/o365Adal';
import {baseComponent} from './../commons/baseComponent';
import {Home} from './home/home';
import {User} from './user/user';
import {Files} from './files/files';
import {Messages} from './messages/messages';

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
    templateUrl: '/app/views/layouts/main.html'
})
export class O365App extends baseComponent {
    location: Location;
    constructor(location: Location, service: o365Adal) {
        super(service, false);
        this.location = location;
    }
    public getLinkStyle = (path: string): boolean => {
        return this.location.path().toLowerCase() === path.toLowerCase();
    }
    public adalLogIn = (): void => {
        this.adalService.authContext.login();
    }
    public adalLogOut = (): void => {
        this.adalService.authContext.logOut();
    }
}
