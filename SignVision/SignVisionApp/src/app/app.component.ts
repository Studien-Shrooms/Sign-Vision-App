import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SignVisionApp';
  showSideMenue = false; 
  showImpressum = false;
  showApp = true;

  toggleSideMenue() {
    this.showSideMenue = !this.showSideMenue; // Toggle-Funktion
  }

  showsImpressum(){
    this.showImpressum = true
  }
}
