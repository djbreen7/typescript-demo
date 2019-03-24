{
    // Basic Example
    enum Platform {
        Playstation,
        XBox
    }

    class Game {
        public platforms: Array<Platform>;
    }

    let system = new Game();
    system.platforms = [Platform.Playstation, Platform.XBox];
    console.log(system.platforms) // [ 0, 1 ]
}

{
    // You can start at a different index
    enum Platform {
        Playstation = 1,
        XBox
    }

    class System {
        public platform: Array<Platform>;
    }

    let system = new System();
    system.platform = [Platform.Playstation, Platform.XBox];
    console.log(system.platform); // [ 1, 2 ];
}

{
    // You can also use a different data type like a string
    // Surprisingly, 
    enum Platform {
        Playstation = 'PlayStation',
        XBox = 'Xbox'
    }

    class System {
        public platforms: Array<Platform>;
    }

    let system = new System();
    system.platforms = [Platform.Playstation, Platform.XBox];
    console.log(system.platforms); // [ 'PlayStation', 'XBox' ];

}

{
    // enums are objects! ⊙.☉
    enum Platform {
        PlayStation,
        XBox
    }

    console.log(typeof Platform); // object
    console.table(Platform);

    // ┌─────────────┬───────────────┐
    // │   (index)   │    Values     │
    // ├─────────────┼───────────────┤
    // │      0      │ 'PlayStation' │
    // │      1      │    'XBox'     │
    // │ PlayStation │       0       │
    // │    XBox     │       1       │
    // └─────────────┴───────────────┘
}
