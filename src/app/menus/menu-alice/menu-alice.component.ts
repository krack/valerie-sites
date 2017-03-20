import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../../page.component';


@Component({
  selector: 'app-menu-alice',
  templateUrl: './menu-alice.component.html',
  styleUrls: ['./menu-alice.component.scss']
})
export class MenuAliceComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Menu Alice";
	}
}
