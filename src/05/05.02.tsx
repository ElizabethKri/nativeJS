import {GovermentBuildingType, HouseType} from "../02/02.02";

export const getStreetsTitleOfGovermentsBuildings = (buidings: Array<GovermentBuildingType>) =>{
    return buidings.map(b => b.address.street.title)
}

export const getStreetsTitleOfHouses = (houses: Array<HouseType>) =>{
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) =>{
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}