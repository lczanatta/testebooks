"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var listagem_component_1 = require("./listagem/listagem.component");
var livroDetalhe_component_1 = require("./livroDetalhe/livroDetalhe.component");
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'livro/:id/:busca', component: livroDetalhe_component_1.LivroDetalheComponent },
    { path: '**', component: listagem_component_1.ListagemComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map