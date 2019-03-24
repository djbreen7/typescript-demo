{
    class Movie implements Media {
        private _id: number;
        public title: string;

        play() {
            // Play the movie!
        }
    }

    class Game {
        private _id: number;
        public title: string;
        public platform: Array<'PlayStation' | 'XBox'>;

        play() {
            // Play the game!
        }
    }

    interface Media {
        play(): void;
    }

    class Platform {
        public type: Array<'PlayStation' | 'XBox'>;

        loadMedia(media: Media) {
            media.play();
        }
    }

    let platform = new Platform();
    let game = new Game();
    game.platform = ['PlayStation', 'XBox'];
    platform.loadMedia(game); // Allows for duck-typing!!!
}
