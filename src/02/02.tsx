type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type TechnologiesType = {
    id: number,
    title: string
}


const user : StudentType= {
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

