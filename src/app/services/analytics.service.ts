import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, logEvent, setCurrentScreen, Analytics } from 'firebase/analytics';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

  private analytics?: Analytics;
  private app?: FirebaseApp;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Analytics only works in the browser, never during server-side rendering
    if (isPlatformBrowser(this.platformId)) {
      this.app = initializeApp(environment.firebase);
      this.analytics = getAnalytics(this.app);
    }
  }

  logPageView(pagePath: string, pageTitle?: string): void {
    if (!this.analytics) return;
    logEvent(this.analytics, 'page_view', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }

  logEvent(eventName: string, params?: Record<string, any>): void {
    if (!this.analytics) return;
    logEvent(this.analytics, eventName, params);
  }
}