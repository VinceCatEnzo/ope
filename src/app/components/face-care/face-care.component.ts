import { Component, OnInit } from '@angular/core';

import { Soins } from '../../bean/soins';
import { SoinsService } from '../../services/soins.service';

@Component({
  selector: 'app-face-care',
  templateUrl: './face-care.component.html',
  styleUrls: ['./face-care.component.scss']
})
export class FaceCareComponent implements OnInit {
  titleVisage = 'Soins du Visage';
  soinsVisage: Soins[];
  constructor(private soinsService: SoinsService) { }

  ngOnInit() {
    this.getSoinsVisage();
  }

  getSoinsVisage(): void {
    this.soinsVisage = this.soinsService.getSoinsVisage();
  }


}
