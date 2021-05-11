export interface movieCreationDTO {
    title: string;
    summary: string;
    //the reason we have a File here and a string below is that when we create a movie we are sending a file to the API
    //but when we READ the poster we will be getting a string back, which you can see below in the movieDTO 
    poster: File;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
}

export interface movieDTO {
    title: string;
    summary: string;
    poster: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
}