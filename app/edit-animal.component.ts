import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div id="form" *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <label>Edit name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <br>
      <label>Edit age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <br>
      <label>Edit Number of Caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <br>
      <label>Edit Likes:</label>
      <textarea rows="3" [(ngModel)]="childSelectedAnimal.likes"></textarea>
      <br>
      <label>Edit Dislikes:</label>
      <textarea rows="3" [(ngModel)]="childSelectedAnimal.dislikes"></textarea>
      <br>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }


}
