import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MaterialWindowComponent } from '../material-window/material-window.component';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  @Input() customerName = 'Acme Corp';

  lineItems = [
    { sku: 'SRV-8U-990', name: 'Enterprise Server Rack 8U', category: 'Infrastructure', price: 1200.00, qty: 5, inStock: true, supplier: 'TechData' },
    { sku: 'SW-10G-48P', name: '48-Port 10G Managed Switch', category: 'Networking', price: 2450.00, qty: 2, inStock: true, supplier: 'Cisco Dist' },
    { sku: 'UPS-3000VA', name: 'Rackmount UPS 3000VA', category: 'Power', price: 850.00, qty: 3, inStock: false, supplier: 'APC Direct' },
    { sku: 'CBL-CAT6-10', name: 'Cat6 Patch Cable 10ft (100-pack)', category: 'Accessories', price: 110.00, qty: 4, inStock: true, supplier: 'CablesToGo' },
    { sku: 'PDU-M-30A', name: 'Metered PDU 30A Zero U', category: 'Power', price: 325.00, qty: 2, inStock: true, supplier: 'APC Direct' }
  ];

  // Controls whether the child window blocks the background
  blockBackground = true;

  constructor(private dialog: MatDialog) {}

  onAddItem() {
    this.dialog.open(MaterialWindowComponent, {
      panelClass: 'custom-dialog-container',
      hasBackdrop: this.blockBackground,
      disableClose: true,
      backdropClass: this.blockBackground ? 'mat-window-overlay' : undefined,
      data: {
        title: 'Add New Item',
        component: AddItemComponent,
        width: '500px'        // Smaller width for the form
      }
    });
  }
}
