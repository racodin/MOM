import stringToArray from '../utils/stringToArray';

function removeClass( value ){
    if( !value || typeof value === "number" ) {
        throw Error( "There's a problem with value" );
    }

    let classes = stringToArray(value);
    
    if( classes.length ){
        for( var i = 0, elsLen = this.length; i < elsLen; i++ ){
            classes.forEach(function( name ){
                this[i].classList.remove( name );
            }, this);
        }
    }
    return this;
}

export default removeClass;