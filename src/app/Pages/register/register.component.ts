import { ChangeDetectionStrategy,Component, signal} from '@angular/core';

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

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [BotonComponent,MatCardModule,MatFormFieldModule
    ,MatIconModule,MatInputModule,MatCheckboxModule,MatRadioModule
    ,ReactiveFormsModule,MatButtonModule,MatDividerModule
  ], 
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  readonly hideRequiredControl = new FormControl(false);
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
