import {addSkill, makeStudentActive, studentLiveIn} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        name: "Eliza",
        id: 1,
        age: 25,
        isActive: true,
        address: {
            streetTitle: "Nastavnikov",
            city: {
                title: "Spb",
                countryTitle: "Russia"
            }
        },

        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "HTML"
            },
            {
                id: 3,
                title: "HTML"
            },
        ]
    }
})

test('new tech skill should be added to student', () =>{
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JS');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();

})

test('student should be made active', () =>{
    expect(student.isActive).toBe(true);
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})

test('does student live in city?', () =>{

    let res1 = studentLiveIn(student, 'Moscow');
    let res2 = studentLiveIn(student, 'Spb');
    expect(res1).toBe(false);
    expect(res2).toBe(true);
})