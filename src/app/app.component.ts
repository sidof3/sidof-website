import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./website/navbar/navbar.component";
import { FooterComponent } from "./website/footer/footer.component";
import { filter } from 'rxjs';
import { AnalyticsService } from './services/analytics.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sidof';

  constructor(
    private router: Router,
    private analytics: AnalyticsService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.analytics.logPageView(event.urlAfterRedirects);
      });
  }
}
