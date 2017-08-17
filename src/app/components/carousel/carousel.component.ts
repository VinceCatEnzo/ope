import { Component, OnInit, Output } from '@angular/core';
import { Carousel } from '../../bean/carousel';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  carousel: Carousel[];

  constructor(private carouselService: CarouselService) { }

  ngOnInit() { this.getCarousel(); }

  getCarousel(): void {
    this.carousel = this.carouselService.getCarousel();
  }
}
