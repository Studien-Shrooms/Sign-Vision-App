import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public selectedLanguage: string = 'de'; 
  private translations: any = {};
  private languageSubject = new BehaviorSubject<string>(this.selectedLanguage);

  constructor(private http: HttpClient) {}

  loadTranslations(): Promise<void> {
    return new Promise((resolve) => {
      this.http.get('assets/translations.json').subscribe((translations) => {
        this.translations = translations;
        this.languageSubject.next(this.selectedLanguage);
        resolve(); 
      });
    });
  }
  


  async setLanguage(language: string): Promise<void> {
    this.selectedLanguage = language;
    this.languageSubject.next(language);
    await this.loadTranslations(); // Informiere alle Abonnenten über die Änderung
  }

  // Methode, um den Text basierend auf der aktuellen Sprache zu holen
  getTranslation(key: string): string {
    return this.translations[this.selectedLanguage]?.[key] || key;
  }

  // Observable, das die aktuelle Sprache überwacht
  get currentLanguage() {
    return this.languageSubject.asObservable();
  }
}
