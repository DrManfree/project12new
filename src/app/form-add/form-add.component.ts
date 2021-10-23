import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  @Output() noteCreated = new EventEmitter<{ title: string, content: string, id: number, createdate: Date}>();
  constructor() { 
    num : Number;
  }

  ngOnInit(): void {
  }
  num = 0;
  onAdd(noteNameInput : HTMLInputElement, noteContentInput: HTMLTextAreaElement) {
    let crDate = new Date();
    this.noteCreated.emit({
      title: noteNameInput.value,
      content: noteContentInput.value,
      id: this.num,
      createdate: crDate
    });
    this.num++;
  }
}
