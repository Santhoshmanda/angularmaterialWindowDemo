# 🪟 Enterprise Material Window System (Angular 19)

A high-performance, standalone Angular 19 application featuring a custom, desktop-inspired window manager built with **Angular Material** and **CDK**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Angular](https://img.shields.io/badge/angular-19.0.0-red.svg)
![Material](https://img.shields.io/badge/material-19.0.0-purple.svg)

## ✨ Features

- **Generic Window Host**: A single component that dynamically injects any other Angular component.
- **Desktop UX**: Full support for Draggable (`cdkDrag`), Maximizable, and Minimizable states.
- **Nested Windows**: Support for launching modals on top of windows with configurable background blocking.
- **Theming**: Premium Windows-style dark header (#3D4C5A) and clean enterprise layouts.
- **Standalone**: Built entirely with standalone components—no complex NgModules.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Angular CLI (`npm install -g @angular/cli`)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## 🛠️ Usage

To open a new window with a dynamic component:

```typescript
this.dialog.open(MaterialWindowComponent, {
  panelClass: 'custom-dialog-container',
  hasBackdrop: false,
  data: {
    title: 'Your Window Title',
    component: YourSpecificComponent,
    width: '800px',
    inputs: { someKey: 'someValue' }
  }
});
```

## 📂 Project Structure

- `/src/app/material-window`: The core window manager component.
- `/src/app/order-details`: Demo dashboard component.
- `/src/app/add-item`: Demo nested form component.

## 📄 License
This project is licensed under the MIT License.
