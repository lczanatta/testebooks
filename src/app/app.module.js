"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var livro_module_1 = require("./livro/livro.module");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var painel_module_1 = require("./painel/painel.module");
var listagem_component_1 = require("./listagem/listagem.component");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
var botao_module_1 = require("./botao/botao.module");
var modal_module_1 = require("./modal/modal.module");
var ng2_webstorage_1 = require("ng2-webstorage");
var ngx_pagination_1 = require("ngx-pagination");
var livroDetalhe_module_1 = require("./livroDetalhe/livroDetalhe.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            livro_module_1.LivroModule,
            http_1.HttpModule,
            painel_module_1.PainelModule,
            app_routes_1.routing,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            botao_module_1.BotaoModule,
            modal_module_1.ModalModule,
            ng2_webstorage_1.Ng2Webstorage,
            ngx_pagination_1.NgxPaginationModule,
            livroDetalhe_module_1.LivroDetalheModule
        ],
        declarations: [app_component_1.AppComponent, listagem_component_1.ListagemComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map