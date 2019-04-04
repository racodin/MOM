# MOM(Multi Object Model) JS 👸
MOM JS는 jQuery의 구조를 참고하여 나만의 Library로 제작한 것 입니다. 

현재 개발진행중이며 지속적으로 업데이트를 해볼 생각입니다.

## 📃 MOM Document
### MOM JS의 다양한 기능을 살펴 볼수 있습니다.
---
### 📚 prototype
---

### .addClass( value ) 
> ##### @param value { String | Array } 
###### 일치하는 각 요소에 지정한 클래스 이름이 추가
```
MOM("element").addClass("className");
```
###### 클래스명을 다중으로 선언할 수도 있습니다.
``` 
MOM("element").addClass("className1 className2 className3...");

MOM("element").addClass([className1, className2, className3...]);
```
---

### .removeClass( value )
> ##### @param value { String | Array } 
###### 일치하는 각 요소에 지정한 클래스 이름이 삭제
```
MOM("element").removeClass("className");
```
###### 클래스명을 다중으로 선언할 수도 있습니다.
``` 
MOM("element").removeClass("className1 className2 className3...");

MOM("element").removeClass([className1, className2, className3...]);
```
---

### .toggleClass( value )
> ##### @param value { String } 
###### 일치하는 각 요소에 지정한 클래스 이름이 추가/삭제
```
MOM("element").removeClass("className");
```
---

### .hasClass( value )
> ##### @param value { String } 
###### 일치하는 각 요소에 지정한 클래스 이름이 있는지 확인
```
MOM("element").removeClass("className");
```
---

### .each( callback )
> ##### @param callback { Function } 
###### 일치하는 모든 요소에 대해 지정한 함수를 실행
```
MOM("element").each(callback);
```

---
### 📚 attributes
---
### .browser
> ##### @return { Object } 
###### 사용중인 브라우저의 이름과 버전을 반환
```
MOM.browser;            // { name: "Chrome", version: 73 }
MOM.browser.name;       // Chrome
MOM.browser.version;    // 73
```

---
### .each( value, callback )
> ##### @param value { Array, Object } 
> ##### @param callback { Function } 
###### 전달된 객체의 모든 요소에 대해 지정한 함수를 실행
```
MOM.each( [14 , 32], function( index, value ){
    console.log( index + ": " + value );    // { 0: 14, 1: 32 }
} );

MOM.each( {"name": "MOM", version: "1.0.0"}, function( key, value ) {
    console.log( key + ": " + value );      // { name: MOM, version: 1.0.0 }
});
```

---
### .isArray( value )
> ##### @param value { Object } 
> ##### @return { Boolean } 
###### 전달된 값이 배열인지 판별하여 반환
```
var arr = [1,2,3,4];
MOM.isArray( arr );     // true
```

---
### .isFunction( value )
> ##### @param value { Any } 
> ##### @return { Boolean } 
###### 전달된 값이 함수인지 판별하여 반환
```
function MOM(){}
MOM.isFunction( MOM );      // true
```

---
### .isWindow( value )
> ##### @param value { Object } 
> ##### @return { Boolean } 
###### 전달된 값이 window인지 판별하여 반환
```
MOM.isWindow( window );     // true
```

---
### .isMobile()
> ##### @return { Boolean } 
###### 사용중인 환경이 모바일인지를 확인하여 반환
```
MOM.isMobile();     // true or false
```

---
### .parseJSON( value )
> ##### @param value { String } 
###### 전달된 값을 JSON형식의 문자열로 반환
```
var obj = MOM.parseJSON( '{ "name": "MOM" }' );
console.log( obj.name === "MOM" );  // true
```

---
### .type( value )
> ##### @param value { Any } 
###### 전달된 값의 타입을 반환
```
MOM.type(undefined);    // "undefined"
MOM.type(true);         // "boolean"
MOM.type(3);            // "number"
```
