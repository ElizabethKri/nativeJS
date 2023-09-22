import {CityType} from "../02/02.02";
import {addMoneyToBugget, createMesage, repairHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buidedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {title: "White Street"}
            }
        },
            {
                buidedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy Street"}
                }
            },
            {
                buidedAt: 2021,
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

test("Budgest should be changed for HOSPITAL", () =>{
    addMoneyToBugget(city.govermentBuilding[0], -10000);
    expect(city.govermentBuilding[0].budgest).toBe(10000);

})

test("Budgest should be changed for FIRE-STATION", () =>{
    addMoneyToBugget(city.govermentBuilding[1], -10000);
    expect(city.govermentBuilding[1].budgest).toBe(40000);

})

// test("Houses should be desroyed", () => {
//     demolishHousesOnTheStreet(city, "Happy street");
//
//     expect(city.houses.length).toBe(1)
//     expect(city.houses[0].id).toBe(1)
// })

test("House should be repared", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy()

})

test("staff should be increased", () => {
    toFireStaff(city.govermentBuilding[0] , 20)

    expect(city.govermentBuilding[0].staffCount).toBe(180)
})

test("staff should be repeared", () => {
    toHireStaff(city.govermentBuilding[0] , 20)

    expect(city.govermentBuilding[0].staffCount).toBe(220)
})

test("Greating message should be correct for city", () => {
    const message = createMesage(city)

    expect(message).toBe("Hello New York citizens. I want you be happy. All 10000 people")
})