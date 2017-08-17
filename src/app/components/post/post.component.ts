import { Component, OnInit, Input } from '@angular/core';

import { Soins } from '../../bean/soins';
import { SoinsService } from '../../services/soins.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    @Input() soins: Soins;
    posts: Soins[];
    constructor(private soinsService: SoinsService) { }

    ngOnInit() { }

    getSoins(): void { }
}
