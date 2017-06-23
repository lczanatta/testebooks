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
var livro_service_1 = require("../livro/livro.service");
var livro_component_1 = require("../livro/livro.component");
var router_1 = require("@angular/router");
var ng2_webstorage_1 = require("ng2-webstorage");
var LivroDetalheComponent = (function () {
    function LivroDetalheComponent(livroService, route, router) {
        var _this = this;
        this.livro = new livro_component_1.LivroComponent();
        this.livroService = livroService;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
            _this.livro.id = params['id'];
            _this.busca = params['busca'];
        });
        livroService.buscaPorId(this.livro.id)
            .subscribe(function (livroRet) {
            _this.livro.title = livroRet.volumeInfo.title;
            _this.livro.img = livroRet.volumeInfo.imageLinks.medium;
            _this.livro.autor = livroRet.volumeInfo.authors.join(',');
            _this.livro.ano = new Date(livroRet.volumeInfo.publishedDate).getFullYear().toString();
            _this.livro.descricao = livroRet.volumeInfo.description;
            _this.livro.paginas = livroRet.volumeInfo.printedPageCount;
            if (livroRet.volumeInfo.categories) {
                _this.livro.categorias = livroRet.volumeInfo.categories.join(',');
            }
            else {
                _this.livro.categorias = '';
            }
            _this.livro.publicadora = livroRet.volumeInfo.publisher;
            _this.curtido = _this.curtidos.includes(_this.livro.id);
            if (_this.curtido) {
                _this.classe = 'btn-danger';
                _this.curtirTexto = 'Descurtir';
            }
            else {
                _this.classe = 'btn-success';
                _this.curtirTexto = 'Curtir';
            }
            _this.buscaTituloDesc();
        });
    }
    LivroDetalheComponent.prototype.buscaTituloDesc = function () {
        var _this = this;
        this.livro.title = this.livro.title.toLowerCase();
        this.busca = this.busca.toLowerCase();
        var termos = this.busca.split(' ');
        termos.forEach(function (elemento) {
            _this.livro.title = _this.livro.title.replace(elemento, ('<b>' + elemento + '</b>'));
        });
        this.livro.title = this.livro.title.charAt(0).toUpperCase() + this.livro.title.slice(1);
        this.livro.descricao = this.livro.descricao.toLowerCase();
        termos.forEach(function (elemento) {
            _this.livro.descricao = _this.livro.descricao.replace(elemento, ('<b>' + elemento + '</b>'));
        });
        this.livro.descricao = this.livro.descricao.charAt(0).toUpperCase() + this.livro.descricao.slice(1);
    };
    LivroDetalheComponent.prototype.curtir = function () {
        var lista = this.curtidos;
        if (this.curtidos.includes(this.livro.id)) {
            var index = lista.indexOf(this.livro.id);
            lista.splice(index, 1);
            this.classe = 'btn-success';
            this.curtirTexto = 'Curtir';
        }
        else {
            lista.push(this.livro.id);
            this.classe = 'btn-danger';
            this.curtirTexto = 'Descurtir';
        }
        this.curtidos = lista;
    };
    return LivroDetalheComponent;
}());
__decorate([
    ng2_webstorage_1.LocalStorage(),
    __metadata("design:type", Object)
], LivroDetalheComponent.prototype, "curtidos", void 0);
__decorate([
    ng2_webstorage_1.LocalStorage(),
    __metadata("design:type", Boolean)
], LivroDetalheComponent.prototype, "teste", void 0);
LivroDetalheComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'livro-descricao',
        templateUrl: './livroDetalhe.Component.html',
        styleUrls: ['./livroDetalhe.component.css']
    }),
    __metadata("design:paramtypes", [livro_service_1.LivroService, router_1.ActivatedRoute, router_1.Router])
], LivroDetalheComponent);
exports.LivroDetalheComponent = LivroDetalheComponent;
//# sourceMappingURL=livroDetalhe.component.js.map