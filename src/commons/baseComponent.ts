import {o365Adal } from './../services/o365Adal';

export class baseComponent {
    adalService: o365Adal ;

    constructor(adalService: o365Adal , isPrivate: boolean) {
        this.adalService = adalService;

        if (isPrivate && !this.adalService.isUserAuthenticated)
            this.adalService.authContext.login();
    }
}
