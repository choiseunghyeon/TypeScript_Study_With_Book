## 배열 p.110

JS에서 배열은 Array 클래스의 인스턴스이다.
즉 배열은 Array클래스의 인스턴스이고 클래스의 인스턴스는 객체이기 때문에 배열은 객체이다.

```javascript
let arr = new Array()
```

**_ 배열 타입 _**
다음과 같이 원소 타입이 number이면 number[] string이면 string[]와 같이 '원소타입[]' 로 표현한다.

```typescript
const num: number[] = [1, 2, 3]
const str: string[] = ["choi", "lee", "park"]
interface Person {
  name: string
  age: number
}
const people: Person[] = [
  { name: "choi", age: 24 },
  { name: "Lee", age: 25 },
]

console.log(num, str, people)
```

**_ 배열의 비구조화 할당과 전개 연산자 _**
객체와 똑같이 비구조화 할당이 가능하다.

```typescript
const numArr1: number[] = [1, 2, 3]
const numArr2: number[] = [4, 5]
// 전개 연산자 및 결과 : [1,2,3,4,5]
const numArr3: number[] = [...numArr1, ...numArr2]
// 잔여연산자 및 결과: 1    2   [ 3, 4, 5 ]
const [first, two, ...rest] = numArr3
```

**_ for...in 문 그리고 for...of 문 _**
for...in 문은 객체를 대상으로 사용할 수 있지만 배열도 객체이므로 사용할 수 있다.
for(변수 in 객체) {} 의 형태로 사용하며 배열의 경우 변수에 배열 index 객체의 경우 key가 들어간다.

```typescript
interface Person {
  name: string
  age: number
}
const numArr: number[] = [10, 20, 30]
const person: Person = { name: "Choi", age: 24 }
/*
    idx: 0 number: 10
    idx: 1 number: 20
    idx: 2 number: 30
*/
for (let idx in numArr) {
  console.log(`idx: ${idx} number: ${numArr[idx]}`)
}
/*
    key: name value: Choi
    key: age value: 24
*/
for (let key in person) {
  console.log(`key: ${key} value: ${person[key]}`)
}
```

for...of 문은 배열의 아이템 값을 순회합니다. forEach랑 비슷하다.

```javascript
const numArr: number[] = [10, 20, 30]
/*
num: 10
num: 20
num: 30
*/
for (let num of numArr) {
  console.log(`num: ${num}`)
}
```

**_ Generic _**
타입은 파라미터로 받아와서 타입을 정해준다.
선언 시점에 타입을 정해주는 것이 아니라 타입을 파라미터로 받아와서 생성 시점 또는 실행 시점에 타입이 결정되게 한다.

```typescript
function getFirstOne<T>(items: T[]): T {
  return items[0]
}
// 함수 시그니처
// function getFirstOne<number>(items: number[]): number
getFirstOne<number>([1, 2, 3])

// 타입 추론
// function getFirstOne<string>(items: string[]): string
getFirstOne(["a", "b", "c"])

const getLastOne = <T>(items: T[]): T => {
  const lastIndex = items.length - 1
  return items[lastIndex]
}

// 함수 시그니처
//const getLastOne: <number>(items: number[]) => number
getLastOne<number>([1, 2, 3])
```

**_ 선언형 프로그래밍(declarative programming) _**
함수형 프로그래밍은 선언형 프로그래밍과 깊은 관련이 있다.
선언형 프로그래밍에서 배열은 절대적으로 필요한 문법 기능이다.

선언형 프로그래밍은 명령형 프로그래밍(imperative programming)과 비교되지만 대등하게 비교할 대상은 아니다.
명령형은 좀 더 CPU 친화적인 저수준(low-level) 구현 방식이고 선언형은 인간에게 좀 더 친화적인 고수준(high-level) 구현 방식이다.

**_ 순수 함수 _**
함수형 프로그래밍에서 함수는 순수 함수(pure function)이어야 한다.
여기서 순수 함수란 같은 input이 주어지면 언제나 똑같은 output이 나와야 한다.
함수 내부에서 랜덤한 값, 비동기 요청, 전역 변수 사용과 같이 외부적인 요인이 존재하면 안된다.
redux reducer를 생각하면 쉽다.

**_ 튜플 _**

```typescript
// [ 24, 'Choi' ]
const tuple: [number, string] = [24, "Choi"]
```
