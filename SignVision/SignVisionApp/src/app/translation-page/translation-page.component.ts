import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { ChangeDetectorRef } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-translation-page',
  templateUrl: './translation-page.component.html',
  styleUrl: './translation-page.component.css'
})
export class TranslationPageComponent {

  selectedLanguage :string = '';
  constructor(public translationService: TranslationService,private cdRef: ChangeDetectorRef, private snackBar: MatSnackBar) {
    this.translationService.currentLanguage.subscribe(language => {
      this.selectedLanguage = language;
      console.log('Aktuelle Sprache:', this.selectedLanguage);
    });
  }
  selectedFile: File | null = null;
  startTranslation: boolean = false; 
  showTranslation :boolean = false;
  warningMsg :string = '';
  fileUrl: string | ArrayBuffer | null = null;  
  fileType: string = ''; 
  uploadResponse: any = null;

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
      this.showWarning('Ungültiger Datentyp / Invalid data type')
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
    this.uploadResponse = null;

    try {
      const response = await this.translationService
        .uploadVideo(this.selectedFile, this.selectedLanguage)
        .toPromise();

      console.log('Antwort vom Server:', response);
      this.uploadResponse = response;
      this.showTranslation = true;
    } catch (error) {
      console.error('Fehler beim Upload:', error);
      this.showWarning('Upload fehlgeschlagen / Upload failed');
    }

    this.startTranslation = false;
  } else {
    this.showWarning('Keine Datei ausgewählt / No File Selected');
    console.log('Keine Datei ausgewählt');
  }
  }
  ngOnInit(): void {
    this.translationService.loadTranslations();
  }
  showWarning(warningMsg:string) {
    this.snackBar.open(warningMsg, 'OK', {
    duration: 3000,
    panelClass: ['warning-snackbar']
  } );
  }
}


