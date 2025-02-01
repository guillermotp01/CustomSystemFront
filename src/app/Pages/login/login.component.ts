import { ChangeDetectionStrategy,Component, inject, signal} from '@angular/core';

import { BotonComponent } from '../../Shared/Components/boton/boton.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BotonComponent,MatCardModule,MatFormFieldModule
    ,MatIconModule,MatInputModule,MatCheckboxModule,MatRadioModule
    ,ReactiveFormsModule,MatButtonModule,MatDividerModule
  ], 
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  readonly hideRequiredControl = new FormControl(false);
   hide = signal(true);
    clickEvent(event: MouseEvent) {
      this.hide.set(!this.hide());
      event.stopPropagation();
    }
  private router =inject(Router);
  registrarse(){
    this.router.navigate(['/register']);
  }
}
