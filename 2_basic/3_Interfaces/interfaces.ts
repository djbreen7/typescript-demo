export class Movie implements Media{
    public title: string;
    public releaseDate: Date; 
    public director: string;
    public cast: Array<string>;

    play() {
        // Play the movie!
    }
}

export class Game implements Media {
    public title: string;
    public releaseDate: Date;
    public platform: Array<'Playstation' | 'XBox'>;

    play() {
        // Play the movie!
    }
}

interface Media {
    play(): void;
}

class System {
    public platform: Array<'Playstation' | 'XBox'>;
    loadMedia(media: Media) {
        media.play();
    }
}
