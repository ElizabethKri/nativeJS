export type CityType = {
    title: string,
    houses: Array<HouseType>,
    govermentBuilding: Array<GovermentBuildingType>,
    citizensNumber: number
}

export type HouseType = {
    buidedAt: number,
    repaired: boolean,
    address: AddressType1
}

export type AddressType1 = {
    number?: number
    street: StreetType1
}

export type StreetType1 = {
    title: string
}

export type GovermentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budgest: number
    staffCount: number
    address: AddressType1
}
