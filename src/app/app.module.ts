import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { ExperiencesComponent } from 'src/app/page/experiences/experiences.component';
import { NavbarComponent } from 'src/app/page/home/components/navbar.component';
import { HomeComponent } from 'src/app/page/home/home.component';
import { PresentationComponent } from 'src/app/page/home/components/presentation.component';
import { TechnicalsComponent } from 'src/app/page/technicals/technicals.component';
import { LogoComponent } from './page/shared/logo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        PresentationComponent,
        TechnicalsComponent,
        LogoComponent,
        ExperiencesComponent,
    ],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
