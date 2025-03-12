import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { ChangeDetectorRef } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-translation-page',
  templateUrl: './translation-page.component.html',
  styleUrl: './translation-page.component.css'
})
export class TranslationPageComponent {

  selectedLanguage :string = '';
  constructor(public translationService: TranslationService,private cdRef: ChangeDetectorRef) {
    this.translationService.currentLanguage.subscribe(language => {
      this.selectedLanguage = language;
      console.log('Aktuelle Sprache:', this.selectedLanguage);
    });
  }
  selectedFile: File | null = null;
  startTranslation: boolean = false; 
  showTranslation :boolean = false;
  fileUrl: string | ArrayBuffer | null = null;  
  fileType: string = ''; 

  onFileChange(event: any) {
    this.showTranslation =false;
    if (!event.target.files || event.target.files.length === 0) {
      this.selectedFile = null;
      return;
    }
  
    const file = event.target.files[0];
    this.selectedFile = file; 
  
    const reader = new FileReader();
  
    if (file.type.startsWith('image')) {
      this.fileType = 'image'; 
    } else if (file.type.startsWith('video')) {
      this.fileType = 'video'; 
    } else {
      console.warn('Ungültiger Dateityp:', file.type);
      this.fileType = '';
      this.fileUrl = null;
      this.selectedFile = null;
      return;
    }
  
    reader.onload = () => {
      this.fileUrl = reader.result;  
      console.log('Datei geladen:', this.fileUrl);
    };
  
    reader.readAsDataURL(file);
  }
  

 async setLanguage() {
    await this.translationService.setLanguage(this.selectedLanguage);
  }
  async delay(ms: number) { // kann später gelöscht werden ist grade nur zum veranschaulichen
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  async startTranslations() {
    if (this.selectedFile) {
      console.log('Ausgewählte Datei:', this.selectedFile);
      console.log("Translation start");
      this.startTranslation = true;
      await this.delay(2000) // später durch Warten auf Übersetzung ersetzen
      this.startTranslation = false;
      this.showTranslation = true 
    } else {
      console.log('Keine Datei ausgewählt');
    }

  }
  ngOnInit(): void {
    this.translationService.loadTranslations();
  }
}
