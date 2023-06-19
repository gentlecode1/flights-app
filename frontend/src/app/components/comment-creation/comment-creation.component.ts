import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';


@Component({
  selector: 'app-comment-creation',
  templateUrl: './comment-creation.component.html',
  styleUrls: ['./comment-creation.component.sass']
})
export class CommentCreationComponent {
  form!: FormGroup;
  tags: string[] = ['medium', 'business'];
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(public dialogRef: MatDialogRef<CommentCreationComponent>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      comment: ['', Validators.required],
      userId: ['', Validators.required],
      tags: [this.tags, Validators.required]
    });
  }

  createComment() {
    if (this.form.invalid) {
      return;
    }
    this.dialogRef.close(this.form.value)
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  editTag(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.removeTag(tag);
      return;
    }

    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index] = value;
    }
  }

}
