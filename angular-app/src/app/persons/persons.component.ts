import { Component} from "@angular/core";
import {  Subscription } from "rxjs";
import { PersonsService } from "./persons.service";
//,Input

@Component({
  selector: "app-persons",
  templateUrl:'./persons.component.html',
  styleUrls:['./persons.component.css']
})
export class PersonsComponent{
  //@Input() personsList: String[];
  personsList: String[];
  isFetch = false;
  private psrSubcribe: Subscription;
  constructor(private prsService :PersonsService) {

  }
  ngOnInit(): void {
    this.personsList = this.prsService.persons;
    this.psrSubcribe= this.prsService.personsChange.subscribe(person => {
      this.personsList = person;
      this.isFetch = false;
    })
    this.isFetch = true;
    this.prsService.fetchPersons();
  }
  onRemovePerson(name: string) {
    this.prsService.removePerson(name);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.psrSubcribe.unsubscribe();
  }
}
