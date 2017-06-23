import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit { 
    

    @Input() titulo: string;
    @Input() busca: string;
    elemento: ElementRef;

    constructor(elemento: ElementRef) {

        this.elemento = elemento;

    }

    ngOnInit() {
        this.titulo = this.titulo.toLowerCase();//this.titulo.toLowerCase().replace(/busca.toLowerCase()/g,('<b>'+this.busca.toLowerCase()+'</b>'));
        this.busca = this.busca.toLowerCase();
        let termos = this.busca.split(' ');
        termos.forEach(elemento =>{
            this.titulo = this.titulo.replace(elemento,('<b>'+elemento+'</b>'));
        });
        
        this.titulo = this.titulo.charAt(0).toUpperCase() + this.titulo.slice(1);
    }
    

    fadeOut(cb) {

        $(this.elemento.nativeElement).fadeOut(cb);
    }

}

