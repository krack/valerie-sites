import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../../page.component';


@Component({
  selector: 'app-menu-agathe',
  templateUrl: './menu-agathe.component.html',
  styleUrls: ['./menu-agathe.component.scss']
})
export class MenuAgatheComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Menu Agathe";
	}
}
