import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { PageComponent } from '../page.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends PageComponent {
	private siteTitle:String;
	public constructor(titleService: Title ) {
		super(titleService);
		this.pageName = "Contact";
		this.siteTitle = environment.siteName;
	}

}