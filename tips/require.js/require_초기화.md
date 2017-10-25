# require 초기화

```javascript	
//require 초기화
requirejs.config({
    baseUrl: 'js/lib', //기본 url
    paths: {
        app: '../app' //alias 지정
    }
})

requirejs(['jquery', 'canvas', 'app/sub'],
    function($, canvas, sub) {
        // jQuery, canvas, app/sub 모듈이 모두 로딩되고
	    // 이곳에서 부터 사용할 수 있습니다.
    }
)
```


Baseurl 설정 마지막에 / 붙이지 않는다
Load js 파일에는 / 맨앞 생략 .js 생략(base url을 탁ㅁㅎ)

```javascript	
define([ // 의존 모듈들을 나열한다. 모듈이 한 개라도 배열로 넘겨야 한다.  
    'js/util',
    'js/Ajax',
    'js/Event'
], function (util, Ajax, Event) { // 의존 모듈들은 순서대로 매개변수에 담긴다.
    // 의존 모듈들이 모두 로딩 완료되면 이 함수를 실행한다.
    // 초기화 영역
    var i = 0;
function increase() {
        i++;
    }
function get() {
      return i;
    }
// 외부에 노출할 함수들만 반환한다.
    return {
        increase: increase,
        get: get
    };
});
/* js/main.js */
require([  
    'js/foo'
], function (foo) {
    console.log(foo.get()); // 0
    foo.increase();
    console.log(foo.get()); // 1
<Foo.increase> (리액트 컴포넌트도 오브젝트값으로 호출 가능)
});
```