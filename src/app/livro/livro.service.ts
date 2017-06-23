import { Http, Headers, Response } from '@angular/http';
import { LivroComponent } from './livro.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LivroService { 

    http: Http;
    headers: Headers;
    urlAll: string = 'https://www.googleapis.com/books/v1/volumes?q=';
    urlById: string = 'https://www.googleapis.com/books/v1/volumes/';
    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    buscaPorId(id: string): Observable<any> {
        return this.http
            .get(this.urlById + id)
            .map(res => res.json());
    }

    buscaPorLink(link: string): Observable<LivroComponent> {

        return this.http
            .get(link)
            .map(res => res.json());
    }

    busca(keyword:string, pagination:number): Observable<any>{
        let search = keyword.replace(/ /g,'+');
        
        return this.http
            .get(this.urlAll+search+'&maxResults=12&startIndex='+pagination)
            .map(res => res.json());
            

    }


    

}
