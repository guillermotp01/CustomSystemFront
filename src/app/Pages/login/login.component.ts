import { ChangeDetectionStrategy,Component, OnInit} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  hide = true;

  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      this.loginService.loginWeb(formData).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.route.navigate(['/dashboard']);
        },
        error: (err) => {
          //aca ya le ponemos el swagger o quizas otro tipo de alertas que nos guste mas 
          alert('Error en el inicio de sesión');
        }
      });
    }
  } 

  register(){
    this.route.navigate(['/register']);
  }
}

