import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { ExperienceComponent } from 'src/app/page/experience/experience.component';
import { LastExperienceComponent } from 'src/app/page/experience/components/last-experience.component';
import { NavbarComponent } from 'src/app/page/home/components/navbar.component';
import { HomeComponent } from 'src/app/page/home/home.component';
import { PresentationComponent } from 'src/app/page/home/components/presentation.component';
import { TechnicalComponent } from 'src/app/page/technical/technical.component';
import { LogoComponent } from './page/shared/logo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        PresentationComponent,
        TechnicalComponent,
        LastExperienceComponent,
        LogoComponent,
        ExperienceComponent,
    ],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
