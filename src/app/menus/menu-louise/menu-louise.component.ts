import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../../page.component';


@Component({
  selector: 'app-menu-louise',
  templateUrl: './menu-louise.component.html',
  styleUrls: ['./menu-louise.component.scss']
})
export class MenuLouiseComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Menu Louise";
	}
}
