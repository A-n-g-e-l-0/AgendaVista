import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '../../Interfaces/Persona';
import { ApiPersonaService } from '../../Services/api-persona.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-persona',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './crear-persona.component.html',
  styleUrl: './crear-persona.component.css'
})
export class CrearPersonaComponent implements OnInit {

  visible=true
 

  constructor(private router: Router, private apiService: ApiPersonaService) {}




  persona: Persona = {
    nombre: '',
    edad: 0,
    email: ''
  };


  ngOnInit(): void {
    
  }

 

  submitForm(form: NgForm) {
    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }else{
      this.pushDataPersona(this.persona)
    }
    // Handle valid form submission
  }
  goToPersonas() {
    this.router.navigate(['/listar']);
  }

  goToRegistro() {
    this.router.navigate(['/registrar']);
  }


  pushDataPersona(persona: Persona){
    this.apiService.postData('registrar',persona).subscribe(
      response => {
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    )
  }


}

