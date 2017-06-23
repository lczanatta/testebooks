import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'escapeStringRegexp'
})


export class EscapeStringRegexp{

    matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;  
    process (str) {
      
        if (typeof str !== 'string') {
            throw new TypeError('Expected a string');
        }

        return str.replace(this.matchOperatorsRe, '\\$&');
    };

}
