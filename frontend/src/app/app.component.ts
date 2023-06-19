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
    { id: 456, name: 'Vuelo 155363343' },
    { id: 457, name: 'Vuelo 2' },
    { id: 458, name: 'Vuelo 2' },
    { id: 459, name: 'Vuelo 2' },
    { id: 460, name: 'Vuelo 2' },
    { id: 461, name: 'Vuelo 2' },
    { id: 462, name: 'Vuelo 2' },
    { id: 463, name: 'Vuelo 2' },
    { id: 464, name: 'Vuelo 2' },
    { id: 465, name: 'Vuelo 2' },
    { id: 466, name: 'Vuelo 2' },
    { id: 467, name: 'Vuelo 2' },
    { id: 468, name: 'Vuelo 2' },
    { id: 469, name: 'Vuelo 2' },
    { id: 470, name: 'Vuelo 2' },
    { id: 471, name: 'Vuelo 2' },
    { id: 472, name: 'Vuelo 2' },
    { id: 473, name: 'Vuelo 2' }
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
