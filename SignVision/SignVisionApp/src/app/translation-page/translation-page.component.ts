import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-translation-page',
  templateUrl: './translation-page.component.html',
  styleUrl: './translation-page.component.css'
})
export class TranslationPageComponent {
  constructor(private translationService: TranslationService) {}
  selectedLanguage: string = 'de';

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

  setLanguage() {
    console.log('Ausgewählte Sprache:', this.selectedLanguage);
    this.translationService.setLanguage(this.selectedLanguage);
  }
}
