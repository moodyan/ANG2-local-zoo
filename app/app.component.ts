import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  styleUrls: ['resources/styles/main.scss'],

  template: `
  <div class="container">
    <h1>Local Zoo</h1>
    <h3>Our Current Animals:</h3>
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
  </div>
  `
})

export class AppComponent {
  selectedAnimal: Animal = null;
  newAnimalForm: boolean = false;
  employeePortal: boolean = false;
  visitorPortal: boolean = true;

  masterAnimalList: Animal[] = [
    new Animal('Reginald', 'Red Panda', 1, 'Herbivore', 'Asian Passage', 'Male', 'Climbing trees', 'Pineapples', 3),
    new Animal('Moon', 'Arctic Fox', 2, 'Carnivore', 'Northern Frontier', 'Female', 'Cool shade', 'Loud noises', 5),
    new Animal('Prince', 'Ocelot', 4, 'Carnivore', 'Lost Forest', 'Male', 'Laying in the sunshine', 'Toys that are not rope-based', 6),
    new Animal('Tinkerbell', 'Northwest Black Tailed Deer', 8, 'Herbivore', 'Northwest Trail', 'Female', 'Delicate roots and leaves', 'Loud Noises', 2),
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
