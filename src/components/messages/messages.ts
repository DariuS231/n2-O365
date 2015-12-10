import {Component, NgFor} from 'angular2/angular2';
import {o365Adal} from './../../services/o365Adal';
import {baseComponent} from './../../commons/baseComponent';

@Component({
    selector: 'Messages',
	viewBindings: [o365Adal],
	directives: [NgFor],
    templateUrl:'/dist/components/messages/messages.html'
})
export class Messages extends baseComponent{
    messages: Array<any>;
    constructor(adalService: o365Adal) {
        super(adalService, true);
        this.messages = new Array<any>();
        this.adalService.getRequestPromise("/beta/me/messages").then((data) => {
            this.messages = data.value;
        });
    }
}
