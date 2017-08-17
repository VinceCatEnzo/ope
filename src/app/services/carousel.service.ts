import { Injectable } from '@angular/core';
import { Carousel } from '../bean/carousel';
import { CAROUSEL } from '../bean/mocks/mock-carousel';

@Injectable()
export class CarouselService {

  constructor() { }

   getCarousel(): Carousel[] {
    return CAROUSEL;
  }

}
