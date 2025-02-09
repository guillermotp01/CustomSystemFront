import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input() texto: string = 'Click';  // Texto del botón
  @Input() color: string = '#7FB3C1';  // Color por defecto

  @Output() Onclick= new EventEmitter();  // Evento click

  ejecutar() {
    this.Onclick.emit();
  }

}
