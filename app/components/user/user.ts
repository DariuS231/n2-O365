import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {o365Adal} from './../../services/o365Adal';
import {baseComponent} from './../../commons/baseComponent';

@Component({
    selector: 'User',
	viewBindings: [o365Adal],
    directives: [NgFor],
    templateUrl: '/app/views/components/user.html'
})
export class User extends baseComponent {
    constructor(adalService: o365Adal) {
        super(adalService, true);
    }
}