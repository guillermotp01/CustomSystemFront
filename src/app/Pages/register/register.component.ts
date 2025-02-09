import { ChangeDetectionStrategy,Component, OnInit, signal} from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../Services/register.service';
import { userDto } from '../../Models/Dtos/UserDto/userDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  readonly hideRequiredControl = new FormControl(false);
  registerForm: FormGroup = new FormGroup({});
  hide = signal(true);

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isActive: [true],
      roleId: [1] 
    });
  }

  register() {
    if (this.registerForm.invalid) {
      alert('Por favor, complete todos los campos correctamente');
      return;
    }
    const userData: userDto = this.registerForm.value;
    this.registerService.registerUser(userData).subscribe({
      next: (response) => {
        this.router.navigate(['/login']);
        console.log('Respuesta del servidor:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
