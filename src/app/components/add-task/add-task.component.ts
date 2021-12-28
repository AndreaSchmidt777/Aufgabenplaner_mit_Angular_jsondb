import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  datum: string = '';
  erinnerung: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Bitte erst eine Aufgabe eintragen.');
      return;
    }

    const newTask = {
      text: this.text,
      datum: this.datum,
      erinnerung: this.erinnerung
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.datum = '';
    this.erinnerung = false;
  }

}
