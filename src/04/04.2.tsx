import {CityType, GovermentBuildingType} from "../02/02.02";

export function demolistHousesOnTheStreet(city: CityType, street: string){
    city.houses = city.houses.filter(h=> h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovermentBuildingType>, number: number) =>{
    return buildings.filter(b => b.staffCount > number)
}