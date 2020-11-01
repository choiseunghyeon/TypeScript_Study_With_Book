import IPerson, { makePerson } from "./person/Person";

const testMakePerson = ():void => {
    let jane: IPerson = makePerson('Jane');
    let jack: IPerson = makePerson('Jack');
    console.log(jane, jack);
}

testMakePerson();

type OptionalPrintFunc = (param1: string, param2?: string) => void;

function print(param1: string, param2?: string): void {
    console.log(param1, param2);
}
print('hello', 'world');
print('hello');

const print2: OptionalPrintFunc = (param1: string, param2?: string): void => {
    console.log(param1, param2);
}
print2('hello', 'world');
print2('hello');   