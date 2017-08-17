import { Component, OnInit } from '@angular/core';

import { Soins } from '../../bean/soins';
import { SoinsService } from '../../services/soins.service';

@Component({
  selector: 'app-manucure',
  templateUrl: './manucure.component.html',
  styleUrls: ['./manucure.component.scss']
})
export class ManucureComponent implements OnInit {
  titleManucure = 'Manucure & beauté des pieds';
  manucures: Soins[];
  constructor(private soinsService: SoinsService) { }

  ngOnInit() {
    this.getManucures();
  }

  getManucures(): void {
    this.manucures = this.soinsService.getSoinsManucure();
  }


}
