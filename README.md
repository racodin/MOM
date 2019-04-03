# 👸 MOM(Multi Object Model) JS 
MOM JS는 jQuery의 구조를 참고하여 나만의 Library로 제작한 것 입니다. 

현재 개발진행중이며 지속적으로 업데이트를 해볼 생각입니다.

## 📃 MOM Document
---
### 📚 prototype
---
> ### .addClass( className )
> * @param { String | Array } 일치하는 각 요소에 지정한 클래스 이름이 추가
> ```
> MOM("element").addClass("className");
> ```

> ### .removeClass( className )
> * @param { String | Array } 일치하는 각 요소에 지정한 클래스 이름이 삭제
> ```
> MOM("element").removeClass("className");
> ```

> ### .toggleClass( className )
> * @param { String } 일치하는 각 요소에 지정한 클래스 이름이 추가/삭제
> ```
> MOM("element").removeClass("className");
> ```

> ### .hasClass( className )
> * @param { String } 일치하는 각 요소에 지정한 클래스 이름이 있는지 확인
> ```
> MOM("element").removeClass("className");
> ```


### 📚 attributes
---
> ### .isMobile()
> * @return { Boolean } 사용중인 환경이 모바일인지를 확인하여 반환
> ```
> MOM.isMobile();
> ```