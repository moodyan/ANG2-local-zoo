import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { VisitorAnimalListComponent }  from './visitor-animal-list.component';
import { AnimalListComponent }  from './animal-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { AgeFilterPipe } from './ageFilter.pipe';
import { LocationFilterPipe } from './locationFilter.pipe';



@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent, VisitorAnimalListComponent, AnimalListComponent, EditAnimalComponent, NewAnimalComponent, AgeFilterPipe, LocationFilterPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
