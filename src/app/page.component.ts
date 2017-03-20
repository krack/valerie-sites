import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { environment } from '../environments/environment';


export class PageComponent implements OnInit {
	protected pageName: String; 

	public constructor(private titleService: Title ) { }

	ngOnInit() {
		    this.titleService.setTitle( this.pageName+environment.htmlTitle);
	}	

}
