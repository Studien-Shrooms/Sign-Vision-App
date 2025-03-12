import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon'; 
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ImpressumComponent } from './impressum/impressum.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutUsComponent } from './about-us/about-us.component';
import { TranslationPageComponent } from './translation-page/translation-page.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from './translate.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    AboutUsComponent,
    TranslationPageComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    LayoutModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
