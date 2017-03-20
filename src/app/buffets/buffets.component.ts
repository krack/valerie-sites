import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-buffets',
  templateUrl: './buffets.component.html',
  styleUrls: ['./buffets.component.scss']
})
export class BuffetsComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Les buffets";
	}
}