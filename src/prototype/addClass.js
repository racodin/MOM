import stringToArray from '../utils/stringToArray';

function addClass( value ){
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
}

export default addClass;