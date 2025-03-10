import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { ChangeDetectorRef } from '@angular/core';
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
  

  fileUrl: string | ArrayBuffer | null = null;  
  fileType: string = ''; 

  onFileChange(event: any) {
    const file = event.target.files[0];  

    if (file) {
      const reader = new FileReader();
      
      if (file.type.startsWith('image')) {
        this.fileType = 'image'; 
      } else if (file.type.startsWith('video')) {
        this.fileType = 'video'; 
      }

      reader.onload = () => {
        this.fileUrl = reader.result;  
      };
      
      reader.readAsDataURL(file);  
    }
  }

 async setLanguage() {
    await this.translationService.setLanguage(this.selectedLanguage);
  }
  ngOnInit(): void {
    // Lade Übersetzungen
    this.translationService.loadTranslations();
  }
}
