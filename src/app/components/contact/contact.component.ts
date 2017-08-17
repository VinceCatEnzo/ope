import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    addresse = 'placer l\'addresse';
    mobile = 'placer le mobile';
    facebook = 'placer le facebook';
    email = 'placer l\'email';
    warning = 'Attention les prestations pour  les hommes ne ce font que sur recommendation'
    closeResult: string;
    options: NgbModalOptions = {
        size: 'lg'
    };

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
    }


    open(content) {
        this.modalService.open(content, this.options).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

}
