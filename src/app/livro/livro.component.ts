import  { Component, Input } from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'livro',
    templateUrl:'./livro.component.html',
    styleUrls:['./livro.component.css']
})

export class LivroComponent{
    @Input() title: string;
    @Input() autor: string;
    @Input() img:string;
    @Input() id:string;
    ano:string;
    descricao:string;
    publicadora:string;
    paginas:number;
    categorias:string;
}