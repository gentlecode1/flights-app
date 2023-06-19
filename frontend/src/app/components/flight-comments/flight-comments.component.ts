import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightComment } from 'src/app/models/flight-comment';

@Component({
  selector: 'app-flight-comments',
  templateUrl: './flight-comments.component.html',
  styleUrls: ['./flight-comments.component.sass']
})
export class FlightCommentsComponent {
  @Input() selectedFlight!: { id: number, name: string };
  @Input() comments!: FlightComment[];
  @Output() addComment = new EventEmitter();
  displayedColumns: string[] = ['id', 'comment', 'userId', 'tags'];

}
