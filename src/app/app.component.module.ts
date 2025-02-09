import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { BotonComponent } from './Shared/Components/Button/boton.component';

@NgModule({
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDividerModule,
        MatButtonModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        BotonComponent,
        CommonModule, 
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        BotonComponent
    ]
})
export class SharedMaterialModule { }
