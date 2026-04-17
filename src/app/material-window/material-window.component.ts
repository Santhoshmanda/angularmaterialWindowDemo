import {
  Component,
  Inject,
  signal,
  Type,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  OnDestroy,
  ComponentRef,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';

export interface MaterialWindowData {
  /** Window title shown in the title bar */
  title: string;
  /** Any standalone Angular component to render inside the window body */
  component: Type<unknown>;
  /** Optional key→value pairs set as inputs on the injected component */
  inputs?: Record<string, unknown>;
  /** Optional custom width (default: 860px) */
  width?: string;
}

@Component({
  selector: 'app-material-window',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, CdkDrag, CdkDragHandle],
  templateUrl: './material-window.component.html',
  styleUrl: './material-window.component.scss'
})
export class MaterialWindowComponent implements AfterViewInit, OnDestroy {
  @ViewChild('contentHost', { read: ViewContainerRef })
  contentHost!: ViewContainerRef;

  isMaximized = signal(false);
  isMinimized = signal(false);

  private compRef: ComponentRef<unknown> | null = null;

  constructor(
    public dialogRef: MatDialogRef<MaterialWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MaterialWindowData,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.loadComponent();
  }

  ngOnDestroy(): void {
    this.compRef?.destroy();
  }

  private loadComponent(): void {
    if (!this.contentHost || !this.data.component) return;

    this.contentHost.clear();
    this.compRef = this.contentHost.createComponent(this.data.component);

    // Forward any inputs the caller provided
    if (this.data.inputs) {
      for (const [key, value] of Object.entries(this.data.inputs)) {
        this.compRef.setInput(key, value);
      }
    }
    this.compRef.changeDetectorRef.detectChanges();
  }

  minimize(): void {
    if (this.isMaximized()) this.isMaximized.set(false);
    this.isMinimized.update(v => !v);
    this.cdr.detectChanges();
  }

  toggleMaximize(): void {
    if (this.isMinimized()) this.isMinimized.set(false);
    this.isMaximized.update(v => !v);
    this.cdr.detectChanges();
  }

  close(): void {
    this.dialogRef.close();
  }
}
