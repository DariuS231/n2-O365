System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', './components/app'], function(exports_1) {
    var browser_1, core_1, router_1, http_1, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.O365App, [router_1.ROUTER_PROVIDERS, http_1.HTTP_BINDINGS, core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]);
        }
    }
});
//# sourceMappingURL=boot.js.map