import meow from '../meow';
import stringToArray from '../utils/stringToArray';

meow.fn.extend({    // 7805
    addClass: function( value ){
        if(!value){
            console.error( value );
        }

        var classes = stringToArray(value);
        
        if(classes.length){
            for( var i = 0, elsLen = this.length; i < elsLen; i++ ){
                classes.forEach(function( name ){
                    this[i].classList.add( name );
                }, this);
            }
        }
        return this;
    },
    removeClass: function( value ){
        if(!value){
            console.error( value );
        }

        var classes = stringToArray(value);
        
        if(classes.length){
            for( var i = 0, elsLen = this.length; i < elsLen; i++ ){
                classes.forEach(function( name ){
                    this[i].classList.remove( name );
                }, this);
            }
        }
        return this;
    },
    toggleClass: function( value ){

    },
    hasClass: function( value ){
        if(!value){
            console.error( value );
        }

        var classes = stringToArray(value);
        
        for( var i = 0, elsLen = this.length; i < elsLen; i++ ){
            if( ( this[i].classList.value ).indexOf( classes ) > -1 ){
                return true;
            }
        }
        return false;
    }
});
