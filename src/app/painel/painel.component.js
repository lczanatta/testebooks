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
var PainelComponent = (function () {
    function PainelComponent(elemento) {
        this.elemento = elemento;
    }
    PainelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titulo = this.titulo.toLowerCase(); //this.titulo.toLowerCase().replace(/busca.toLowerCase()/g,('<b>'+this.busca.toLowerCase()+'</b>'));
        this.busca = this.busca.toLowerCase();
        var termos = this.busca.split(' ');
        termos.forEach(function (elemento) {
            _this.titulo = _this.titulo.replace(elemento, ('<b>' + elemento + '</b>'));
        });
        this.titulo = this.titulo.charAt(0).toUpperCase() + this.titulo.slice(1);
    };
    PainelComponent.prototype.fadeOut = function (cb) {
        $(this.elemento.nativeElement).fadeOut(cb);
    };
    return PainelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PainelComponent.prototype, "titulo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PainelComponent.prototype, "busca", void 0);
PainelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'painel',
        templateUrl: './painel.component.html',
        styleUrls: ['./painel.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], PainelComponent);
exports.PainelComponent = PainelComponent;
//# sourceMappingURL=painel.component.js.map