import {CityType, GovermentBuildingType, HouseType} from "../02/02.02";

const sum = (a: number, b: number) => {
    return a + b
}

const res = sum(2,4)

export const addSkill = (student: StudentType, skill: string) =>{
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType){
    s.isActive = true
}

export const studentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBugget = (building: GovermentBuildingType, budget: number) => {
    building.budgest += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (building: GovermentBuildingType, staff: number) => {
    building.staffCount -= staff
}

export function toHireStaff(building: GovermentBuildingType, staff: number){
    building.staffCount += staff
}

export function createMesage(city: CityType){
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} people`
}
