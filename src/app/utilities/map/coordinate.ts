    export interface coordinatesMap{
        latitude: number;
        longitude: number;
    }

    //this interface extends the above but with a message that will be a popup on the map
    export interface coordinatesMapWithMessage extends coordinatesMap{
        message: string;
    }