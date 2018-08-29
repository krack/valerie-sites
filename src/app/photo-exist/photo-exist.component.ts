import { Component, OnInit, ViewEncapsulation, AfterViewInit, Input } from '@angular/core';


@Component({
	selector: 'photo-exist',
	templateUrl: './photo-exist.component.html',
	styleUrls: ['./photo-exist.component.scss']
})
export class PhotoExistComponent {
	@Input()
	private view: String;
	public constructor() {
	}


}
