import regexp from './regexp';

function stringToArray(value){
    "use strict";
    
    if ( Array.isArray( value ) ) {
        return value;
    }
    if ( typeof value === "string" ) {
        return value.match( regexp.rnothtmlwhite ) || [];
    }
    return [];
}

export default stringToArray;