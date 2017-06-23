import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { LivroDetalheComponent } from './livroDetalhe/livroDetalhe.component';

const appRoutes: Routes = [

    { path: '', component: ListagemComponent },    
    { path: 'livro/:id/:busca', component: LivroDetalheComponent },
    { path: '**', component: ListagemComponent }
];

export const routing = RouterModule.forRoot(appRoutes);