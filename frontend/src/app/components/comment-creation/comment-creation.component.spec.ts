import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCreationComponent } from './comment-creation.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('CommentCreationComponent', () => {
  let component: CommentCreationComponent;
  let fixture: ComponentFixture<CommentCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentCreationComponent],
      imports: [MatDialogModule, MaterialModule, ReactiveFormsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        provideAnimations()
      ]
    });
    fixture = TestBed.createComponent(CommentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
