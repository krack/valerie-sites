import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../../page.component';

@Component({
  selector: 'app-buffet-marie',
  templateUrl: './buffet-marie.component.html',
  styleUrls: ['./buffet-marie.component.scss']
})
export class BuffetMarieComponent  extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Buffet Marie";
	}
}