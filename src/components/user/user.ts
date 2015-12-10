import {Component, NgFor} from 'angular2/angular2';
import {o365Adal} from './../../services/o365Adal';
import {baseComponent} from './../../commons/baseComponent';

@Component({
    selector: 'User',
	viewBindings: [o365Adal],
    directives: [NgFor],
    templateUrl: '/dist/components/user/user.html'
})
export class User extends baseComponent {
    constructor(adalService: o365Adal) {
        super(adalService, true);
    }
}