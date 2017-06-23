import { Component } from '@angular/core';
import { LivroService } from '../livro/livro.service';
import { LivroComponent } from '../livro/livro.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage, SessionStorageService } from 'ng2-webstorage';

@Component({
    moduleId:module.id,
    selector:'livro-descricao',
    templateUrl: './livroDetalhe.Component.html',
    styleUrls:['./livroDetalhe.component.css']
})

export class LivroDetalheComponent  {

    livro: LivroComponent = new LivroComponent();
    livroService :LivroService;
    route: ActivatedRoute;
    router: Router;
    classe:string;
    

    @LocalStorage()	public curtidos;
    @LocalStorage() teste:boolean;
    curtirTexto:string;
    curtido:boolean;
    busca:string;

    constructor(livroService: LivroService, route: ActivatedRoute, router: Router){
        this.livroService = livroService;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(params =>{
            this.livro.id = params['id'];
            this.busca = params['busca'];
        });
        livroService.buscaPorId(this.livro.id)
            .subscribe(livroRet =>{

                this.livro.title = livroRet.volumeInfo.title;
                this.livro.img = livroRet.volumeInfo.imageLinks.medium;
                this.livro.autor = livroRet.volumeInfo.authors.join(',');
                this.livro.ano = new Date(livroRet.volumeInfo.publishedDate).getFullYear().toString();
                this.livro.descricao = livroRet.volumeInfo.description;
                this.livro.paginas = livroRet.volumeInfo.printedPageCount;

                if(livroRet.volumeInfo.categories){
                    this.livro.categorias = livroRet.volumeInfo.categories.join(',');
                }else{
                    this.livro.categorias = '';
                }
                
                this.livro.publicadora = livroRet.volumeInfo.publisher;
                
                this.curtido = this.curtidos.includes(this.livro.id);

                if(this.curtido){

                    this.classe = 'btn-danger';
                    this.curtirTexto ='Descurtir';
                }else{
                    this.classe = 'btn-success';
                    this.curtirTexto ='Curtir';
                }                
                this.buscaTituloDesc();
            });
    }

    buscaTituloDesc(){
        this.livro.title = this.livro.title.toLowerCase();
        this.busca = this.busca.toLowerCase();
        let termos = this.busca.split(' ');
        termos.forEach(elemento =>{
            this.livro.title = this.livro.title.replace(elemento,('<b>'+elemento+'</b>'));
        });
        this.livro.title = this.livro.title.charAt(0).toUpperCase() + this.livro.title.slice(1);

        this.livro.descricao = this.livro.descricao.toLowerCase();
        termos.forEach(elemento =>{
            this.livro.descricao = this.livro.descricao.replace(elemento,('<b>'+elemento+'</b>'));
        });
        this.livro.descricao = this.livro.descricao.charAt(0).toUpperCase() + this.livro.descricao.slice(1);

    }

    
        

    

    curtir(){
        let lista = this.curtidos;
        if(this.curtidos.includes(this.livro.id)){            
            let index = lista.indexOf(this.livro.id);
            lista.splice(index,1);
            this.classe = 'btn-success';
            this.curtirTexto ='Curtir';
        }else{
            
            lista.push(this.livro.id);
            this.classe = 'btn-danger';
            this.curtirTexto ='Descurtir';
            
        }
        this.curtidos = lista;
    }

    

}