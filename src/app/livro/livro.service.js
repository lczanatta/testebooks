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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var LivroService = (function () {
    function LivroService(http) {
        this.urlAll = 'https://www.googleapis.com/books/v1/volumes?q=';
        this.urlById = 'https://www.googleapis.com/books/v1/volumes/';
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    LivroService.prototype.buscaPorId = function (id) {
        console.log(this.urlById + id);
        return this.http
            .get(this.urlById + id)
            .map(function (res) { return res.json(); });
    };
    LivroService.prototype.buscaPorLink = function (link) {
        return this.http
            .get(link)
            .map(function (res) { return res.json(); });
    };
    LivroService.prototype.busca = function (keyword, pagination) {
        var search = keyword.replace(/ /g, '+');
        return this.http
            .get(this.urlAll + search + '&maxResults=12&startIndex=' + pagination)
            .map(function (res) { return res.json(); });
    };
    return LivroService;
}());
LivroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LivroService);
exports.LivroService = LivroService;
//# sourceMappingURL=livro.service.js.map