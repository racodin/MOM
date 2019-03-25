import regexr from './regexr';

export default function stringToArray(value){
    "use strict";
    
    if ( Array.isArray( value ) ) {
        return value;
    }
    if ( typeof value === "string" ) {
        return value.match( regexr.rnothtmlwhite ) || [];
    }
    return [];
}