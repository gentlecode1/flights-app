import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {
  @Input() selectedFlight!: { id: number, name: string }
  @Input() flights!: { id: number, name: string }[]
  @Output() onClick = new EventEmitter()

}
