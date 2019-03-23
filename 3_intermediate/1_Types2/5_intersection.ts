// Intersection Types

interface Spoon {
    scoop(): void;
}

interface Fork {
    poke(): void;
}

type Spork = Spoon & Fork;

const campingSpork: Spork = {
    scoop: () => {
        console.log('scooping')
    },
    poke: () => {
        console.log('poking');
    }
}

