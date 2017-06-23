"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EscapeStringRegexp = (function () {
    function EscapeStringRegexp() {
        this.matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    }
    EscapeStringRegexp.prototype.process = function (str) {
        if (typeof str !== 'string') {
            throw new TypeError('Expected a string');
        }
        return str.replace(this.matchOperatorsRe, '\\$&');
    };
    ;
    return EscapeStringRegexp;
}());
EscapeStringRegexp = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'escapeStringRegexp'
    })
], EscapeStringRegexp);
exports.EscapeStringRegexp = EscapeStringRegexp;
//# sourceMappingURL=escapeStringRegexp.component.js.map