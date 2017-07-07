import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <!-- <select (change)="onAgeFilterChange($event.target.value)">
    <option value="allAnimals" selected="selected">ALL ANIMALS</option>
    <option value="youngAnimals">Animals Under Age Two</option>
    <option value="matureAnimals">Animals Over Age Two</option>
  </select> -->
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">
    <h3>{{currentAnimal.name}}</h3>
    Species: {{currentAnimal.species}}<br>
    Age: {{currentAnimal.age}}<br>
    Diet: {{currentAnimal.diet}}<br>
    Zoo Location: {{currentAnimal.location}}<br>
    Sex: {{currentAnimal.sex}}<br>
    Likes: {{currentAnimal.likes}}<br>
    Dislikes: {{currentAnimal.dislikes}}<br>
    Caretakers: {{currentAnimal.caretakers}}<br>
    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button> </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  onAgeFilterChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
