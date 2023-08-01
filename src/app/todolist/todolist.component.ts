import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

const log = console.log;

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  taskArray = [{ taskName: 'idk', isCompleted: false }];
  onSubmit(form: NgForm) {
    log(form);
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
    });
    form.reset();
  }
  OnDelete(index: number) {
    log(index);
    this.taskArray.splice(index, 1);
  }
  onCheck(index: number) {
    log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
