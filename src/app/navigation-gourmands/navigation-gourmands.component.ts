import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-gourmands',
  templateUrl: './navigation-gourmands.component.html',
  styleUrls: ['./navigation-gourmands.component.scss']
})
export class NavigationGourmandsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked(event) {
    event.stopPropagation();
  }

}
