import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedMaterialModule } from './app.component.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedMaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomSystem';
}
