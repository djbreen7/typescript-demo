'esnext'; // required for property declarations in javascript

{
    class Movie {
        _id; // requires 'esnext'
        title;

        constructor(title) {
            this._id = Math.floor(Math.random() * 1000);
            this.title = title;
        }
    }

    let howToTrainYourDragon = new Movie('How To Train Your Dragon');
    howToTrainYourDragon._id = 1234;

    console.table(howToTrainYourDragon); // id will be 1234 (not what we want!)
}
