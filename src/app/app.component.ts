import { Component,HostBinding } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@HostBinding('class.root_'+environment.rootClass) 
 	addRootClasd:boolean = true;

 	private siteName:String;
	private siteDescribe:String;
	private navigationMenu:String;

 	public constructor(){
 		this.siteName = environment.siteName;
 		this.siteDescribe = environment.siteDescribe;
 		this.navigationMenu = environment.rootClass
 	}
}
