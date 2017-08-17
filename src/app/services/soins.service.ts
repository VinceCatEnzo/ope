import { Injectable } from '@angular/core';

import { Soins } from '../bean/soins';
import { SOINSVISAGE } from '../bean/mocks/mock-soinsVisage';
import { SOINSCORP } from '../bean/mocks/mock-soinsCorp';
import { SOINSMANUCURE } from '../bean/mocks/mock-manucure';

@Injectable()
export class SoinsService {

  constructor() { }

  getSoinsVisage(): Soins[] {
    return SOINSVISAGE;
  }

  getSoinsManucure(): Soins[] {
    return SOINSMANUCURE;
  }

  getSoinsCorp(): Soins[] {
    return SOINSCORP;
  }

}
