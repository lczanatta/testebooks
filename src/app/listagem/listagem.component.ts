import { Component } from '@angular/core';
import { PainelComponent } from '../painel/painel.component';
import { LivroComponent } from '../livro/livro.component';
import { LivroService } from '../livro/livro.service';


@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

    livros: LivroComponent[] = [];
    mensagem: string = '';
    livroService: LivroService;
    buscaString:string ='';
    total:number = 0;
    p: number = 1;
    event;
    

    
    constructor(livroService: LivroService){
        
        this.livroService = livroService;
        
       
    }

    busca(pagination:number, event, termos:string=''){
        
        event.preventDefault();
        this.event = event;
        if(termos||this.buscaString){         
            this.buscaString = termos;            
            this.livros = [];
            this.livroService
                .busca(this.buscaString, pagination)
                .subscribe(result =>{
                    this.total = result.totalItems;                    
                    result.items.forEach(livro =>{
                        let livroAux = new LivroComponent();
                        livroAux.id = livro.id;
                        livroAux.title = livro.volumeInfo.title;
                        if(livro.volumeInfo.imageLinks){
                            livroAux.img = livro.volumeInfo.imageLinks.thumbnail;
                        }else{
                            livroAux.img = '../../img/noimage.png';
                        }
                        this.livros.push(livroAux);                        
                    });                    
                });
        }
    }

    pagina(pagina){
        this.p = pagina;
        this.busca(pagina-1,this.event,this.buscaString);
    }

 }