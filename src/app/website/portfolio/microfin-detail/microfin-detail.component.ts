import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-microfin-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './microfin-detail.component.html',
  styleUrl: './microfin-detail.component.css'
})
export class MicrofinDetailComponent {
  // Using Angular Signals for reactive state
  activeTab = signal<'overview' | 'roles' | 'architecture' | 'roadmap'>('overview');

  project = {
    title: 'MicroFin Manager',
    subtitle: 'A Secure, Multi-Branch Core Banking Platform',
    status: 'In Active Development',
    githubUrl: 'https://github.com/sidofdountio/microfinance-api', // Backend Repository
    frontendUrl: 'https://github.com/sidofdountio/microfin-app', //
    
    stats: [
      { label: 'Staff Roles Modeled', value: '9 Roles', sub: 'Teller to Auditor' },
      { label: 'Supported Accounts', value: '5+ Types', sub: 'Savings, Loans, Business...' },
      { label: 'Balance Accuracy', value: '100%', sub: 'Immutable Ledger Traced' },
      { label: 'Direct Balance Edits', value: '0', sub: 'Strict Double-Entry' }
    ],

    roles: [
      { role: 'Teller', duty: 'Front-line cash handling (deposits & withdrawals). Cannot approve loans or unblock accounts.', icon: 'fa-cash-register' },
      { role: 'Customer Service Rep', duty: 'Opens accounts, manages client records, handles complaints — not authorized to move money.', icon: 'fa-headset' },
      { role: 'Loan Officer', duty: 'Manages a personal portfolio of clients: loan applications, repayments, client visits.', icon: 'fa-hand-holding-dollar' },
      { role: 'Branch Manager', duty: 'Approves new accounts, large transactions, and loans at their branch; full branch oversight.', icon: 'fa-user-tie' },
      { role: 'Regional Manager', duty: 'Aggregated reporting and escalation authority across every branch in a region.', icon: 'fa-chart-pie' },
      { role: 'Compliance Officer', duty: 'Reviews flagged activity, verifies KYC documents, produces compliance reports.', icon: 'fa-shield-halved' },
      { role: 'Auditor', duty: 'Read-only visibility into everything, including the full audit trail — for independent review.', icon: 'fa-magnifying-glass-chart' },
      { role: 'Administrator', duty: 'System configuration and user/role management.', icon: 'fa-sliders' }
    ],

    techStack: {
      backend: ['Java 21', 'Spring Boot 3', 'Spring Security', 'OAuth2 / JWT', 'Layered Architecture'],
      frontend: ['Angular 18+', 'Angular Signals', 'RxJS', 'TypeScript', 'Bootstrap 5'],
      database: ['PostgreSQL', 'Append-Only Ledger Schema', 'ACID Transactions'],
      devops: ['Docker', 'Linux Administration', 'Git', 'Maven']
    }
  };

  setTab(tab: 'overview' | 'roles' | 'architecture' | 'roadmap') {
    this.activeTab.set(tab);
  }
}