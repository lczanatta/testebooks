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
var livro_component_1 = require("../livro/livro.component");
var livro_service_1 = require("../livro/livro.service");
var ListagemComponent = (function () {
    function ListagemComponent(livroService) {
        this.livros = [];
        this.mensagem = '';
        this.buscaString = '';
        this.total = 0;
        this.p = 1;
        this.livroService = livroService;
    }
    ListagemComponent.prototype.busca = function (pagination, event, termos) {
        var _this = this;
        if (termos === void 0) { termos = ''; }
        event.preventDefault();
        this.event = event;
        if (termos || this.buscaString) {
            this.buscaString = termos;
            this.livros = [];
            this.livroService
                .busca(this.buscaString, pagination)
                .subscribe(function (result) {
                _this.total = result.totalItems;
                result.items.forEach(function (livro) {
                    var livroAux = new livro_component_1.LivroComponent();
                    livroAux.id = livro.id;
                    livroAux.title = livro.volumeInfo.title;
                    if (livro.volumeInfo.imageLinks) {
                        livroAux.img = livro.volumeInfo.imageLinks.thumbnail;
                    }
                    else {
                        livroAux.img = '../../img/noimage.png';
                    }
                    _this.livros.push(livroAux);
                });
            });
        }
    };
    ListagemComponent.prototype.pagina = function (pagina) {
        this.p = pagina;
        this.busca(pagina - 1, this.event, this.buscaString);
    };
    return ListagemComponent;
}());
ListagemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'listagem',
        templateUrl: './listagem.component.html',
        styleUrls: ['./listagem.component.css']
    }),
    __metadata("design:paramtypes", [livro_service_1.LivroService])
], ListagemComponent);
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map