import './utils/class2type';
import isFunction from './utils/isFunction';
import isWindow from './utils/isWindow';
import toType from './utils/toType';
import browser from './attributes/browser';
import isMobile from './attributes/isMobile';
import each from './attributes/each';
import addClass from './prototype/addClass';
import removeClass from './prototype/removeClass';
import toggleClass from './prototype/toggleClass';
import hasClass from './prototype/hasClass';

"use strict";

var version = "1.0.0";

var MOM = function( selector ){
    if( !(this instanceof MOM) ){
        return new MOM( selector );
    }

    if (!document.querySelectorAll) {
        document.querySelectorAll = function (selectors) {
            var style = document.createElement('style'), elements = [], element;
            document.documentElement.firstChild.appendChild(style);
            document._qsa = [];

            style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
            window.scrollBy(0, 0);
            style.parentNode.removeChild(style);

            while (document._qsa.length) {
                element = document._qsa.shift();
                element.style.removeAttribute('x-qsa');
                elements.push(element);
            }
            document._qsa = null;
            return elements;
        };
    }
    if (!document.querySelector) {
        document.querySelector = function (selectors) {
            var elements = document.querySelectorAll(selectors);
            return (elements.length) ? elements[0] : null;
        };
    }

    var elements = document.querySelectorAll( selector );
    elements.forEach(function(element, index){
        this[index] = element;
    }, this);
    this.length = elements.length;

    return this;
}

MOM.extend = MOM.prototype.extend = function extend(){ 
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

MOM.extend({
    // 사용중인 환경이 모바일인지를 확인하여 반환
    browser: browser,
    // 전달된 객체의 모든 요소에 대해 지정한 함수를 실행
    each: each,
    // 전달된 값이 배열인지 판별하여 반환
    isArray: Array.isArray,
    // 전달된 값이 함수인지 판별하여 반환
    isFunction: isFunction,
    // 사용중인 환경이 모바일인지를 확인하여 반환
    isMobile: isMobile,
    // 전달된 값이 window인지 판별하여 반환
    isWindow: isWindow,
    // 전달된 값을 JSON형식의 문자열로 반환
    parseJSON: JSON.parse,
    // 전달된 값의 타입을 반환
    type: toType
});

MOM.prototype.extend({
    // 현재 사용중인 MOM 버전
    MOM: version,
    constructor: MOM,
    // MOM 객체의 기본 길이는 0
    length: 0,
    // 일치하는 모든 요소에 대해 callback을 실행
    each: function( callback ){
        return MOM.each( this, callback )
    },
    // 선택 요소에 클래스명 추가
    addClass: addClass,
    // 선택 요소에 클래스명 삭제
    removeClass: removeClass,
    // 선택 요소에 클래스명 추가/삭제
    toggleClass: toggleClass,
    // 선택 요소에 클래스명 확인
    hasClass: hasClass
});

export default MOM;