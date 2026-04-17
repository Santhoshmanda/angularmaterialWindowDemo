import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MaterialWindowComponent } from './material-window/material-window.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <div class="page">

      <!-- Top Bar -->
      <div class="topbar">
        <div class="topbar-brand">
          <mat-icon class="brand-icon">desktop_windows</mat-icon>
          <span>Angular Material Window Demo</span>
        </div>
        <span class="topbar-version">Angular 19 &nbsp;·&nbsp; Standalone</span>
      </div>

      <!-- Main Content -->
      <div class="content">

        <div class="card">
          <div class="card-icon">
            <mat-icon>shopping_cart</mat-icon>
          </div>
          <div class="card-body">
            <h2 class="card-title">Order Dashboard Demo</h2>
            <p class="card-desc">
              Click the button below to launch the generic <strong>Material Window</strong> passing the 
              <code>OrderDetailsComponent</code> dynamically. The window is built with <code>MatDialog</code> 
              and <code>cdkDrag</code>.
            </p>
          </div>
          <div class="card-action">
            <button mat-flat-button
                    class="open-btn"
                    id="btn-open-material-window"
                    (click)="openWindow()">
              <mat-icon>launch</mat-icon>
              Open Order Dashboard
            </button>
          </div>
        </div>

      </div>

    </div>
  `,
  styles: [`
    .page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: #edf1f5;
      font-family: 'Segoe UI', 'Inter', Arial, sans-serif;
    }

    /* Top Bar */
    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 46px;
      padding: 0 24px;
      background: #3D4C5A;
      color: #fff;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }

    .topbar-brand {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.01em;
    }

    .brand-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
      color: #a8c0d6;
    }

    .topbar-version {
      font-size: 11.5px;
      color: #a8c0d6;
      letter-spacing: 0.02em;
    }

    /* Content */
    .content {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 24px;
    }

    /* Card */
    .card {
      background: #fff;
      border: 1px solid #d0d8e0;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      width: 100%;
      max-width: 520px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 32px 28px;
      gap: 16px;
    }

    .card-icon {
      width: 52px;
      height: 52px;
      border-radius: 4px;
      background: #eaf0f5;
      border: 1px solid #c4d4de;
      display: flex;
      align-items: center;
      justify-content: center;
      mat-icon { color: #3D4C5A; font-size: 26px; width: 26px; height: 26px; }
    }

    .card-body { width: 100%; text-align: center; }

    .card-title {
      font-size: 16px;
      font-weight: 700;
      color: #2c3e50;
      margin: 0 0 8px;
    }

    .card-desc {
      font-size: 13.5px;
      color: #5a6a77;
      line-height: 1.6;
      margin: 0 0 16px;
      code {
        background: #eaf0f5;
        color: #3D4C5A;
        padding: 1px 5px;
        border-radius: 2px;
        font-size: 12.5px;
        font-family: 'Consolas', monospace;
      }
    }

    .card-action { width: 100%; }

    .open-btn {
      width: 100%;
      height: 38px;
      background: #3D4C5A !important;
      color: #fff !important;
      border-radius: 3px !important;
      font-size: 13px !important;
      font-weight: 600 !important;
      letter-spacing: 0.02em !important;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: background 0.15s ease !important;

      mat-icon { font-size: 17px; width: 17px; height: 17px; }

      &:hover { background: #4e6070 !important; }
    }
  `]
})
export class AppComponent {

  constructor(private dialog: MatDialog) {}

  openWindow() {
    this.dialog.open(MaterialWindowComponent, {
      panelClass: 'custom-dialog-container',
      hasBackdrop: true,
      disableClose: true,
      backdropClass: 'mat-window-overlay',
      // We pass the dynamic component here!
      data: { 
        title: 'Order Details Dashboard',
        component: OrderDetailsComponent,
        inputs: { customerName: 'Stark Industries' }
      },
    });
  }
}
