import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  styleUrls: ['resources/styles/main.scss'],

  template: `
  <section class="center">
    <h1>The Animal Kingdom Zoo</h1>
    <h2>Our Current Animals:</h2>
    <div id="visitor-portal" *ngIf="visitorPortal">
      <visitor-animal-list [childAnimalList]="masterAnimalList"></visitor-animal-list>
      <button (click)="showEmployeePortal()" id="show-employee" >Show Employee Portal</button>
    </div>
    <div id="employee-portal" *ngIf="employeePortal">
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      <button (click)="showVisitorPortal()" id="show-visitor" >Show Visitor Portal</button>
    </div>
  </section>
  `
})

export class AppComponent {
  selectedAnimal: Animal = null;
  newAnimalForm: boolean = false;
  employeePortal: boolean = false;
  visitorPortal: boolean = true;

  masterAnimalList: Animal[] = [
    new Animal('Reginald', 'Red Panda', 1, 'Herbivore', 'Asian Passage', 'Male', 'Climbing trees', 'Pineapples', 3),
    new Animal('Alfred', 'African Penguin', 4, 'Carnivore', 'Africa Rocks', 'Male', 'Swimming and laying on rocks in the sun', 'Being endangered', 3),
    new Animal('Moon', 'Arctic Fox', 2, 'Carnivore', 'Northern Frontier', 'Female', 'Cool shade', 'Loud noises', 5),
    new Animal('Forest', 'Koala', 2, 'Herbivore', 'The Outback', 'Male', 'Socializing with other koalas', 'Socializing with other species', 3),
    new Animal('Prince', 'Ocelot', 4, 'Carnivore', 'Lost Forest', 'Male', 'Laying in the sunshine', 'Toys that are not rope-based', 6),
    new Animal('Tinkerbell', 'Northwest Black Tailed Deer', 8, 'Herbivore', 'Northwest Trail', 'Female', 'Delicate roots and leaves', 'Loud Noises', 2),
    new Animal('Sydney', 'Wombat', 12, 'Herbivore', 'The Outback', 'Female', 'Digging', 'Loud noises', 3),
    new Animal('Cuddlebug', 'Masai giraffe', 1, 'Herbivore', 'Urban Jungle', 'Female', 'Eating', 'Lions', 4),
    new Animal('Snugglepie', 'Masai giraffe', 1, 'Herbivore', 'Urban Jungle', 'Male', 'Eating', 'Lions', 4),
    new Animal('Dumbo', 'African elephant', 10, 'Herbivore', 'Elephant Odyssey', 'Male', 'Playing in the water and learning things', 'Ants', 5),
    new Animal('Buddy', 'Macaw', 33, 'Omnivore', 'Aviary Trail', 'Female', 'Playing with blocks', 'Water', 1),
  ];

  finishedEditing() {
      this.selectedAnimal = null;
    }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild)
  }

  showNewAnimalForm() {
    this.newAnimalForm = true;
  }

  showEmployeePortal() {
    this.employeePortal = true;
    this.visitorPortal = false;
  }

  showVisitorPortal() {
    this.employeePortal = false;
    this.visitorPortal = true;
  }
}
