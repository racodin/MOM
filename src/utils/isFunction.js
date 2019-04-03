function isFunction( obj ) {   // 74
    "use strict";
    
    // 지원: Chrome <=57, Firefox <=52
    // 일부 브라우저에서는 typeof가 <object> 요소에 대해 "function"을 반환
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    return typeof obj === "function" && typeof obj.nodeType !== "number";
};

export default isFunction;