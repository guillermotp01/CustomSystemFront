import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedMaterialModule } from '../../app.component.module';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [RouterOutlet,SharedMaterialModule , CommonModule],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {

}
