import {multi, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(()=> {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {

    const result1 = sum(a,b);
    b = 100
    const result2 = sum(b,c);

    expect(result1).toBe(3)
    expect(result2).toBe(103)
})


test('sum should be correct', () => {

    //data
    const a = 1
    const b = 2
    const c = 3

    //action
    const result1 = sum(a,b);
    const result2 = sum(b,c);

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)

})


test('multi should be correct', () =>{

    const a = 1
    const b = 2
    const c = 3

    const result1 = multi(a,b);

    expect(result1).toBe(2)
})