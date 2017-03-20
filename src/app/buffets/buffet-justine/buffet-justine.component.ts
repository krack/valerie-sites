import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../../page.component';

@Component({
  selector: 'app-buffet-justine',
  templateUrl: './buffet-justine.component.html',
  styleUrls: ['./buffet-justine.component.scss']
})
export class BuffetJustineComponent extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Buffet Justine";
	}
}