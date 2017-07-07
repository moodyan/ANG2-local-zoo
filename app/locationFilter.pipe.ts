import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "locationFilter",
  pure: false
})


export class LocationFilterPipe implements PipeTransform {
  transform(input: Animal[], desiredLocation){
    var output: Animal[] = [];
    if (desiredLocation === "allLocations") {
      return input;
    }
    for (var ii = 0; ii < locations.length; ii++) {
      if (desiredLocation === locations[ii].value) {
        for (var i = 0; i < input.length; i++) {
          if (input[i].location === locations[ii].value) {
            output.push(input[i]);
          }
        }
        return output;
      }
    }
  }
}

let locations = [
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
