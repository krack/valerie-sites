import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-concept-festy',
  templateUrl: './concept-festy.component.html',
  styleUrls: ['./concept-festy.component.scss']
})
export class ConceptFestyComponent  extends PageComponent {

	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Le concept un chef chez vous";
	}
	

}

