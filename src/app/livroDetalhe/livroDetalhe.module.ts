import { NgModule } from '@angular/core';
import { LivroDetalheComponent }  from './livroDetalhe.component';
import { CommonModule, NgClass } from '@angular/common';
@NgModule({
    declarations: [ LivroDetalheComponent ],
    exports: [ LivroDetalheComponent ],
    imports:[CommonModule]
})
export class LivroDetalheModule { } 