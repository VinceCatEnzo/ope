import { Component, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { slideInDownAnimation } from '../../animations';


@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    animations: [slideInDownAnimation],
})
export class NavComponent implements OnInit {
    isCollapsed = true;
    isAnimated = 'inactive';
    mobileNumberr = '+33769857143';
    toolTipHome = 'Acceuil';
    toolTipEpilation = 'Voir les offres épilations';
    toolTipSoins = 'Voir les offres soins';
    oolTipRdv = 'Rerserver votre prestation';
    toolTipTarif = 'Retrouver l\'ensemble des tarifs';
    toolTipContact = 'Contactez nous';

    constructor(router: Router) {
        router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    const element = document.querySelector('#' + tree.fragment);
                    if (element) { element.scrollIntoView(element); this.setAnimated(); }
                }
            }
        });
    }

    ngOnInit() { }

    setAnimated(): void {
        this.isAnimated = (this.isAnimated === 'active' ? 'inactive' : 'active');
    }

    setCollapsed(): void {
        this.isCollapsed = true;
    }
}
