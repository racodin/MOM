import findElement from './selector/findElement';
import stringToArray from './utils/stringToArray';

(function(window){
    "use strict";
    
    var isFunction = function isFunction( obj ) {   // 74
        // 지원: Chrome <=57, Firefox <=52
        // 일부 브라우저에서는 typeof가 <object> 요소에 대해 "function"을 반환
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    };
  


    var version = "1.0.0";

    // meow의 로컬 복사본 정의
    var meow = function( selector, context ){   // 135
        if( !(this instanceof meow) ){
            return new meow.fn.init(selector);
        }

        // meow 객체는 실제로 init 생성자
        // meow를 호출하면 init가 필요 (포함하지 않을 경우 오류가 발생)
        // return new meow.fn.init( selector, context );
    }

    meow.fn = meow.prototype = {    // 146
        // 현재 사용중인 meow 버전
        meow: version,

        constructor: meow,
        // meow 객체의 기본 길이는 0

        length: 0,

        // 일치하는 모든 요소에 대해 callback을 실행
        each: function( callback ){
            return meow.each( this, callback)
        }
    }

    meow.extend = meow.fn.extend = function(){  // 227
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[ 0 ] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // 깊은 복사 처리
        if ( typeof target === "boolean" ) {
            deep = target;

            // boolean and target 건너뛰기
            target = arguments[ i ] || {};
            i++;
        }

        // 대상이 문자 또는 어떤것 일경우에 처리 (깊은 복사에서 가능)
        if ( typeof target !== "object" && !isFunction( target ) ) target = {};

        // 하나의 인수만 전달되면 meow 자체를 확장
        if ( i === length ) {
            target = this;
            i--;
        }

        for ( ; i < length; i++ ) {

            // non-null/undefined의 값만 처리
            if ( ( options = arguments[ i ] ) != null ) {

                // 기본 객체 확장 
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];

                    // 무한 루프 방지
                    if ( target === copy ) continue;

                    // 일반 객체나 배열을 병합하는 경우 반복
                    if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
                        ( copyIsArray = Array.isArray( copy ) ) ) ) {

                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && Array.isArray( src ) ? src : [];

                        } else {
                            clone = src && jQuery.isPlainObject( src ) ? src : {};
                        }

                        // 원본 객체를 이동하거나 복제 절대 금지
                        target[ name ] = jQuery.extend( deep, clone, copy );

                    // 정의되지 않은 값을 가져올수 없음
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }

        // 수정된 객체를 반환
        return target; 
    }

    meow.extend({   // 296
        each: function( obj, callback ) {
            var length, i = 0;
            if ( isArrayLike( obj ) ) {
                length = obj.length;
                for ( ; i < length; i++ ) {
                    if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                        break;
                    }
                }
            } else {
                for ( i in obj ) {
                    if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                        break;
                    }
                }
            }
            return obj;
        },
    });


    var init = meow.fn.init = function( selector ){     // 2911

        var elements = document.querySelectorAll( selector );
        elements.forEach(function(element, index){
            this[index] = element;
        }, this);
        this.length = elements.length;

        return this;
    }
    init.prototype = meow.fn;   // 3012

    var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );    // 3191
        
    function stringToArray( value ) {   // 7795
        if ( Array.isArray( value ) ) {
            return value;
        }
        if ( typeof value === "string" ) {
            return value.match( rnothtmlwhite ) || [];
        }
        return [];
    }

    meow.fn.extend({    // 7805
        addClass: function( value ){
            var classes = stringToArray(value);
            
            if(classes.length){
                for( var i = 0, elsLen = this.length; i < elsLen; i++ ){
                    for( var j = 0, clsLen = classes.length; j < clsLen; j++ ){
                        this[i].classList.add( classes[j] );
                    }
                }
            }
        }
    });



    window.meow = meow;

    return meow;
})(window);