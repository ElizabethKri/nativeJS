

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '102': {id: 102, name:'Natasha'},
    '103': {id: 103, name:'Valera'},
    '104': {id: 104, name:'Katya'}
}

//users[1]
let user = {id: 10, name: 'Igor'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'

export const usersArr = [
    {id: 101, name: 'Dimych'},
    {id: 102, name:'Natasha'},
    {id: 103, name:'Valera'},
    {id: 104, name:'Katya'}
]

usersArr.find(u=> u.id ===1 )
// let usersCopy = [...usersArr.filter(), user]
// let users = usersArr.filter(u => u.id !== user.id)

