import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <label>Edit name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Edit age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <label>Edit Number of Caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <label>Edit Likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes">
      <label>Edit Dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">
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
