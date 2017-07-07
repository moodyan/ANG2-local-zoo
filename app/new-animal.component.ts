import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <button (click)="showNewAnimalForm()" *ngIf="newAnimalButton">Add a New Animal</button>
    <div id="form" *ngIf="newAnimalForm">
      <h3>Add a New Animal</h3>
      <label>Name:</label>
      <input #newName>
      <br>
      <label>Species:</label>
      <input #newSpecies>
      <br>
      <label>Age:</label>
      <input #newAge>
      <br>
      <label>Diet:</label>
      <select #newDiet>
        <option value="Herbivore">Herbivore</option>
        <option value="Omnivore">Omnivore</option>
        <option value="Carnivore">Carnivore</option>
      </select>
      <br>
      <label>Sex:</label>
      <select #newSex>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br>
      <label>Likes:</label>
      <input #newLikes>
      <br>
      <label>Dislikes:</label>
      <input #newDislikes>
      <br>
      <label>Zoo Location:</label>
      <select #newLocation>
      <option *ngFor="let location of locations" value="{{location.value}}">
      {{location.display}}</option>
      </select>
      <br>
      <label>Number of Caretakers:</label>
      <input #newCaretakers>
      <br>
      <button (click)="submitNewAnimalForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newSex.value, newLikes.value, newDislikes.value, newCaretakers.value)" (click)="hideNewAnimalForm()">Submit</button>
    </div>
  `
})

export class NewAnimalComponent {
  newAnimalForm: boolean = false;
  newAnimalButton: boolean = true;
  @Output() newAnimalSender = new EventEmitter();
  locations = [
    { value: 'Africa Rocks', display: 'Africa Rocks'},
    { value: 'Asian Passage', display: 'Asian Passage'},
    { value: 'Aviary Trail', display: 'Aviary Trail'},
    { value: 'Elephant Odyssey', display: 'Elephant Odyssey'},
    { value: 'Lost Forest', display: 'Lost Forest'},
    { value: 'Northern Frontier', display: 'Northern Frontier'},
    { value: 'Northwest Trail', display: 'Northwest Trail'},
    { value: 'The Outback', display: 'The Outback'},
    { value: 'Urban Jungle', display: 'Urban Jungle'}
  ];

  submitNewAnimalForm(name: string, species: string, age: number, diet: string, location: string, sex: string, likes: string, dislikes: string, caretakers: number) {
    var newAnimal = new Animal(name, species, age, diet, location, sex, likes, dislikes, caretakers);
    this.newAnimalSender.emit(newAnimal);
    this.newAnimalButton = true;
  }

  hideNewAnimalForm() {
    this.newAnimalForm = false;
  }

  showNewAnimalForm() {
    this.newAnimalForm = true;
    this.newAnimalButton = false;
  }
}
