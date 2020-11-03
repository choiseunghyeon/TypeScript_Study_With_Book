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
// 전개 연산자
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

for...of 문은 배열의 아이템 값을 순회합니다. for Each랑 비슷하다.

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
