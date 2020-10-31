# TypeScript_Study_With_Book

## 컴파일러와 트랜스파일

사실 컴파일러와 트랜스파일은 구분된 용어이다.

컴파일러는 사람이 읽을 수 있는 C, C++과 같은 언어로 작성된 소스코드를 기계가 이해할 수 있는 0,1의 바이너리 파일로 변환해주는 작업을 해준다.  
트랜스파일은 주로 babel이나 타입스크립트 컴파일러 처럼 어떤 언어에서 다른 언어로 변환 시켜주는 작업을 말한다.  
하지만, 해당 책에서는 트랜스파일도 컴파일로 자주 말하기 때문에 책 전반에서 컴파일이라는 용어로 통일 시킨다고 한다.

## 타입스크립트 컴파일러 설치

**_타입스크립트 컴파일러는 node.js 환경에서만 동작한다._**

```
> npm i -g typescript
// hello.ts를 hello.js로 컴파일
> tsc hello.ts
// 컴파일된 hello.js를 실행
> node hello.js
```

```
// typescript 컴파일 및 자동 실행하기 위해 설치
> npm i -g ts-node
// 타입스크립트를 자동으로 컴파일하여 실행 시킴
> ts-node hello.ts
```

## 타입스크립트 컴파일러 설정

타입스크립트 컴파일러는 tsconfig.js의 내용을 보고 ts 파일을 어떻게 컴파일 할지 판단한다.

```
// tsconfig.js 생성
> tsc --init
```

**_tsconfig.js 설명_**

module  
웹 브라우저와 node.js 환경에서 모듈은 물리적으로 동작하는 방식이 다르다.
웹 브라우저에서는 AMD(asynchronous module definitio) node.js는 CommonJS 방식으로 동작
따라서 웹 브라우저에서 동작할 경우 키값은 amd node.js 환경에서는 commonjs로 설정

moduleResolution  
module 키값이 amd면 moduleResolution의 키값은 classic
module 키값이 commonjs면 moduleResolution의 키값은 node로 설정

target  
트랜스파일할 자바스크립트의 버전 설정 기본 값은 es5

esModuleInterop  
JS Library중에 웹 브라우저에서 동작한다고 가정하고 만들어진 것들이 있는데 이들이 commonjs에서 동작하는 타입스크립트 코드에 혼란을 줄 수 있다.
따라서 이런 웹 브라우저에서 동작한다고 가정하고 만들어진 Library가 동작할려면 esModuleInterop키의 키값을 true로 해야한다.

sourceMap  
JS 코드가 TS 코드 어디에 해당하는지 알려주는 소스맵 파일 주로 디버깅할 때 사용

downlevelIteration  
생성기 구문이 정상 작동하려면 true로 설정

## Type Annotation p.61

다음과 같이 변수의 타입을 명시할 수 있다.

```javascript
let num: number = 1
let str: string = "choi"
let flag: boolean = true
let obj: object = { name: "Choi", age: 24 }

// 명시한 타입과 다른 타입의 값은 넣을 수 없다.
let num = "abc" // error
```

초깃값을 할당 할때 타입 추론(type inference)을 통해 타입을 정해주기도 한다.

```javascript
let num = 1 // number type
let str = "choi" // string type
let flag = true // boolean type
let obj = { name: "Choi", age: 24 } // object type
```

기타 타입

- any 타입
- undefined 타입

## Interface

object 타입의 경우 아무 object나 담을 수 있다.

```javascript
let obj: object = { name: "Choi", age: 24 }
obj = { project: "Smart Mirror", skill: "React" }
```

Interface는 아무 object나 담지 못하게 객체의 타입을 정의해준다.

```javascript
interface Person {
  name: string;
  age: number;
}

let choi: Person = { name: "choi", age: 24 }
let pizza: Person = { price: 13000 } // Person interface에서 명시한 속성과 속성 타입을 만족하지 못해서 error
```
