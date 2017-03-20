import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../../page.component';

@Component({
  selector: 'app-buffet-autre',
  templateUrl: './buffet-autre.component.html',
  styleUrls: ['./buffet-autre.component.scss']
})
export class BuffetAutreComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Buffet";
	}
}