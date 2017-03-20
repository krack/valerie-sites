import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-bar-epicerie',
  templateUrl: './bar-epicerie.component.html',
  styleUrls: ['./bar-epicerie.component.scss']
})
export class BarEpicerieComponent  extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Bar épicerie";
	}
}
