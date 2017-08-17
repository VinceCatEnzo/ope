import { Component, OnInit, Input } from '@angular/core';

import { Soins } from '../../bean/soins';
import { SoinsService } from '../../services/soins.service';

@Component({
  selector: 'app-body-care',
  templateUrl: './body-care.component.html',
  styleUrls: ['./body-care.component.scss']
})
export class BodyCareComponent implements OnInit {
  @Input() typeObjectToDisplay: string;
  soinsCorp: Soins[];
  soinTitle = 'Soins du Corps';
  constructor(private soinsService: SoinsService) { }

  ngOnInit() {
    this.getSoinsCorp();
  }

  getSoinsCorp(): void {
    this.soinsCorp = this.soinsService.getSoinsCorp();
  }

}
