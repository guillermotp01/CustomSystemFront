import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { SharedMaterialModule } from '../../app.component.module';
import { Router, RouterOutlet } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginService } from '../../Services/login.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [RouterOutlet, SharedMaterialModule],
  templateUrl: './full.component.html',
  styleUrl: './full.component.css'
})
export class FullComponent {
  title = "CustomSystem";
  esLogin: boolean = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  rol = { name: "prueba", description: "prueba" };
  private loginService = inject(LoginService);
  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private cdRef: ChangeDetectorRef // Se inyecta ChangeDetectorRef
  ) {}

  ngOnInit(): void {
     if (this.loginService.getAuthToken()!=""){
        this.esLogin=true;
     }else{
      this.esLogin=false;
     }
    
  }

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
