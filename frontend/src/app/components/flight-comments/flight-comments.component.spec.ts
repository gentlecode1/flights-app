import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCommentsComponent } from './flight-comments.component';
import { MaterialModule } from 'src/app/material.module';

describe('FlightCommentsComponent', () => {
  let component: FlightCommentsComponent;
  let fixture: ComponentFixture<FlightCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightCommentsComponent],
      imports: [MaterialModule]
    });
    fixture = TestBed.createComponent(FlightCommentsComponent);
    component = fixture.componentInstance;
    component.selectedFlight = { id: 1, name: 'Flight 1' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
