import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedMaterialModule } from './app.component.module';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedMaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = "CustomSystem";
  esLogin: boolean = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private cdRef: ChangeDetectorRef // Se inyecta ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (this.sidenav) {
        if (res.matches) {
          this.sidenav.mode = "over";
          this.sidenav.close();
        } else {
          this.sidenav.mode = "side";
          this.sidenav.open();
        }
      }
      this.cdRef.detectChanges(); // Se fuerza la detección de cambios después de modificar la vista
    });
  }
}