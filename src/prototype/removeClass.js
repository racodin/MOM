import stringToArray from '../utils/stringToArray';

function removeClass( value ){
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
}

export default removeClass;