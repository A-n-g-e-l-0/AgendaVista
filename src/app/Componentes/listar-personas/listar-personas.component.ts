import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-personas',
  standalone: true,
  imports: [],
  templateUrl: './listar-personas.component.html',
  styleUrl: './listar-personas.component.css'
})
export class ListarPersonasComponent {

  constructor(private router: Router) {}

  goToPersonas() {
    this.router.navigate(['/listar']);
  }

  goToRegistro() {
    this.router.navigate(['/registrar']);
  }

}
