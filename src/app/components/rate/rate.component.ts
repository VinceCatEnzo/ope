import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Soins } from '../../bean/soins';
import { SoinsService } from '../../services/soins.service';
import { Epilation } from '../../bean/epilation';
import { EpilationService } from '../../services/epilation.service';

@Component({
    selector: 'app-rate',
    templateUrl: './rate.component.html',
    styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
    title = 'Tarifs';
    titleEpilation = 'Epilation';
    titleSoinVisage = 'Soin Visage';
    titleSoinCorp = 'Soin Du Corps';
    titleManucureAndPied = 'Manucure & beauté des pieds';
    soinsVisage: Soins[];
    soinsCorp: Soins[];
    epilations: Epilation[];
    manucures: Soins[];
    constructor(
        private soinsService: SoinsService,
        private epilationService: EpilationService,
        private router: Router
        ) {}


    ngOnInit() {
        this.getSoinsVisage();
        this.getEpilations();
        this.getSoinsCorp();
        this.getManucures();
    }

    getSoinsVisage(): void {
        this.soinsVisage = this.soinsService.getSoinsVisage();
    }

    getSoinsCorp(): void {
        this.soinsCorp = this.soinsService.getSoinsCorp();
    }
    getEpilations(): void {
        this.epilations = this.epilationService.getEpilations();
    }

    getManucures(): void {
        this.manucures = this.soinsService.getSoinsManucure();
    }

    gotToLink(fragLink: string): void {
       const navigationExtras: NavigationExtras = {
            fragment: fragLink
        };
        this.router.navigate(['/'], navigationExtras);
    }
}
