import { Injectable } from '@angular/core';

import { Epilation } from '../bean/epilation';
import { EPILATION } from '../bean/mocks/mock-epilations';

@Injectable()
export class EpilationService {

  constructor() { }

   getEpilations(): Epilation[] {
    return EPILATION;
  }

}
