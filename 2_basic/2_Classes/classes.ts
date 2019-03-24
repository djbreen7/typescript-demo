'esnext'; // required for property declarations in javascript

{
    class Movie {
        private _id: number;
        public title: string;

        constructor(title: string) {
            this._id = Math.floor(Math.random() * 1000);
            this.title = title;
        }
    }

    let howToTrainYourDragon = new Movie('How To Train Your Dragon');
    // howToTrainYourDragon._id = 1234;

    console.table(howToTrainYourDragon);
}
