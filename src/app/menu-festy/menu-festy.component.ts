import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../page.component';


@Component({
  selector: 'app-menu-festy',
  templateUrl: './menu-festy.component.html',
  styleUrls: ['./menu-festy.component.scss']
})
export class MenuFestyComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Les menus";
	}

}