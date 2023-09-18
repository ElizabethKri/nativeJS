import {CityType} from "./02.02";

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

test("test city should contains 3 houses", () => {

    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buidedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe("White Street")

    expect(city.houses[1].buidedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe("Happy Street")

    expect(city.houses[2].buidedAt).toBe(2021)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe("Happy Street")

})

test("test city should contains hospital and fire station", () => {
    expect(city.govermentBuilding.length).toBe(2);

    expect(city.govermentBuilding[0].type).toBe("HOSPITAL");
    expect(city.govermentBuilding[0].budgest).toBe(20000);
    expect(city.govermentBuilding[0].staffCount).toBe(200);
    expect(city.govermentBuilding[0].address.street.title).toBe("Central Str");

    expect(city.govermentBuilding[1].type).toBe("FIRE-STATION");
    expect(city.govermentBuilding[1].budgest).toBe(50000);
    expect(city.govermentBuilding[1].staffCount).toBe(1000);
    expect(city.govermentBuilding[1].address.street.title).toBe("South Str");

})