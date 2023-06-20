import { Component } from '@angular/core';
import { FlightCommentsService } from './services/flight-comments.service';
import { Observable, concatMap, tap } from 'rxjs';
import { FlightComment } from './models/flight-comment';
import { MatDialog } from '@angular/material/dialog';
import { CommentCreationComponent } from './components/comment-creation/comment-creation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'prueba';
  selectedFlight!: { id: number, name: string }
  flights = [
    { id: 456, name: 'Barcelona - Paris' },
    { id: 457, name: 'Madrid - Lima' },
    { id: 458, name: 'London - Bilbao' },
    { id: 459, name: 'Berlin - Barcelona' },
    { id: 460, name: 'Rome - Vienna' },
    { id: 461, name: 'Madrid - Barcelona' },
    { id: 462, name: 'Milano - Paris' },
    { id: 463, name: 'New York - Chicago' },
    { id: 464, name: 'Los Angeles - Phoenix' },
    { id: 465, name: 'Pekin - Sanghai' },
    { id: 466, name: 'Bangkok - Sidney' },
    { id: 467, name: 'Quito - Bogotá' },
    { id: 468, name: 'Sao Paulo - Lisbon' },
    { id: 469, name: 'Panamá City - New Orleans' },
    { id: 470, name: 'Helsinki - Frankfurt' },
    { id: 471, name: 'Budapest - Beirut' },
    { id: 472, name: 'Teheran - Istambul' },
    { id: 473, name: 'Niger - Marrakech' }
  ]
  comments$!: Observable<FlightComment[]>
  displayedColumns: string[] = ['id', 'comment', 'userId', 'tags'];
  public getComments = () => this.flightCommentsService.getCommentsByFlightId(this.selectedFlight.id)
  public createComment = (comment: Partial<FlightComment>) => this.flightCommentsService.createComment({
    ...comment, flightId: this.selectedFlight.id
  })

  public addComment = () => {
    const dialogRef = this.dialog.open(CommentCreationComponent);
    dialogRef.afterClosed().pipe(concatMap((result) => this.createComment(result)), concatMap(() => this.comments$ = this.getComments())).subscribe();
  }

  constructor(public flightCommentsService: FlightCommentsService, public dialog: MatDialog) { }


}
