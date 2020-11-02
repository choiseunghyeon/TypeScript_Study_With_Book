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

```typescript
let num: number = 1
let str: string = "choi"
let flag: boolean = true
let obj: object = {}

// 명시한 타입과 다른 타입의 값은 넣을 수 없다.
let num = "abc" // error
```

초깃값을 할당 할때 타입 추론(type inference)을 통해 타입을 정해주기도 한다.

```typescript
let num = 1 // number type
let str = "choi" // string type
let flag = true // boolean type
let obj = {} // object type
```

기타 타입

- any 타입
- undefined 타입

## Interface

object 타입의 경우 아무 object나 담을 수 있다.

```typescript
let obj: object = {}
obj = { project: "Smart Mirror", skill: "React" }
```

Interface는 아무 object나 담지 못하게 객체의 타입을 정의해준다.
즉 객체가 어떤 property와 method를 가져야 하는지 정의해 줄 수 있다.

```typescript
interface Person {
  name: string
  age: number
}

let choi: Person = { name: "choi", age: 24 }
let pizza: Person = { price: 13000 } // Person interface에서 명시한 속성과 속성 타입을 만족하지 못해서 error
```

**_선택 속성(optional property)_**  
객체를 정의할 때 필수 property도 있지만 있어도 되고 없어도 되는 property가 있을 수 있다.
이때, optional property로 만들어 줄 수 있다.

```typescript
interface Person {
  name: string
  age: number
  money?: number
}

let choi: Person = { name: "Choi", age: 24, money: 100 }
let lee: Person = { name: "Lee", age: 25 } // money property를 안넣어 줘도 상관없다.
```

**_익명 인터페이스(anonymous interface)_**

익명은 JS에서도 접할 수 있는 단어라 친숙하다. ex. 익명 함수

```typescript
// 객체의 타입을 interface로 지정하지 않아도 변수에 바로 객체 타입을 지정해줄 수가 있다.
let cart: { items: string[]; id: number } = { items: ["food1", "food2"], id: 1 }
```

## 객체와 클래스 p.67

TS는 C++, Java가 가지는 객체지향 언어의 특성을 제공해 줍니다.
접근 제한자(access modifier), 상속(extends), 구현(implements) 등

**_접근 제한자_**
접근 제한자는 public, private, protected가 있으며 기본은 public으로 설정되어 있다.
public은 클래스 인스턴스, 해당 클래스 내부, 자식 클래스 내부에서 사용할 수 있다.
protected는 해당 클래스 내부, 자식 클래스 내부에서 사용할 수 있다.
private는 해당 클래스 내부에서만 사용할 수 있다.

**_생성자(constructor)_**
클래스를 인스턴스화 할 때 실행되는 method로 초깃값 설정 및 필요한 작업 수행의 역할을 한다.

```typescript
class Person {
  name: string
  age?: number
  constructor(name: string, age?: number) {
    this.name = name
    this.age = age
  }
}

// 프로퍼티 선언 및 접근 제한 간단하게 하기
// 생성자 매개변수에 접근 제한자를 표시하면 위의 클래스 처럼 프로퍼티를 선언하고 할당한 것과 똑같이 동작한다.
class Person {
  constructor(public name: string, public age?: number) {}
}
```

**_인터페이스 구현_**
Interface를 Class에서 구현해서 사용할 수 있는데 이때 Interface에서 명시한 property나 method들은 Class에서 구현되어야 합니다.

```typescript
interface IPerson {
  name: string
  age?: number
  speak(): void
}
class Person implements IPerson {
  constructor(public name: string, public age?: number) {}
  speak(): void {
    console.log(`my name is ${this.name}`)
  }
}
let person = new Person("Choi")
person.speak()
```

**_...연산자의 두 가지 의미_**
...연산자는 사용되는 위치에 따라 잔여 연산자(rest operator) 또는 전개 연산자(spread operator)라고 부릅니다.
이 연산자는 JS에서 사용되는 연산자로 TS에서도 사용이 가능하다.

- 잔여 연산자

```typescript
let address: object = {
  country: "Korea",
  city: "Seoul",
  address1: "abcd",
  address2: "efg",
  address3: "hijk",
}
//       Korea Seoul { address1: 'abcd', address2: 'efg', address3: 'hijk' }
const { country, city, ...rest } = address
```

- 전개 연산자

```typescript
let part1 = { name: "Choi" },
  part2 = { age: 24 },
  part3 = { city: "Seoul" }
// 결과: { name: 'Choi', age: 24, city: 'Seoul' }
let merged = { ...part1, ...part2, ...part3 }
```

**_타입 단언(type assertion)_** p.76

사용 방법

1. (<타입>객체)
2. (객체 as 타입)

```typescript
interface Person {
  name: string
}
let obj: object = { name: "Choi" }
// object 타입은 name property가 없기 때문에 에러
obj.name

let name1 = (<Person>obj).name
let name2 = (obj as Person).name
```

## 함수(Function) p.79

**_매개변수(parameter)와 인수(argument)_**

```typescript
// 함수 선언문에서 괄호 안에 선언하는 변수가 매개변수(parameter)
function addTwo(one: number, two: number): number {
  return one + two
}
// 함수를 호출할 때 전달하는 1과 2는 인수(argument)
addTwo(1, 2)
```

함수 선언문에서 매개변수와 반환값에 대한 타입을 생략할 수 있지만 함수의 의도를 파악하기 어려울 수 있기 때문에
타입을 명시하는게 좋다.

**_함수 시그니처_**
변수에 타입이 있듯이 함수 또한 타입이 있는데, 함수의 타입을 함수 시그니처(function signature)라고 한다.
다음과 같은 형태로 표현한다. (param1 타입, param2 타입) => 반환값 타입

addTwo함수의 시그니처를 이용한 예는 다음과 같다.
let addTwo: (one: number, two: number) => number = function(one: number, two: number): number { return one+two };

**_선택적 매개변수(optional parameter)_**
매개변수도 ?를 붙여 선택적으로 받을 수 있습니다.

```typescript
function print(param1: string, param2?: string): void {
  console.log(param1, param2)
}
// 출력 내용: hello world
print("hello", "world")
// 출력 내용: hello undefined
print("hello")

// 함수 시그니처는 다음과 같다.
type OptionalPrintFunc = (param1: string, param2?: string) => void
```

**_함수 표현식(function expression) p.86_**

함수는 보통 다음과 같이 사용합니다. 다른 언어에서도 키워드만 틀리지 구조 자체는 비슷합니다.
JS에서는 아래와 같은 방식은 함수 선언문이라고 합니다.

```javascript
function add(a, b) {
  return a + b
}
```

그렇다면 함수 표현식은 무엇일까?
변수에 함수를 할당할 수 있는데 이것은 함수가 객체기 때문입니다.
JS에서는 함수와 변수를 구분하지 않는데 그 이유는 일등 함수(first-class function) 기능을 제공하는 함수형 프로그래밍 언어이기 때문입니다.

```javascript
let add = function (a, b) {
  return a + b
}
```

**_화살표 함수(arrow function expression)_**

TS에서 화살표 함수는 다음과 같이 쓸 수 있습니다.

```typescript
const add = (one: number, two: number): number => one + two
```

**_일등 함수 살펴보기 p.96_**

함수는 객체이고 변수에 담아서 사용할 수 있다는 것을 알았다.
그렇다면 함수는 다른 함수의 매개변수로 전달될 수 있는데 이렇게 매개변수 형태로 동작하는 함수를 콜백 함수(callback function)라고 합니다.

```javascript
const printLog = () => console.log("log...")
const init = (callback: () => void): void => {
  console.log("before log...")
  callback()
  console.log("after log...")
}
/*
before log...
log...
after log...
*/
init(printLog)
```

## 고차 함수(high-order functino)와 클로저(closure), 그리고 부분 함수 p. 98

react에서 사용했던 HOC, redux thunk의 코드들을 이해할 수 있었던 제일 재밌는 부분이었다.
고차 함수는 함수를 반환하는 함수를 의미한다.
함수는 변수에 할당되고 함수의 파라미터로 전달될 수 있는 함수 표현식 이므로 이러한 함수표현식은 함수에 의해 반환될 수 있다.
react에서 HOC(higher order component)는 컴포넌트를 반환하는 컴포넌트 이기 때문에 네이밍 에서 부터 어떤 의미인지 유추할 수 있다.
ex. react-router-dom에서 withRouter나 react-redux에서 connect함수를 생각하면 이해하기 편하다. 또는 redux-thunk의 thunk creator가 바로 고차 함수다.

클로저는 고차 함수 개념에서 반드시 필요한 개념으로 내부 함수에서 외부 함수의 값에 접근하여 사용하는 것을 말한다.
아래 코드에서는 anotherAdd함수 내부에서 외부 함수 add의 파라미터 one에 접근하여 사용하고 있다. 이와 같은 형태를 클로저(closure)라고 한다.

```typescript
type NumberToNumberFunc = (number) => number
const add = (one: number): NumberToNumberFunc => {
  const anotherAdd: NumberToNumberFunc = (two: number): number => one + two
  return anotherAdd
}

console.log(add(1)(2))
```
