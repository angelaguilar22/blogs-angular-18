import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tag } from '../../models';

@Component({
  selector: 'app-form-tag',
  templateUrl: './form-tag.component.html',
  styleUrl: './form-tag.component.scss',
})
export class FormTagComponent implements OnInit {
  @Input() tag: Tag;

  formTag: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null),
    description: new FormControl(null),
  });

  ngOnInit(): void {
    if (!!this.tag) {
      this.formTag.patchValue(this.tag);
    }
  }
}
