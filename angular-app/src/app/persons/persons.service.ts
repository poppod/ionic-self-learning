import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn:'root'
})
export class PersonsService{
  personsChange = new Subject<string[]>();
  persons: string[] = [];

  api = "https://swapi.dev/api/people/";
  constructor(private httpClient: HttpClient) {

  }
  fetchPersons() {
    this.httpClient.get<any>(this.api)
      .pipe(map(resData => {
      return resData.results.map(character=> character.name)
      }))
      .subscribe(transFormData => {
        this.personsChange.next(transFormData);
    })
  }
  onAddPerson(name :string) {
    this.persons.push(name);
    this.personsChange.next(this.persons);
  }
  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    })
    this.personsChange.next(this.persons);
  }
}
