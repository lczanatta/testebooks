import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';
import { EscapeStringRegexp } from './escapeStringRegexp.component';

@Directive({
  selector: '[appColorSearchedLetters]'
})
export class ColorSearchedLettersDirective implements OnInit {
    @Input() search: string;
    @Input() text: string;
    @Input() classToApply: string;
    escape:EscapeStringRegexp;
    constructor(private el: ElementRef, private renderer: Renderer) {
        this.escape = new EscapeStringRegexp();
    }
  
    ngOnInit() {
        if (typeof this.classToApply === 'undefined') {
        this.classToApply = '';
        }

        if (typeof this.search === 'undefined') {
        this.renderer.setElementProperty(this.el.nativeElement, 'innerHTML', this.text);
        return;
        }

        let search = this.escape.process(this.search.toString());
        this.renderer.setElementProperty(this.el.nativeElement, 'innerHTML', this.replace(this.text, search));
    }

    replace(txt: string, search: string) {
        let searchRgx = new RegExp('('+search+')', 'gi');

        return txt.replace(searchRgx, `<span class="${this.classToApply}">$1</span>`);
    }
}