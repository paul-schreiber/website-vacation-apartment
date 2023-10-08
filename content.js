export default {
    name: "Pension Schreiber",
    logo: "logo-mustermann.png",
    address: {
        street: "Elbstraße",
        streetNumber: 11,
        zipCode: "01619",
        city: "Zschepa"
    },
    telephone: "035264/97998",
    mail: "schreiber.pension@gmail.com",
    mapLinks: {
        googleMaps: "https://maps.app.goo.gl/m1gdpu894Wz7LTmP7",
        appleMaps: "https://maps.apple.com/?address=Elbstra%C3%9Fe%2011,%2001619%20Zschepa,%20Deutschland&auid=1052761439038804511&ll=51.349613,13.264892&lsp=9902&q=Pension%20Schreiber",
    },
    accommodations: [
        {
            name: "Hofidylle",
            icon: "bed",
            rooms: {
                livingroom: 1,
                bathroom: 1,
                bedroomOneBed: 0,
                bedroomTwoBed: 1,
                bedroomThreeBed: 0,
                bedroomFourBed: 0,
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
                bedroomThreeBed: 0,
                bedroomFourBed: 0,
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
        greeting: "Urlaub auf dem Bauernhof!",
        intro: {
            partOne: `Unsere Pension liegt in Zschepa direkt am Elberadweg zwischen Riesa und Mühlberg.
            Unseren Gästen bieten wir ein reichhaltiges Frühstück und verschiedene Freizeitangebote an.`,
            partTwo: `Euch steht ein Grillplatz, sowie eine Sitzecke mit Liegemöglichkeiten im Grünen zur Verfügung.
            Neben dem kostenlosen Pkw-Stellplatz auf dem Hof könnt ihr auch Fahrräder ausleihen.`
        },
        location: "Unsere Pension liegt auf einem Dreiseitenhof im kleinen ruhigen Ort Zschepa. Die idyllische Lage direkt an der Elbe lädt zum Entspannen ein."
    }
}