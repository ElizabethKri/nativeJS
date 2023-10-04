import {CityType} from "../02/02.02";
import {createMessages, getStreetsTitleOfGovermentsBuildings, getStreetsTitleOfHouses} from "./05.02";

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

test("list of streets titles of goverments buildings", () =>{
    let streets = getStreetsTitleOfGovermentsBuildings(city.govermentBuilding);

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe("Central Str");
    expect(streets[1]).toBe("South Str");
})

test("list of streets titles", () => {
    let streets = getStreetsTitleOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White Street");
    expect(streets[1]).toBe("Happy Street");
    expect(streets[2]).toBe("Happy Street");

})

test("create greeting messages for streets", () => {
    let messages = createMessages(city.houses);
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello guys from White Street");
    expect(messages[1]).toBe("Hello guys from Happy Street");
    expect(messages[2]).toBe("Hello guys from Happy Street");
})