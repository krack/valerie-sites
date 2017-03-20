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

 	public constructor(){
 	}
}
