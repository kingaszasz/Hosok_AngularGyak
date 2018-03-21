import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; //ez kell a kétirányú adatkapcsolathoz
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppHeroDetailComponent } from './app-hero-detail/app-hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroServiceService } from './hero-service.service';
import { YellowDirective } from './yellow.directive';
import { OrderPipe } from './order.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppHeroDetailComponent,
    HeroFormComponent,
    YellowDirective,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
