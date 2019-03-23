export class Movie {
    public title: string;
    public releaseDate: Date;
    public director: string;
    public cast: Array<string>;

    constructor() {
        this.title = "someTitle";
    }
}
