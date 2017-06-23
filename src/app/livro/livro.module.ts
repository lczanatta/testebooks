import { NgModule } from '@angular/core';
import { LivroComponent } from './livro.component';
import { LivroService } from './livro.service';

@NgModule({
    declarations: [ LivroComponent],
    exports: [ LivroComponent ],
    providers: [ LivroService ]
})
export class LivroModule { }