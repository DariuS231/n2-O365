System.register(['angular2/core', 'angular2/router', './../services/o365Adal', './../commons/baseComponent', './home/home', './user/user', './files/files', './messages/messages'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, o365Adal_1, baseComponent_1, home_1, user_1, files_1, messages_1;
    var O365App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (o365Adal_1_1) {
                o365Adal_1 = o365Adal_1_1;
            },
            function (baseComponent_1_1) {
                baseComponent_1 = baseComponent_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (files_1_1) {
                files_1 = files_1_1;
            },
            function (messages_1_1) {
                messages_1 = messages_1_1;
            }],
        execute: function() {
            O365App = (function (_super) {
                __extends(O365App, _super);
                function O365App(location, service) {
                    var _this = this;
                    _super.call(this, service, false);
                    this.getLinkStyle = function (path) {
                        return _this.location.path().toLowerCase() === path.toLowerCase();
                    };
                    this.adalLogIn = function () {
                        _this.adalService.authContext.login();
                    };
                    this.adalLogOut = function () {
                        _this.adalService.authContext.logOut();
                    };
                    this.location = location;
                }
                O365App = __decorate([
                    router_1.RouteConfig([
                        { path: '', redirectTo: ['/Home'] },
                        { path: '/home', component: home_1.Home, as: 'Home' },
                        { path: '/user', component: user_1.User, as: 'User' },
                        { path: '/files', component: files_1.Files, as: 'Files' },
                        { path: '/messages', component: messages_1.Messages, as: 'Messages' }
                    ]),
                    core_1.Component({
                        selector: 'o365-app',
                        viewBindings: [o365Adal_1.o365Adal],
                        directives: [home_1.Home, user_1.User, files_1.Files, messages_1.Messages, router_1.ROUTER_DIRECTIVES],
                        templateUrl: '/app/views/layouts/main.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Location, o365Adal_1.o365Adal])
                ], O365App);
                return O365App;
            })(baseComponent_1.baseComponent);
            exports_1("O365App", O365App);
        }
    }
});
//# sourceMappingURL=app.js.map