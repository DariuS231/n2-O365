import {Component, NgFor} from 'angular2/angular2';
import {o365Adal} from './../../services/o365Adal';
import {baseComponent} from './../../commons/baseComponent';

@Component({
    selector: 'files',
    viewBindings: [o365Adal],
    directives: [NgFor],
    templateUrl:'/dist/components/files/files.html',
})

// Component controller
export class Files extends baseComponent {
    files: Array<any>;
    constructor(adalService: o365Adal) {
        super(adalService, true);
        this.files = new Array<any>();
        this.adalService.getRequestPromise("/beta/me/drive/root/children").then((data) => {
            this.files = data.value;
        });
    }
}