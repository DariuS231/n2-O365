System.register(['angular2/core', 'angular2/common', './../../services/o365Adal', './../../commons/baseComponent'], function(exports_1) {
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
    var core_1, common_1, o365Adal_1, baseComponent_1;
    var Messages;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (o365Adal_1_1) {
                o365Adal_1 = o365Adal_1_1;
            },
            function (baseComponent_1_1) {
                baseComponent_1 = baseComponent_1_1;
            }],
        execute: function() {
            Messages = (function (_super) {
                __extends(Messages, _super);
                function Messages(adalService) {
                    var _this = this;
                    _super.call(this, adalService, true);
                    this.messages = new Array();
                    this.adalService.getRequestPromise("/beta/me/messages").then(function (data) {
                        _this.messages = data.value;
                    });
                }
                Messages = __decorate([
                    core_1.Component({
                        selector: 'Messages',
                        viewBindings: [o365Adal_1.o365Adal],
                        directives: [common_1.NgFor],
                        templateUrl: '/app/views/components/messages.html'
                    }), 
                    __metadata('design:paramtypes', [o365Adal_1.o365Adal])
                ], Messages);
                return Messages;
            })(baseComponent_1.baseComponent);
            exports_1("Messages", Messages);
        }
    }
});
//# sourceMappingURL=messages.js.map