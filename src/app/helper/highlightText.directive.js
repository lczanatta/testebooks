"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var escapeStringRegexp_component_1 = require("./escapeStringRegexp.component");
var ColorSearchedLettersDirective = (function () {
    function ColorSearchedLettersDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.escape = new escapeStringRegexp_component_1.EscapeStringRegexp();
    }
    ColorSearchedLettersDirective.prototype.ngOnInit = function () {
        if (typeof this.classToApply === 'undefined') {
            this.classToApply = '';
        }
        if (typeof this.search === 'undefined') {
            this.renderer.setElementProperty(this.el.nativeElement, 'innerHTML', this.text);
            return;
        }
        var search = this.escape.process(this.search.toString());
        this.renderer.setElementProperty(this.el.nativeElement, 'innerHTML', this.replace(this.text, search));
    };
    ColorSearchedLettersDirective.prototype.replace = function (txt, search) {
        var searchRgx = new RegExp('(' + search + ')', 'gi');
        return txt.replace(searchRgx, "<span class=\"" + this.classToApply + "\">$1</span>");
    };
    return ColorSearchedLettersDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ColorSearchedLettersDirective.prototype, "search", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ColorSearchedLettersDirective.prototype, "text", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ColorSearchedLettersDirective.prototype, "classToApply", void 0);
ColorSearchedLettersDirective = __decorate([
    core_1.Directive({
        selector: '[appColorSearchedLetters]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], ColorSearchedLettersDirective);
exports.ColorSearchedLettersDirective = ColorSearchedLettersDirective;
//# sourceMappingURL=highlightText.directive.js.map