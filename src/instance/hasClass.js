import stringToArray from '../utils/stringToArray';

function hasClass( value ){
    if( !value || typeof value === "number" ) {
        throw Error( "There's a problem with value" );
    }

    let classes = stringToArray(value);
    
    if( classes.length ){
        for( var i = 0, elsLen = this.length; i < elsLen; i++ ){
            for( var j = 0, clsLen = classes.length; j < clsLen; j++ ){
                if( this[i].classList.contains( classes[j] ) ) return true;
            }
        }
        return false;
    }
}

export default hasClass;