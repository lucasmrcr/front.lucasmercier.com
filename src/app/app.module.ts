import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from 'src/app/app.component'
import {ExperienceComponent} from 'src/app/page/home/components/experience.component'
import {NavbarComponent} from 'src/app/page/home/components/navbar.component'
import {HomeComponent} from 'src/app/page/home/home.component'
import {PresentationComponent} from 'src/app/page/home/components/presentation.component'
import {TechnicalComponent} from 'src/app/page/technical/technical.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PresentationComponent,
    TechnicalComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
