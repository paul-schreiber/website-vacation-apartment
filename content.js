export default {
    name: "Pension Mustermann",
    logo: "logo-mustermann.png",
    address: {
        street: "Musterstraße",
        streetNumber: 1,
        zipCode: "0815",
        city: "Musterhausen"
    },
    telephone: "080008151337",
    mail: "pension-mustermann@mustermann.com",
    accommodations: [
        {
            name: "Hofidylle",
            icon: "bed",
            rooms: {
                livingroom: 1,
                bathroom: 1,
                bedroomOneBed: 0,
                bedroomTwoBed: 1,
                kitchen: 1,
            },
            equipment:
                [
                    {
                        name: 'Wifi',
                        icon: 'wifi'
                    },
                    {
                        name: 'Fernseher',
                        icon: 'tv'
                    },
                    {
                        name: 'Waschmaschine',
                        icon: 'shirt'
                    },
                    {
                        name: 'Gartennutzung',
                        icon: 'seedling'
                    }
                ],
            priceCatalogue: {
                summer: {
                    basePrice: 20,
                    pricePerPerson: 15,
                },
                winter: {
                    basePrice: 30,
                    pricePerPerson: 15,
                },
                cleaningFee: 5,
                discounts: [
                    {
                        days: 5,
                        percentage: 5
                    },
                    {
                        days: 14,
                        percentage: 8
                    }]
            }
        },
        {
            name: "Urlaubsparadies",
            icon: "armchair",
            rooms: {
                livingroom: 2,
                bathroom: 2,
                bedroomOneBed: 1,
                bedroomTwoBed: 2,
                kitchen: 1,
            },
            equipment:
                [
                    {
                        name: 'Wifi',
                        icon: 'wifi'
                    },
                    {
                        name: 'Fernseher',
                        icon: 'tv'
                    },
                    {
                        name: 'Gartennutzung',
                        icon: 'seedling'
                    }
                ],
            priceCatalogue: {
                summer: {
                    basePrice: 45,
                    pricePerPerson: 20,
                },
                winter: {
                    basePrice: 60,
                    pricePerPerson: 20,
                },
                cleaningFee: 10,
                discounts: [
                    {
                        days: 5,
                        percentage: 5
                    },
                    {
                        days: 14,
                        percentage: 8
                    }]
            }
        }
    ],
    texts: {
        greeting: "Schön dich zu sehen!",
        intro: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no ea takimata sanctus est. Lorem ipsum dolor sit amet.",
        location: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    }
}