import { Component } from "@angular/core";
//, Output ,EventEmitter
import { PersonsService } from "./persons.service";
///import { EventEmitter } from "events";


@Component({
  selector:'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls:['./person-input.component.css']

})
export class PersonInputComponent{
  //@Output() addPersonEvnt = new EventEmitter<string>();
  personName = '';
  constructor(private prsService :PersonsService) {

  }
  onAddPersonName() {
    console.log(this.personName);
    this.prsService.onAddPerson(this.personName);
   // this.addPersonEvnt.emit(this.personName);
    this.personName = '';

  }
}
