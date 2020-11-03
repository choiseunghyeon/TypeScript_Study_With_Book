import IPerson, { makePerson } from "./person/Person";

const testMakePerson = ():void => {
    let jane: IPerson = makePerson('Jane');
    let jack: IPerson = makePerson('Jack');
    console.log(jane, jack);
}

testMakePerson();


const numArr1: number[] = [1,2,3];
const numArr2: number[] = [4,5];
const numArr3: number[] = [...numArr1, ...numArr2];
//        1    2   [ 3, 4, 5 ]
const [first, two, ...rest] = numArr3;
console.log(first, two, rest)