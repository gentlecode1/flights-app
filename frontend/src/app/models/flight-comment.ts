export interface FlightComment {
    id: number;
    flightId: number;
    comment: string;
    date: Date;
    userId: number;
    tags: string[]
}