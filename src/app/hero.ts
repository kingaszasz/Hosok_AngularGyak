export class Hero { //adatmodellnek használjuk, felsoroljuk bennemit kell tudnia egy hero-nak
    name: string;
    special: string;
    address: string;
};

export class HeroList {
    get list() {
        return [{
            name: "Magneto",
            special: "magnetic",
            address: "New York"
        },
        {
            name: "Wonder Woman",
            special: "fantastic",
            address: "New York"
        },
        {
            name: "Iron Man",
            special: "rich",
            address: "New York"
        },
        {
            name: "Thor",
            special: "God",
            address: "New York"
        }]
    }

    set list(e) {

    }

}