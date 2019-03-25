(function(window){
    "use strict";
    var version = "1.0.0";
    
    function meow( selector, context ){
        
    }

    function getElement(value){
        if (!document.querySelectorAll) {
            document.querySelectorAll = function (selectors) {
                var style = document.createElement('style'), elements = [], element;
                document.documentElement.firstChild.appendChild(style);
                document._qsa = [];

                style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
                window.scrollBy(0, 0);
                style.parentNode.removeChild(style);

                while (document._qsa.length) {
                    element = document._qsa.shift();
                    element.style.removeAttribute('x-qsa');
                    elements.push(element);
                }
                document._qsa = null;
                return elements;
            };
        }
        if (!document.querySelector) {
            document.querySelector = function (selectors) {
                var elements = document.querySelectorAll(selectors);
                return (elements.length) ? elements[0] : null;
            };
        }
        return document.querySelectorAll(value);
    }

    function stringToArray(value){
        if ( Array.isArray( value ) ) {
            return value;
        }
        if ( typeof value === "string" ) {
            return value.match( /[^\x20\t\r\n\f]+/g ) || [];
        }
        return [];
    }

    meow.prototype = {
        meow: version,
        addClass: function( element, className ){
            var _element = getElement( element );
            var _className = stringToArray( className );
            if(_className.length){
                for(var i = _element.length; i--;){
                    for(var j = _className.length; j--;){
                        _element[i].classList.add(_className[j]);
                    }
                }
            }
        },
        removeClass: function( element, className ){

        },
        toggleClass: function( element, className ){

        },
    }

    window.meow = new meow();

    return meow;

})(window)