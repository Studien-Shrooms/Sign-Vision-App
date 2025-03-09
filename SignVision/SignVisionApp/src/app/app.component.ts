import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


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

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
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
