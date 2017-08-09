import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { ConfigService } from './shared/services/config.service';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
