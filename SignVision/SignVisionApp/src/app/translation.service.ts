import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public selectedLanguage: string = 'de'; // Standardwert
  private translations: any = {};
  private languageSubject = new BehaviorSubject<string>(this.selectedLanguage);

  constructor(private http: HttpClient) {}

  // Methode zum Laden der Übersetzungen aus einer JSON-Datei
  loadTranslations(): void {
    this.http.get('assets/translations.json').subscribe((translations) => {
      this.translations = translations;
      this.languageSubject.next(this.selectedLanguage); // Setze die Sprache nach dem Laden der Übersetzungen
    });
  }

  // Methode zum Setzen der Sprache
  setLanguage(language: string): void {
    this.selectedLanguage = language;
    this.languageSubject.next(language); // Informiere alle Abonnenten über die Änderung
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
