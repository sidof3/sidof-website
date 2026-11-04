import { EnvironmentProviders } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

/**
 * Fournisseurs Firebase de l'application.
 * Appelé comme une fonction dans app.config.ts : `firebaseProviders()`.
 * La configuration vient de `environment.firebase`.
 */
export function firebaseProviders(): EnvironmentProviders[] {
  return [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ];
}