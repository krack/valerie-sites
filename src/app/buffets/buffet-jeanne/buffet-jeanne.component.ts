import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../../page.component';

@Component({
  selector: 'app-buffet-jeanne',
  templateUrl: './buffet-jeanne.component.html',
  styleUrls: ['./buffet-jeanne.component.scss']
})
export class BuffetJeanneComponent  extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Buffet Jeanne";
	}
}