import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  standalone: true,
  imports: [],
  templateUrl: './crear-persona.component.html',
  styleUrl: './crear-persona.component.css'
})
export class CrearPersonaComponent {

  constructor(private router: Router) {}

  goToPersonas() {
    this.router.navigate(['/listar']);
  }

  goToRegistro() {
    this.router.navigate(['/registrar']);
  }

}
