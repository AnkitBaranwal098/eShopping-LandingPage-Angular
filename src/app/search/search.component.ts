import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchedText = "";
  searchEvent(eventData : any){
    this.searchedText = eventData.target.value;
    console.log(this.searchedText)
  }
}
