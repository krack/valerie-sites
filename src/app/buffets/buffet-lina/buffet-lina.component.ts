import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../../page.component';

@Component({
  selector: 'app-buffet-lina',
  templateUrl: './buffet-lina.component.html',
  styleUrls: ['./buffet-lina.component.scss']
})
export class BuffetLinaComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Buffet Lina";
	}
}