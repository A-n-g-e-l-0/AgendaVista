import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '../../Interfaces/Persona';
import { ApiPersonaService } from '../../Services/api-persona.service';

@Component({
  selector: 'app-crear-persona',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './crear-persona.component.html',
  styleUrl: './crear-persona.component.css'
})
export class CrearPersonaComponent {

  persona: Persona = {
    nombre: '',
    edad: 0,
    email: ''
  };


submitForm() {
  console.log('Pruebas  ' + this.persona)
 
}

  constructor(private router: Router, private apiService: ApiPersonaService) {}

  goToPersonas() {
    this.router.navigate(['/listar']);
  }

  goToRegistro() {
    this.router.navigate(['/registrar']);
  }



}
