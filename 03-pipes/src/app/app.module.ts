import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es';
import '@angular/common/locales/global/fr';

import { AppComponent } from './app.component';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { OcultarPipe } from './pipes/ocultar.pipe';

// OLD FORM
// import { registerLocaleData } from '@angular/common';
// import localES from '@angular/common/locales/es';

//registerLocaleData(localEs)
@NgModule({
  declarations: [
    AppComponent,
    CapitalizarPipe,
    DomseguroPipe,
    OcultarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
