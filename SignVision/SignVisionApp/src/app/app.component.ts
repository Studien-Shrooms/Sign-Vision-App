import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false
})
export class AppComponent {
  title = 'SignVisionApp';
  showSideMenue = false; 
  showImpressum = false;
  showAboutPage = false;
  opensidenav = false;
  translationview = false; 
  showApp = true;
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }
  hidePages() {
    this.showImpressum = false;
    this.showAboutPage = false;
  }
  showsImpressum() {
    this.hidePages()
    this.showImpressum = true;
  }
  showsAboutPage(){
    this.hidePages()
    this.showAboutPage = true;
  }

}
