import IPerson, { makePerson } from "./person/Person";

const testMakePerson = ():void => {
    let jane: IPerson = makePerson('Jane');
    let jack: IPerson = makePerson('Jack');
    console.log(jane, jack);
}

testMakePerson();

type NumberToNumberFunc = (number) => number;
const add = (one: number): NumberToNumberFunc => {
    return (two: number): number => one+two;
}

console.log(add(1)(2));