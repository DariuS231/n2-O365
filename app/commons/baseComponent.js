System.register([], function(exports_1) {
    var baseComponent;
    return {
        setters:[],
        execute: function() {
            baseComponent = (function () {
                function baseComponent(adalService, isPrivate) {
                    this.adalService = adalService;
                    if (isPrivate && !this.adalService.isUserAuthenticated)
                        this.adalService.authContext.login();
                }
                return baseComponent;
            })();
            exports_1("baseComponent", baseComponent);
        }
    }
});
//# sourceMappingURL=baseComponent.js.map