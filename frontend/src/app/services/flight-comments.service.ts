import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { FlightComment } from '../models/flight-comment';


@Injectable({
  providedIn: 'root'
})
export class FlightCommentsService {

  constructor(private http: HttpClient) { }

  public getCommentsByFlightId(flightId: number) {
    return this.http.get<FlightComment[]>(`${environment.apiUrl}/comments`, { params: { flightId } })
  }

  public createComment(comment: Partial<FlightComment>) {
    return this.http.post<FlightComment>(`${environment.apiUrl}/comments`, comment)
  }
}
