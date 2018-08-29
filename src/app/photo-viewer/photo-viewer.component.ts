import { Component, OnInit, ViewEncapsulation, AfterViewInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { Photo } from './Photo';
import { Http, Response } from '@angular/http';


@Component({
	selector: 'photo-viewer',
	templateUrl: './photo-viewer.component.html',
	styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent implements OnInit {
	private current: Photo;
	private all: Photo[];
	private visible: boolean;
	public constructor(http: Http) {

		this.loadData(http);
		this.current = null;
		this.visible = false;
	}

	@HostListener('document:keypress', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent) {
		if (this.visible) {
			console.log(event.key);

			switch (event.key) {
				case 'ArrowLeft':
					this.changePhoto(-1);
					break;
				case 'ArrowRight':
				case ' ':
					this.changePhoto(1);
					break;
				case 'Escape':
					this.closePopin();
					break;
			}
		}
	}
	private loadData(http: Http): void {
		http.get('/assets/photos.json').subscribe((res: Response) => {
			this.all = res.json() || {};
		});
	}

	public ngOnInit(): void {
		var self = this;
		$('body').click(function () {
			self.closePopin();
		});


		$('body').on('click', '.popin', function (event) {
			event.preventDefault();
			event.stopPropagation();
		});

		$('body').on('click', 'img[view],photo-exist[view]', function (event) {
			self.openPopin($(this).attr('view'));
			event.preventDefault();
			event.stopPropagation();
		});
	}

	private openPopin(id: String) {
		this.current = this.all.filter((photo: Photo) => photo.id === id)[0];
		this.visible = true;
	}

	private closePopin() {
		this.visible = false;
		this.current = null;
	}

	private changePhoto(offest: number) {
		const index = this.all.findIndex((photo: Photo) => photo.id === this.current.id);
		let nextIndex = index + offest;
		nextIndex = (nextIndex % this.all.length + this.all.length) % this.all.length;
		this.current = this.all[nextIndex];

	}
}
