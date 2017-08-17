import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoTopButtonModule } from 'ng2-go-top-button';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { CarouselService } from './services/carousel.service';
import { EpilationService } from './services/epilation.service';
import { SoinsService } from './services/soins.service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { RateComponent } from './components/rate/rate.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { RoundComponent } from './components/round/round.component';
import { PostComponent } from './components/post/post.component';
import { EpilationRateComponent } from './components/epilation-rate/epilation-rate.component';
import { FaceCareComponent } from './components/face-care/face-care.component';
import { RdvComponent } from './components/rdv/rdv.component';
import { BodyCareComponent } from './components/body-care/body-care.component';
import { ManucureComponent } from './components/manucure/manucure.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ContentComponent,
    RateComponent,
    CarouselComponent,
    ContactComponent,
    RoundComponent,
    PostComponent,
    EpilationRateComponent,
    FaceCareComponent,
    RdvComponent,
    BodyCareComponent,
    ManucureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoTopButtonModule,
    NgbModule.forRoot()
  ],
  providers: [CarouselService, EpilationService, SoinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
