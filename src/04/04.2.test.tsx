import {CityType} from "../02/02.02";
import {demolistHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04.2";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
            id: 1,
            buidedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {title: "White Street"}
            }
        },
            {
                buidedAt: 2008,
                id: 2,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy Street"}
                }
            },
            {
                buidedAt: 2021,
                id: 3,
                repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy Street"}
                }
            }],
        govermentBuilding: [
            {
                type: "HOSPITAL",
                budgest: 20000,
                staffCount: 200,
                address: {street: {title: "Central Str"}}
            },
            {
                type: "FIRE-STATION",
                budgest: 50000,
                staffCount: 1000,
                address: {street: {title: "South Str"}}
            }],
        citizensNumber: 10000
    }
})

test("Houses should be destroyed", () => {
    demolistHousesOnTheStreet(city, "Happy Street");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1)
})



test("buildings with correct staff count", () => {
    let buidings = getBuildingsWithStaffCountGreaterThen(city.govermentBuilding, 500)

    expect(buidings.length).toBe(1)
    expect(buidings[0].type).toBe("FIRE-STATION")
})
