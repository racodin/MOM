import stringToArray from '../utils/stringToArray';

function hasClass( value ){
    if( !value || typeof value === "number" ) {
        throw Error( "There's a problem with value" );
    }

    let classes = stringToArray(value);
    
    if( classes.length ){
        var result;
        for( var i = 0, elsLen = this.length; i < elsLen; i++ ){
            classes.forEach(function( name ){
                if(result) return;
                result = this[i].classList.contains( name );
            }, this);
        }
        return result;
    }
}

export default hasClass;