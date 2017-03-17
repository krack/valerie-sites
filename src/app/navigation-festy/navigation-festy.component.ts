import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-festy',
  templateUrl: './navigation-festy.component.html',
  styleUrls: ['./navigation-festy.component.scss']
})
export class NavigationFestyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked(event) {
    event.stopPropagation();
  }

}
