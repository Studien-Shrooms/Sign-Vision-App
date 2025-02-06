import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showSideMenue = false;
  title = 'SignVisionApp';
}

