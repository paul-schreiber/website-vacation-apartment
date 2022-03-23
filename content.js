export const content = {
    name: "Pension Mustermann",
    logo: "logo-mustermann.png",
    address: {
        street: "Musterstraße",
        streetNumber: 1,
        zipCode: 0815,
        city: "Musterhausen"
    },
    telephone: "080008151337",
    mail: "pension-mustermann@mustermann.com",
    accommodations: [
        {
            name: "FW Hofidylle",
            icon: "bed.png",
            rooms: {
                livingroom: 1,
                bathroom: 1,
                bedroomOneBed: 0,
                bedroomTwoBed: 1,
                kitchen: 1,
            },
            price: {
                summer: {
                    basePrice: 30,
                    pricePerPerson: 15,
                },
                winter: {
                    basePrice: 40,
                    pricePerPerson: 15,
                },
                cleaingFee: 5,
                discount: [
                    {
                        days: 5,
                        percentage: 5
                    }, {
                        days: 14,
                        percentage: 8
                    }]
            }
        },
        {
            name: "FW Urlaubsparadies",
            icon: "chair.png",
            rooms: {
                livingroom: 2,
                bathroom: 2,
                bedroomOneBed: 1,
                bedroomTwoBed: 2,
                kitchen: 1,
            },
            price: {
                summer: {
                    basePrice: 45,
                    pricePerPerson: 20,
                },
                winter: {
                    basePrice: 60,
                    pricePerPerson: 20,
                },
                cleaingFee: 10,
                discount: [
                    {
                        days: 5,
                        percentage: 5
                    }, {
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