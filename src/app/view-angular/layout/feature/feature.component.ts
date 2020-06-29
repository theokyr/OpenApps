import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input()
  icon;
  @Input()
  title;
  @Input()
  routerLink;

  constructor() { }

  ngOnInit(): void {
  }

}
