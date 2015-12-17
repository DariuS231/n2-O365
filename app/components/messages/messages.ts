import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {o365Adal} from './../../services/o365Adal';
import {baseComponent} from './../../commons/baseComponent';

@Component({
    selector: 'Messages',
	viewBindings: [o365Adal],
	directives: [NgFor],
    templateUrl: '/app/views/components/messages.html'
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
    public getDateObject = (dateStr: string) : Date => {
        return new Date(dateStr);
    }
}
