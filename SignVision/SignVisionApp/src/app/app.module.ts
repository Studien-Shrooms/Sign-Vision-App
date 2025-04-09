import { NgModule, Pipe, PipeTransform, Inject } from '@angular/core';
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
import { TranslationPageComponent } from './translation-page/translation-page.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from './translate.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBar,MatSnackBarAction,MatSnackBarActions,MatSnackBarLabel,MatSnackBarRef} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
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
    MatProgressSpinnerModule,
    MatInputModule, 
    MatFormFieldModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
