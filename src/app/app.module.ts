import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LivroModule } from './livro/livro.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { routing }  from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoModule } from './botao/botao.module';
import { Ng2Webstorage } from 'ng2-webstorage';
import { NgxPaginationModule } from 'ngx-pagination';
import { LivroDetalheModule } from './livroDetalhe/livroDetalhe.module';
import  * as $  from 'jquery'




@NgModule({
    imports: [
        CommonModule, 
        BrowserModule,
        LivroModule, 
        HttpModule, 
        PainelModule, 
        routing, 
        FormsModule, 
        ReactiveFormsModule,
        BotaoModule, 
        Ng2Webstorage,
        NgxPaginationModule,
        LivroDetalheModule        
    ],
    declarations: [ AppComponent,  ListagemComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }