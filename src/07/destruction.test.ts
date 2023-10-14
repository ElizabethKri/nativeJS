export type WomanType = {
    name: string
    age: number
    lessons: Array<{title: string, name?: string}>
    address: {
        street: {
            title: string
        }
    }
}

let woman: WomanType;
beforeEach(() => {
    woman = {
        name: "Elizabeth",
        age: 24,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: 'react'}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }

    }
})

test('', () => {

    // const age = woman.age;
    // const lessons = woman.lessons;

    const {age, lessons} = woman
    const {title} = woman.address.street

    expect(age).toBe(24);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Nezavisimosti street')

})

test('', () => {
    const l1 = woman.lessons[0]
    const l2 = woman.lessons[1]

    const [ , , ls3] = woman.lessons

    const [ls1, ls2] = woman.lessons

    const [les1, ...restlessons] = woman.lessons
    const [,leso1, ...restlesson] = woman.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(ls3.title).toBe('3')

    expect(restlessons.length).toBe(2)
    expect(restlessons[0].title).toBe('2')

    expect(restlesson.length).toBe(1)
    expect(restlesson[0].title).toBe('3')


    expect(restlesson[0].name).toBe('react')
    expect(restlesson[0]).toStrictEqual({title: "3", name: 'react'})



})