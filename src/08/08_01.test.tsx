
type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '102': {id: 102, name:'Natasha'},
        '103': {id: 103, name:'Valera'},
        '104': {id: 104, name:'Katya'}
    }

})

test("should update corresponding user", () =>{
    users['104'].name = 'Ekaterina'

    expect(users['104']).toEqual( {id: 104, name:'Ekaterina'} )
})

test("should delete corresponding user", () =>{
    delete users['104']
    expect(users['104']).toBeUndefined()
})