export default {
    name: "Ferienhof Am Jakobsweg",
    logo: "logo-mustermann.png",
    address: {
        street: "Elbstraße",
        streetNumber: 13,
        zipCode: "01619",
        city: "Zschepa"
    },
    telephone: "035264/97187",
    mail: "ferienhof.fischer.zschepa@gmail.com",
    accommodations: [
        {
            name: "Ferienhof",
            icon: "bed",
            rooms: {
                livingroom: 0,
                bathroom: 2,
                bedroomOneBed: 0,
                bedroomTwoBed: 0,
                bedroomThreeBed: 0,
                bedroomFourBed: 1,
                kitchen: 1,
            },
            equipment:
                [
                    {
                        name: 'Fernseher',
                        icon: 'tv'
                    },
                    {
                        name: 'Küchenausstattung',
                        icon: 'kitchen-set'
                    },
                    {
                        name: 'Waschmaschine',
                        icon: 'shirt'
                    },
                    {
                        name: 'Gartennutzung',
                        icon: 'seedling'
                    },
                    {
                        name: 'Frühstück möglich',
                        icon: 'apple-whole'
                    }
                ],
            priceCatalogue: {
                summer: {
                    basePrice: 24,
                    pricePerPerson: 18,
                },
                winter: {
                    basePrice: 30,
                    pricePerPerson: 20,
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
    ],
    texts: {
        greeting: "Schön dich zu sehen!",
        intro: {
            partOne: "Unser hübscher Dreiseitenhof liegt direkt am rechten Flussufer, nur ein kurzes Stück verlaufen hier der Elberadweg und der Jakobsweg gemeinsam. Auf der Bank vor unserem Hof rasten gern Pilger und Radler. Während der Blick auf den Elbwiesen und dem Fluss ruht, gibt es so manches interessante Gespräch.",
            partTwo: "Die Unterkunft befindet sich im Erdgeschoss und ist an heißen Tagen angenehm kühl. Sie hat einen eigenen Eingang und eine Sitzgruppe im Grünen. Bei schönem Wetter kann man das reichhaltige Frühstück gern draußen genießen.",

        },
        location: "Der Ferienhof befindet sich im kleinen Dorf Zschepa der Gemeinde Zeithain. Der Elberadweg verläuft durchs Dorf und führt direkt an der Unterkunft vorbei."
    }
}