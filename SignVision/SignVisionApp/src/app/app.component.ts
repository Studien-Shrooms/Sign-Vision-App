import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false
})
export class AppComponent {
  title = 'Sign Vision App';
  showImpressum = false;
  showAboutPage = false;
  opensidenav = false;
  translationPage = false; 
  translationview = false;
  isSmallScreen = false;
  showHome = true;

  constructor(private breakpointObserver: BreakpointObserver, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
    this.iconRegistry.addSvgIcon(
      'germany_flag', 
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg-icons/flag-for-flag-germany-svgrepo-com.svg')
    );
    this.iconRegistry.addSvgIcon(
      'usa_flag',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg-icons/flag-us-svgrepo-com.svg')
    );
  }
  hidePages() {
    this.showImpressum = false;
    this.showAboutPage = false;
    this.translationPage = false;
    this.showHome = false;
  }
  showsImpressum() {
    this.hidePages()
    this.showImpressum = true;
  }
  showsTranslation() {
    this.hidePages()
    this.translationPage = true;
  }
  showsAboutPage(){
    this.hidePages()
    this.showAboutPage = true;
  }
  showsHomePage(){
    this.hidePages()
    this.showHome = true;
  }
}
