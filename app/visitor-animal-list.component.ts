import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'visitor-animal-list',
  template: `
  <select (change)="onLocationChange($event.target.value)">
    <option value="allLocations" selected="selected">All Animals</option>
    <option *ngFor="let location of locations" value="{{location.value}}">{{location.display}}</option>
  </select>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | locationFilter:filterByLocation">
    <h3>{{currentAnimal.name}}</h3>
    Species: {{currentAnimal.species}}<br>
    Age: {{currentAnimal.age}}<br>
    Diet: {{currentAnimal.diet}}<br>
    Zoo Location: {{currentAnimal.location}}<br>
    Sex: {{currentAnimal.sex}}<br>
    Likes: {{currentAnimal.likes}}<br>
    Dislikes: {{currentAnimal.dislikes}}<br>
  </ul>
  `
})

export class VisitorAnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

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

  filterByLocation: string = "allLocations";

  onLocationChange(optionFromMenu) {
    this.filterByLocation = optionFromMenu;
  }

}
