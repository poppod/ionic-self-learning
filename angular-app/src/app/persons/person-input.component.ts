import { Component, Output ,EventEmitter} from "@angular/core";
///import { EventEmitter } from "events";


@Component({
  selector:'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls:['./person-input.component.css']

})
export class PersonInputComponent{
  @Output() addPersonEvnt = new EventEmitter<string>();
  personName = '';
  onAddPersonName() {
    console.log(this.personName);
    this.addPersonEvnt.emit(this.personName);
    this.personName = '';
  }
}
