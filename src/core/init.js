import meow from '../meow';

var init = meow.fn.init = function( selector ){     // 2911
    "use strict";

    var elements = document.querySelectorAll( selector );
    elements.forEach(function(element, index){
        this[index] = element;
    }, this);
    this.length = elements.length;

    return this;
}
init.prototype = meow.fn;   // 3012

