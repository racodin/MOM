import findElement from './selector/findElement';
import stringToArray from './utils/stringToArray';

(function(window){
    "use strict";
    var version = "1.0.0";
    
    var meow = function( selector, context ){
        return new meow.fn.init( selector, context );
    }
    meow.fn = meow.prototype = {
        addClass: function(className){
            console.log("addClass", this);
            // var _element = findElement( this );
            // var _className = stringToArray( className );
            // if(_className.length){
            //     for(var i = _element.length; i--;){
            //         for(var j = _className.length; j--;){
            //             _element[i].classList.add(_className[j]);
            //         }
            //     }
            // }
            return this;
        },
        removeClass: function(element, className){
            console.log("addClass");
        },
    };

    var init = meow.fn.init = function(selector, context){
        console.log(this);
        //return findElement(selector);
    }
    init.prototype = meow.fn;

    meow( "#idName1" );
    window.meow = meow;

    return meow;
})(window);