import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
  @Input() site: string;
  @Output() newWebSiteEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteWebsite(site: string): void {
    this.newWebSiteEvent.emit(site);
  }
}
