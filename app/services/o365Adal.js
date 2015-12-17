System.register(['angular2/http', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var o365Adal;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            o365Adal = (function () {
                function o365Adal(http) {
                    var _this = this;
                    this.config = {
                        tenant: 'dariuscc.onmicrosoft.com',
                        clientId: 'e41cc4b1-c8dd-458f-a8a5-663bb1876c42',
                        postLogoutRedirectUri: window.location.origin,
                        endpoints: {
                            officeGraph: 'https://graph.microsoft.com'
                        },
                        cacheLocation: 'localStorage',
                    };
                    this.handleLogInCallBack = function () {
                        var isCallback = _this.authContext.isCallback(window.location.hash);
                        _this.authContext.handleWindowCallback();
                        _this.currentUser = _this.authContext.getCachedUser();
                        var logError = -_this.authContext.getLoginError();
                        if (!!logError) {
                            alert(logError);
                        }
                        else if (isCallback && !logError) {
                            window.location = _this.authContext._getItem(_this.authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
                        }
                    };
                    this.tokenPromise = function (endpoint) {
                        var p = new Promise(function (resolve, reject) {
                            _this.authContext.acquireToken(endpoint, function (error, token) {
                                if (error || !token) {
                                    alert('ADAL error occurred: ' + error);
                                    return;
                                }
                                else {
                                    resolve(token);
                                }
                            }).fail(function () {
                                console.log('fetching files from onedrive failed.');
                                alert('something went wrong! try refreshing the page.');
                            });
                        });
                        return p;
                    };
                    this.getRequestPromise = function (reqUrl) {
                        var p = new Promise(function (resolve, reject) {
                            var tokenPromise = _this.tokenPromise(_this.config.endpoints.officeGraph);
                            tokenPromise.then(function (token) {
                                var headers = new http_1.Headers();
                                headers.append('Authorization', 'Bearer ' + token);
                                _this.http.get(_this.config.endpoints.officeGraph + reqUrl, { headers: headers }).subscribe(function (res) {
                                    resolve(JSON.parse(res._body));
                                });
                            });
                        });
                        return p;
                    };
                    this.http = http;
                    this.authContext = new AuthenticationContext(this.config);
                    this.handleLogInCallBack();
                }
                Object.defineProperty(o365Adal.prototype, "isUserAuthenticated", {
                    get: function () {
                        return !!this.currentUser;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(o365Adal.prototype, "currentUserName", {
                    get: function () {
                        return this.isUserAuthenticated ? this.currentUser.profile.name : '';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(o365Adal.prototype, "userPropr", {
                    get: function () {
                        var userProps = new Array();
                        for (var property in this.currentUser.profile) {
                            if (this.currentUser.profile.hasOwnProperty(property)) {
                                userProps.push({ propertyName: property, value: this.currentUser.profile[property] });
                            }
                        }
                        return userProps;
                    },
                    enumerable: true,
                    configurable: true
                });
                o365Adal = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], o365Adal);
                return o365Adal;
            })();
            exports_1("o365Adal", o365Adal);
        }
    }
});
//# sourceMappingURL=o365Adal.js.map